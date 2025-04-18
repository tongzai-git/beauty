'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

interface SceneProps {
  color: string;
  material: string;
}

export default function Scene({ color, material }: SceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 创建场景
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    sceneRef.current = scene;

    // 创建相机
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.set(0, 0.1, 3.5);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 添加轨道控制器
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // 添加环境光
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    // 添加主聚光灯
    const mainSpotLight = new THREE.SpotLight(0xffffff, 2);
    mainSpotLight.position.set(5, 5, 5);
    mainSpotLight.angle = Math.PI / 3;
    mainSpotLight.penumbra = 0.1;
    mainSpotLight.decay = 1;
    mainSpotLight.distance = 200;
    scene.add(mainSpotLight);

    // 添加辅助聚光灯
    const fillSpotLight = new THREE.SpotLight(0xffffff, 1.5);
    fillSpotLight.position.set(-5, 3, -5);
    fillSpotLight.angle = Math.PI / 3;
    fillSpotLight.penumbra = 0.2;
    fillSpotLight.decay = 1;
    fillSpotLight.distance = 200;
    scene.add(fillSpotLight);

    // 添加边缘光
    const rimLight = new THREE.SpotLight(0xffffff, 1);
    rimLight.position.set(0, 8, -8);
    rimLight.angle = Math.PI / 4;
    rimLight.penumbra = 0.1;
    rimLight.decay = 1;
    rimLight.distance = 200;
    scene.add(rimLight);

    // 添加顶部光
    const topLight = new THREE.DirectionalLight(0xffffff, 1.5);
    topLight.position.set(0, 10, 0);
    scene.add(topLight);

    // 添加网格
    const gridSize = 10;
    const gridDivisions = 10;
    const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, 0x888888, 0xcccccc);
    gridHelper.position.y = -1.2;
    scene.add(gridHelper);

    // 加载GLB模型
    const loader = new GLTFLoader();
    loader.load(
      '/models/4.glb',
      (gltf: GLTF) => {
        const model = gltf.scene;
        
        // 计算模型的边界框
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        
        // 计算缩放比例，使模型大小合适
        const maxSize = Math.max(size.x, size.y, size.z);
        const scale = 2 / maxSize;
        model.scale.set(scale, scale, scale);
        
        // 将模型中心点移动到场景中心，并稍微向上移动
        model.position.set(-center.x * scale, -center.y * scale + 0.1, -center.z * scale);
        
        scene.add(model);

        // 设置材质
        model.traverse((child: THREE.Object3D) => {
          if (child instanceof THREE.Mesh) {
            // 将颜色字符串转换为THREE.Color
            const threeColor = new THREE.Color(color);
            
            child.material = new THREE.MeshStandardMaterial({
              color: threeColor,
              metalness: material === '金属' ? 0.9 : 0.1,
              roughness: material === '金属' ? 0.1 : 0.7,
              envMapIntensity: 1,
              flatShading: false,
              side: THREE.DoubleSide,
              toneMapped: false // 禁用色调映射，使颜色更准确
            });
          }
        });
      },
      undefined,
      (error: Error) => {
        console.error('Error loading model:', error);
      }
    );

    // 调整相机位置和视角
    camera.position.set(0, 0.1, 3.5);
    camera.lookAt(0, 0, 0);

    // 动画循环
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // 处理窗口大小变化
    const handleResize = () => {
      const width = containerRef.current?.clientWidth || 0;
      const height = containerRef.current?.clientHeight || 0;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // 清理函数
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, [color, material]);

  return <div ref={containerRef} className="w-full h-full" />;
} 