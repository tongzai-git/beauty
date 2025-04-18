'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import {
  Shirt,
  ShoppingBag,
  Coffee,
  Smartphone,
  Pencil,
  Home,
  Palette,
  Droplets,
  Square,
  Clock,
  Mountain,
  Fan,
  Cpu,
  Sparkles,
  Image as ImageIcon,
  RotateCcw,
  Download,
  Check,
  Maximize2,
  RotateCw,
  ZoomIn,
  Move,
  ChevronDown,
  ChevronUp,
  Brush,
  Wand2,
  Shapes,
  Palette as Palette2,
  Flower2,
  Gem,
  Glasses,
  Watch,
  Sofa,
  Lamp,
  Book,
  Backpack,
  Smartphone as SmartphoneAlt,
  Box,
  Layers,
  RefreshCw,
  Shield,
  Droplet,
  TreePine,
  Camera,
  Upload,
  Target,
  ArrowRight,
  ZoomOut,
  Pipette
} from 'lucide-react';
import ModelViewer from '../components/ModelViewer';
import { useRouter } from 'next/navigation';
import { Listbox } from '@headlessui/react';

export default function AICustom() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('ai'); // 'ai' | 'upload'
  const [selectedCategory, setSelectedCategory] = useState('clothing');
  const [selectedProduct, setSelectedProduct] = useState('T恤');
  const [selectedStyle, setSelectedStyle] = useState('');
  const [showMoreStyles, setShowMoreStyles] = useState(false);
  const [showMoreProducts, setShowMoreProducts] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  const [selectedMaterial, setSelectedMaterial] = useState('普通');
  const [selectedPosition, setSelectedPosition] = useState('正面');
  const [creativeDescription, setCreativeDescription] = useState('');
  const [activePreview, setActivePreview] = useState('3d');
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  const styles = [
    { id: 'cartoon', name: '卡通插画', icon: Palette },
    { id: 'watercolor', name: '水彩绘画', icon: Droplets },
    { id: 'minimalist', name: '简约风格', icon: Square },
    { id: 'retro', name: '复古文艺', icon: Clock }
  ];

  const moreStyles = [
    { id: 'japanese', name: '日式和风', icon: Mountain },
    { id: 'chinese', name: '国风水墨', icon: Brush },
    { id: 'fantasy', name: '奇幻魔法', icon: Wand2 },
    { id: 'geometric', name: '几何图形', icon: Shapes },
    { id: 'oil', name: '油画艺术', icon: Palette2 },
    { id: 'floral', name: '花卉植物', icon: Flower2 },
    { id: 'crystal', name: '水晶钻石', icon: Gem },
    { id: 'fashion', name: '时尚潮流', icon: Glasses },
    { id: 'realistic', name: '写实风格', icon: ImageIcon },
    { id: 'chinese2', name: '传统纹样', icon: Fan },
    { id: 'cyberpunk', name: '赛博朋克', icon: Cpu },
    { id: 'creative', name: '创意混搭', icon: Sparkles }
  ];

  const productCategories = [
    {
      id: 'clothing',
      name: '服装',
      icon: Shirt,
      items: ['T恤', '卫衣', '衬衫', '外套', '裤子', '裙子', '帽子', '袜子']
    },
    {
      id: 'bags',
      name: '包袋',
      icon: ShoppingBag,
      items: ['帆布袋', '双肩包', '手提包', '钱包', '化妆包', '电脑包', '旅行包', '运动包']
    },
    {
      id: 'cups',
      name: '杯子',
      icon: Coffee,
      items: ['马克杯', '保温杯', '水杯', '咖啡杯', '茶杯', '酒杯', '运动水壶', '随手杯']
    },
    {
      id: 'phone',
      name: '手机壳',
      icon: Smartphone,
      items: ['iPhone壳', '华为壳', '小米壳', 'OPPO壳', 'vivo壳', '三星壳', '平板壳', '耳机壳']
    },
    {
      id: 'stationery',
      name: '文具',
      icon: Pencil,
      items: ['笔记本', '钢笔', '铅笔盒', '便利贴', '日历', '书签', '贴纸', '明信片']
    },
    {
      id: 'home',
      name: '家居',
      icon: Home,
      items: ['抱枕', '地毯', '窗帘', '床品', '餐具', '装饰画', '摆件', '收纳盒']
    },
    {
      id: 'digital',
      name: '数码',
      icon: SmartphoneAlt,
      items: ['耳机套', '键盘贴', '鼠标垫', '手表带', '数据线', '充电器', '支架', '收纳包']
    },
    {
      id: 'accessories',
      name: '配饰',
      icon: Watch,
      items: ['项链', '手链', '耳环', '戒指', '胸针', '发饰', '围巾', '手表']
    }
  ];

  const moreProductCategories = [
    {
      id: 'furniture',
      name: '家具',
      icon: Sofa,
      items: ['沙发垫', '椅垫', '桌布', '坐垫', '靠垫', '地垫', '桌垫', '脚垫']
    },
    {
      id: 'lighting',
      name: '灯具',
      icon: Lamp,
      items: ['台灯', '落地灯', '吊灯', '壁灯', '夜灯', '氛围灯', '装饰灯', '投影灯']
    },
    {
      id: 'books',
      name: '图书',
      icon: Book,
      items: ['封面', '书签', '笔记本', '日记本', '相册', '明信片', '海报', '卡片']
    },
    {
      id: 'sports',
      name: '运动',
      icon: Backpack,
      items: ['运动包', '水壶', '毛巾', '护具', '瑜伽垫', '跳绳', '发带', '护腕']
    }
  ];

  const displayedCategories = showMoreProducts
    ? [...productCategories, ...moreProductCategories]
    : [...productCategories, ...moreProductCategories.slice(0, 2)];

  // 获取当前选中分类的具体品类
  const selectedCategoryItems = [...productCategories, ...moreProductCategories]
    .find(c => c.id === selectedCategory)
    ?.items || [];

  const colors = [
    { name: '白色', value: '#ffffff' },
    { name: '黑色', value: '#000000' },
    { name: '红色', value: '#e74c3c' },
    { name: '蓝色', value: '#3498db' },
    { name: '绿色', value: '#2ecc71' },
    { name: '黄色', value: '#f1c40f' },
  ];

  // 添加材质选项数据
  const materials = [
    { name: '布料', icon: <Layers className="w-5 h-5" />, image: '/materials/buliao1.png' },
    { name: '金属', icon: <Shield className="w-5 h-5" />, image: '/materials/jinshu1.png' },
    { name: '塑料', icon: <Box className="w-5 h-5" />, image: '/materials/suliao1.png' },
    { name: '玻璃', icon: <Droplet className="w-5 h-5" />, image: '/materials/boli1.png' },
    { name: '木材', icon: <TreePine className="w-5 h-5" />, image: '/materials/mucai1.png' },
    { name: '皮革', icon: <Square className="w-5 h-5" />, image: '/materials/pige1.png' }
  ];

  // 添加设计位置选项
  const designPositions = [
    { id: 'front', name: '正面' },
    { id: 'back', name: '背面' },
    { id: 'left_sleeve', name: '左袖' },
    { id: 'right_sleeve', name: '右袖' },
    { id: 'left_chest', name: '左胸' },
    { id: 'right_chest', name: '右胸' }
  ];

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY;
    const newScale = delta > 0 ? Math.max(0.5, scale - 0.1) : Math.min(2, scale + 0.1);
    setScale(newScale);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPosition({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - startPosition.x,
      y: e.clientY - startPosition.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <style jsx global>{`
        body {
          overflow: hidden;
        }
        select {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background-color: white;
        }
        select option {
          background-color: white;
          color: black;
        }
        select option:hover {
          background-color: #f9fafb;
        }
      `}</style>
      <Navbar />
      <main className="w-full py-2 mt-12 px-4 h-[calc(100vh-3rem)] overflow-hidden">
        <div className="flex h-full">
          <div className="w-[420px] border-r border-gray-100 flex flex-col h-full shrink-0">
            {/* 顶部切换标签 - AI创作/作品上传 */}
            <div className="px-6 pt-4 shrink-0">
              <div className="flex p-1.5 bg-gray-100 rounded-full gap-1 mb-4">
                <button 
                  className={`flex-1 px-6 py-2.5 text-sm font-medium rounded-full transition-colors ${
                    activeTab === 'ai' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('ai')}
                >
                  AI创作
                </button>
                <button 
                  className={`flex-1 px-6 py-2.5 text-sm font-medium rounded-full transition-colors ${
                    activeTab === 'upload' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('upload')}
                >
                  作品上传
                </button>
              </div>
            </div>

            {/* AI创作模式内容区域 */}
            {activeTab === 'ai' ? (
              <div className="flex-1 overflow-y-auto">
                <div className="px-6 pb-4">
                  <div className="space-y-4">
                    {/* 创意描述输入区域 */}
                    <div>
                      <h3 className="text-base font-semibold mb-2">创意描述</h3>
                      <div className="relative aspect-[16/7] bg-gray-100 rounded-lg mb-2">
                        <textarea
                          value={creativeDescription}
                          onChange={(e) => setCreativeDescription(e.target.value)}
                          placeholder="请描述您想要的创意效果..."
                          className="absolute inset-0 w-full h-full bg-transparent p-4 resize-none outline-none text-sm"
                        />
                        <div className="absolute right-2 bottom-2 z-10">
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            id="image-upload"
                          />
                          <label
                            htmlFor="image-upload"
                            className="flex items-center gap-1 px-2 py-1 border rounded-lg cursor-pointer hover:border-black transition-colors text-sm bg-white"
                          >
                            <ImageIcon className="w-4 h-4" />
                            <span>导入参考图</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* 风格选择区域 */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-base font-semibold">选择风格</h3>
                        <button
                          className="text-sm text-gray-500 hover:text-black flex items-center gap-0.5"
                          onClick={() => setShowMoreStyles(!showMoreStyles)}
                        >
                          {showMoreStyles ? '收起' : '展开'}
                          {showMoreStyles ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                      <div className="space-y-2">
                        {/* 主要风格选项 */}
                        <div className="grid grid-cols-4 gap-2">
                          {styles.map((style) => (
                            <button
                              key={style.id}
                              className={`w-full p-2 border rounded-lg text-center transition-colors ${
                                selectedStyle === style.id
                                  ? 'border-black bg-black text-white'
                                  : 'hover:border-black'
                              }`}
                              onClick={() => setSelectedStyle(style.id)}
                            >
                              <style.icon className="w-5 h-5 mx-auto mb-1" />
                              <div className="text-sm">{style.name}</div>
                            </button>
                          ))}
                        </div>
                        {/* 更多风格选项 */}
                        {showMoreStyles && (
                          <div className="grid grid-cols-4 gap-2 pt-2 border-t">
                            {moreStyles.map((style) => (
                              <button
                                key={style.id}
                                className={`w-full p-2 border rounded-lg text-center transition-colors ${
                                  selectedStyle === style.id
                                    ? 'border-black bg-black text-white'
                                    : 'hover:border-black'
                                }`}
                                onClick={() => setSelectedStyle(style.id)}
                              >
                                <style.icon className="w-5 h-5 mx-auto mb-1" />
                                <div className="text-sm">{style.name}</div>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* 开始生成按钮 */}
                    <div>
                      <button className="btn-primary w-full text-sm flex items-center justify-center gap-2 py-2.5">
                        <Sparkles className="w-4 h-4" />
                        开始生成
                      </button>
                    </div>

                    {/* 生成结果展示区域 */}
                    <div className="flex-1">
                      <div className="mb-2 flex justify-between items-center relative z-50">
                        <div>
                          <h3 className="text-base font-semibold">生成结果</h3>
                          <div className="flex items-center gap-2 text-gray-500">
                            <Clock className="w-4 h-4" />
                            <span className="text-xs">
                              {new Date().toLocaleString('zh-CN', {
                                month: '2-digit',
                                day: '2-digit',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white relative group">
                            <RefreshCw className="w-5 h-5" />
                            <span className="absolute left-1/2 -translate-x-1/2 top-full mt-0.5 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none z-[100]">
                              重新生成
                            </span>
                          </button>
                          <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white relative group">
                            <Download className="w-5 h-5" />
                            <span className="absolute left-1/2 -translate-x-1/2 top-full mt-0.5 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none z-[100]">
                              下载全部
                            </span>
                          </button>
                        </div>
                      </div>
                      {/* 生成结果图片网格 */}
                      <div className="grid grid-cols-2 gap-2 relative">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="group relative">
                            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                              <Image
                                src={`https://picsum.photos/400/400?random=${i}`}
                                alt={`生成结果${i}`}
                                width={400}
                                height={400}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-200">
                              <button className="text-xs flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur hover:bg-white transition-all relative group/btn">
                                <Wand2 className="w-5 h-5 text-black" />
                                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover/btn:opacity-100 whitespace-nowrap pointer-events-none">图片编辑</span>
                              </button>
                              <button className="text-xs flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur hover:bg-white transition-all relative group/btn">
                                <Box className="w-5 h-5 text-black" />
                                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover/btn:opacity-100 whitespace-nowrap pointer-events-none">3D预览</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto">
                <div className="px-6 pb-4">
                  <div className="space-y-4">
                    {/* 作品集展示区域 */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium">我的作品集</div>
                        <button className="text-xs text-gray-500 hover:text-gray-700">查看全部</button>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <div key={i} className="group relative">
                            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                              <Image
                                src={`https://picsum.photos/300/300?random=${i + 10}`}
                                alt={`作品${i}`}
                                width={300}
                                height={300}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                            </div>
                            <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="text-xs text-white font-medium truncate">作品名称</div>
                              <div className="text-[10px] text-white/80">2024-03-20</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 上传区域 */}
                    <div>
                      <div className="text-sm font-medium mb-2">上传新作品</div>
                      <div className="space-y-2">
                        <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center relative group cursor-pointer hover:border-gray-300 transition-colors">
                          <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept="image/jpeg,image/png" />
                          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                            <Upload className="w-6 h-6 text-gray-400" />
                          </div>
                          <div className="text-sm font-medium mb-1">点击或拖拽上传</div>
                          <div className="text-xs text-gray-500">支持 JPG、PNG 格式，单张图片不超过 5MB</div>
                        </div>
                        <button className="btn-primary w-full py-2 rounded-lg text-sm flex items-center justify-center gap-2">
                          <Upload className="w-4 h-4" />
                          立即上传
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex-1 p-4">
            <div className="h-full flex gap-4">
              {/* 3D预览区域 */}
              <div className="flex-1 flex flex-col min-w-0">
                <div className="flex justify-center mb-2">
                  <div className="flex p-1.5 bg-gray-100 rounded-full gap-1">
                    <button 
                      className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors flex items-center gap-1.5 ${
                        activePreview === '3d' 
                        ? 'bg-white text-gray-900 shadow-sm' 
                        : 'text-gray-500 hover:text-gray-700'
                      }`}
                      onClick={() => setActivePreview('3d')}
                    >
                      <Box className="w-4 h-4" />
                      3D预览
                    </button>
                    <button 
                      className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors flex items-center gap-1.5 ${
                        activePreview === '2d' 
                        ? 'bg-white text-gray-900 shadow-sm' 
                        : 'text-gray-500 hover:text-gray-700'
                      }`}
                      onClick={() => setActivePreview('2d')}
                    >
                      <Square className="w-4 h-4" />
                      2D设计
                    </button>
                  </div>
                </div>
                <div className="flex-1 relative bg-gray-100 rounded-lg overflow-hidden min-h-0">
                  {activePreview === '3d' ? (
                    <div className="absolute inset-0">
                      <ModelViewer color={selectedColor} material={selectedMaterial} />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white">
                          <RotateCcw className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white">
                          <RotateCw className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white">
                          <ZoomIn className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white">
                          <ZoomOut className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white">
                          <Move className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div 
                      className="absolute inset-0 flex items-center justify-center bg-gray-100 overflow-hidden"
                      onWheel={handleWheel}
                      onMouseDown={handleMouseDown}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseLeave}
                      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                    >
                      <div 
                        className="relative"
                        style={{
                          transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                          transition: isDragging ? 'none' : 'transform 0.1s ease'
                        }}
                      >
                        <Image
                          src="/preview/2d-design.png"
                          alt="2D设计预览"
                          width={600}
                          height={600}
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 右侧控制面板 */}
              <div className="w-[420px] flex flex-col gap-6 border-l border-gray-100 pl-4 shrink-0 relative">
                {/* 选择产品区域 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="w-5 h-5" />
                      <span className="font-medium">选择产品</span>
                    </div>
                    <button
                      className="text-sm text-gray-500 hover:text-black flex items-center gap-0.5"
                      onClick={() => setShowMoreProducts(!showMoreProducts)}
                    >
                      {showMoreProducts ? '收起' : '展开'}
                      {showMoreProducts ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <div className="space-y-2">
                    <div className="grid grid-cols-4 gap-2">
                      {productCategories.map((category) => (
                        <button
                          key={category.id}
                          className={`w-full p-2 border rounded-lg text-center transition-colors ${
                            selectedCategory === category.id
                              ? 'border-black bg-black text-white'
                              : 'hover:border-black'
                          }`}
                          onClick={() => setSelectedCategory(category.id)}
                        >
                          <category.icon className="w-5 h-5 mx-auto mb-1" />
                          <div className="text-sm">{category.name}</div>
                        </button>
                      ))}
                    </div>
                    {showMoreProducts && (
                      <div className="grid grid-cols-4 gap-2">
                        {moreProductCategories.map((category) => (
                          <button
                            key={category.id}
                            className={`w-full p-2 border rounded-lg text-center transition-colors ${
                              selectedCategory === category.id
                                ? 'border-black bg-black text-white'
                                : 'hover:border-black'
                            }`}
                            onClick={() => setSelectedCategory(category.id)}
                          >
                            <category.icon className="w-5 h-5 mx-auto mb-1" />
                            <div className="text-sm">{category.name}</div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">选择具体品类</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {selectedCategoryItems.map((item) => (
                        <button
                          key={item}
                          className={`w-full p-2 border rounded-lg text-center transition-colors text-sm ${
                            selectedProduct === item
                              ? 'border-black bg-black text-white'
                              : 'hover:border-black'
                          }`}
                          onClick={() => setSelectedProduct(item)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 颜色选择区域 */}
                <div className="shrink-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Palette className="w-5 h-5" />
                    <span className="font-medium">选择颜色</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <input
                          type="color"
                          value={selectedColor}
                          onChange={(e) => setSelectedColor(e.target.value)}
                          className="sr-only"
                          id="color-picker"
                        />
                        <label
                          htmlFor="color-picker"
                          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 cursor-pointer"
                          style={{
                            border: '1px solid #e5e7eb'
                          }}
                        >
                          <Pipette className="w-4 h-4" />
                        </label>
                      </div>
                      {colors.map((color) => (
                        <button
                          key={color.value}
                          onClick={() => setSelectedColor(color.value)}
                          className={`w-8 h-8 rounded-full border ${
                            selectedColor === color.value ? 'ring-2 ring-offset-1 ring-black' : ''
                          }`}
                          style={{
                            backgroundColor: color.value,
                            border: color.value === '#ffffff' ? '1px solid #e5e7eb' : 'none'
                          }}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* 材质选择区域 */}
                <div className="shrink-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Layers className="w-5 h-5" />
                    <span className="font-medium">选择材质</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {materials.map((material) => (
                      <button
                        key={material.name}
                        className={`flex flex-col items-center p-2 rounded-lg border transition-colors ${
                          selectedMaterial === material.name 
                            ? 'border-black bg-black text-white' 
                            : 'border-gray-200 hover:border-black'
                        }`}
                        onClick={() => setSelectedMaterial(material.name)}
                      >
                        <div className="w-20 h-20 rounded-md overflow-hidden bg-gray-100 mb-2">
                          <Image
                            src={material.image}
                            alt={material.name}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-sm font-medium">{material.name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 下一步按钮 */}
                <div className="fixed bottom-4 right-4 w-[404px] bg-white z-10">
                  <button
                    onClick={() => router.push('/product/1')}
                    className="w-full px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>进入下一步</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 