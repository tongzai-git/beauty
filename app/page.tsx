'use client';

import Navbar from './components/Navbar';
import AIToolCard from './components/AIToolCard';
import ProductCard from './components/ProductCard';
import Image from 'next/image';

const aiTools = [
  {
    title: 'AI创意设计',
    description: '一键生成创意图案',
    image: '/images/placeholder.svg',
    href: '/design'
  },
  {
    title: '智能重绘',
    description: '局部修改完善设计',
    image: '/images/placeholder.svg',
    href: '/edit'
  },
  {
    title: '3D建模',
    description: '将创意转化为3D模型',
    image: '/images/placeholder.svg',
    href: '/3d'
  },
  {
    title: '高清优化',
    description: '提升图像品质',
    image: '/images/placeholder.svg',
    href: '/hd'
  }
];

const products = [
  {
    title: '原创猫咪陶瓷杯',
    price: 99,
    image: '/images/placeholder.svg',
    href: '/product/1'
  },
  {
    title: '手工编织环保购物袋',
    price: 199,
    image: '/images/placeholder.svg',
    href: '/product/2'
  },
  {
    title: '艺术家联名T恤',
    price: 129,
    image: '/images/placeholder.svg',
    href: '/product/3'
  },
  {
    title: '现代简约装饰摆件',
    price: 299,
    image: '/images/placeholder.svg',
    href: '/product/4'
  }
];

const productCategories = [
  {
    title: 'T恤定制',
    description: '舒适面料，多种款式，个性化定制T恤',
    icon: '👕',
  },
  {
    title: '饰品配饰',
    description: '精致饰品，多样配饰，让创意更出彩',
    icon: '💍',
  },
  {
    title: '家居用品',
    description: '创意家居，实用美观，提升生活品质',
    icon: '🏠',
  },
  {
    title: '艺术摆件',
    description: '艺术创作，独特设计，装点生活空间',
    icon: '🎨',
  },
  {
    title: '定制服饰',
    description: '个性服装，量身定制，展现独特风格',
    icon: '👔',
  },
  {
    title: '礼品定制',
    description: '创意礼品，定制服务，传递美好心意',
    icon: '🎁',
  }
];

const orderSteps = [
  {
    step: 1,
    title: '选择产品',
    description: '浏览产品目录，选择心仪的定制品类'
  },
  {
    step: 2,
    title: '上传设计',
    description: '上传设计图稿，或使用AI工具生成创意'
  },
  {
    step: 3,
    title: '确认',
    description: '确认设计效果，选择材质和尺寸等参数'
  },
  {
    step: 4,
    title: '定制生产',
    description: '专业团队制作，严格把控生产质量'
  }
];

const styleModels = [
  { id: 'realistic', name: '写实风格', description: '逼真的照片级效果' },
  { id: 'anime', name: '动漫风格', description: '日系动漫画风' },
  { id: 'watercolor', name: '水彩风格', description: '清新淡雅水彩画效果' },
  { id: 'oil', name: '油画风格', description: '古典油画艺术效果' },
  { id: 'sketch', name: '素描风格', description: '黑白素描画风' },
  { id: 'chinese', name: '国画风格', description: '传统国画水墨效果' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero区域 */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-20">
          <div className="w-1/2 pr-12">
            <h1 className="text-4xl font-bold mb-6">一站式AI造物平台</h1>
            <p className="text-gray-600 text-lg mb-8">
              美物AI文创平台为您提供一站式AI定制化解决方案，从创意发想到实物制作，轻松实现个性化定制需求。
            </p>
            <div className="flex gap-4">
              <button className="btn-primary">开始创作</button>
              <button className="btn-secondary">了解更多</button>
            </div>
          </div>
          <div className="w-1/2">
            <div className="aspect-video bg-gray-100 rounded-lg">
              {/* 这里可以放置主图 */}
            </div>
          </div>
        </div>

        {/* 产品展示区 */}
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">产品展示</h2>
            <p className="text-gray-600">我们提供多种类型的产品定制服务，从个人到企业，满足您的各种需求</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI创作工具 */}
        <section className="py-20 bg-gray-50 -mx-4 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI创作工具</h2>
            <p className="text-gray-600">DIY个性化设计，让AI帮你实现创意灵感</p>
          </div>
          <div className="flex gap-8">
            <div className="w-1/3 space-y-4">
              {/* 创作提示输入 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">创意描述</h3>
                <textarea
                  className="w-full h-32 p-4 border rounded-lg resize-none"
                  placeholder="描述您想要的设计效果..."
                />
              </div>

              {/* 风格选择 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">选择风格</h3>
                <div className="grid grid-cols-2 gap-2">
                  {styleModels.map((style) => (
                    <button
                      key={style.id}
                      className="p-3 border rounded-lg text-left hover:border-black transition-colors"
                    >
                      <div className="font-medium">{style.name}</div>
                      <div className="text-sm text-gray-500">{style.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 参考图片上传 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">参考图片</h3>
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="cursor-pointer block"
                  >
                    <div className="text-4xl mb-2">📷</div>
                    <div className="text-gray-500">点击或拖拽上传参考图片</div>
                    <div className="text-sm text-gray-400 mt-1">支持 JPG、PNG 格式</div>
                  </label>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className="btn-primary w-full">开始生成</button>
                </div>
              </div>

              {/* 高级设置 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">高级设置</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">图像比例</label>
                    <select className="w-full p-2 border rounded">
                      <option>1:1 正方形</option>
                      <option>16:9 横版</option>
                      <option>9:16 竖版</option>
                      <option>4:3 横版</option>
                      <option>3:4 竖版</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">生成数量</label>
                    <select className="w-full p-2 border rounded">
                      <option>1张</option>
                      <option>2张</option>
                      <option>4张</option>
                      <option>6张</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">创意程度</label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      defaultValue="50"
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>保守</span>
                      <span>平衡</span>
                      <span>创意</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 预览区域 */}
            <div className="w-2/3">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold">生成结果</h3>
                  <div className="flex gap-2">
                    <button className="btn-secondary">重新生成</button>
                    <button className="btn-primary">下载全部</button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="group relative">
                      <div className="aspect-square bg-gray-100 rounded-lg"></div>
                      <div className="absolute inset-0 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <button className="btn-primary">使用</button>
                        <button className="btn-secondary">下载</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 效果预览 */}
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">效果预览</h2>
            <p className="text-gray-600">将您的设计应用到实际产品上，实时预览效果</p>
          </div>
          <div className="flex gap-8">
            <div className="w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">选择产品</h3>
                <div className="space-y-4">
                  <select className="w-full p-2 border rounded">
                    <option>T恤</option>
                    <option>帆布包</option>
                    <option>马克杯</option>
                  </select>
                  <div>
                    <h4 className="font-medium mb-2">自定义选项</h4>
                    <div className="flex gap-2">
                      <button className="w-8 h-8 rounded-full bg-black"></button>
                      <button className="w-8 h-8 rounded-full bg-white border"></button>
                      <button className="w-8 h-8 rounded-full bg-red-500"></button>
                      <button className="w-8 h-8 rounded-full bg-blue-500"></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/3">
              <div className="aspect-video bg-gray-100 rounded-lg"></div>
            </div>
          </div>
        </section>

        {/* 下单流程 */}
        <section className="py-20 bg-gray-50 -mx-4 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">下单流程</h2>
            <p className="text-gray-600">简单四步，轻松完成定制</p>
          </div>
          <div className="grid grid-cols-4 gap-8">
            {orderSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="btn-primary">立即下单</button>
          </div>
        </section>
      </div>
    </main>
  );
} 