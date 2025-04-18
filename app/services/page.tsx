'use client';

import Navbar from '../components/Navbar';

const services = [
  {
    id: 1,
    title: '品牌定制服务',
    description: '为企业提供一站式品牌视觉设计服务，包括logo、VI系统、包装等',
    features: [
      'Logo设计',
      '品牌视觉系统',
      '包装设计',
      '营销物料设计',
    ],
    price: '¥9999起',
    popular: true,
  },
  {
    id: 2,
    title: '产品定制服务',
    description: '为个人和企业提供产品外观设计、结构设计等服务',
    features: [
      '外观设计',
      '结构设计',
      '3D建模',
      '效果图渲染',
    ],
    price: '¥4999起',
    popular: false,
  },
  {
    id: 3,
    title: '活动物料设计',
    description: '为各类活动提供整套视觉设计服务，包括海报、展架、宣传册等',
    features: [
      '活动主视觉设计',
      '物料设计',
      '展位设计',
      '宣传册设计',
    ],
    price: '¥3999起',
    popular: false,
  },
];

const cases = [
  {
    id: 1,
    title: '某科技公司品牌升级',
    description: '通过AI辅助设计，为客户打造全新的品牌形象',
    image: '/images/placeholder.svg',
  },
  {
    id: 2,
    title: '某食品包装设计',
    description: '结合传统与现代元素，设计独特的产品包装',
    image: '/images/placeholder.svg',
  },
  // 添加更多案例...
];

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24">
        {/* 页面标题 */}
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">设计服务</h1>
          <p className="text-gray-600">专业的设计团队，为您提供一站式设计解决方案</p>
        </div>

        {/* 服务特点 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">专业设计团队</h3>
            <p className="text-gray-600">资深设计师一对一服务，确保设计品质</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">AI辅助设计</h3>
            <p className="text-gray-600">结合AI技术，提供更高效的设计方案</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">一站式服务</h3>
            <p className="text-gray-600">从设计到生产，全流程品质把控</p>
          </div>
        </div>

        {/* 服务套餐 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">服务套餐</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`card relative ${
                  service.popular ? 'border-2 border-black' : ''
                }`}
              >
                {service.popular && (
                  <span className="absolute top-0 right-0 bg-black text-white px-4 py-1 text-sm transform translate-y-0 translate-x-0">
                    热门
                  </span>
                )}
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <div className="text-2xl font-bold mb-4">{service.price}</div>
                  <button className={`w-full ${
                    service.popular ? 'btn-primary' : 'btn-secondary'
                  }`}>
                    立即咨询
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 成功案例 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">成功案例</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((case_) => (
              <div key={case_.id} className="card hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-100 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">{case_.title}</h3>
                <p className="text-gray-600">{case_.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 联系我们 */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-4">联系我们</h2>
          <p className="text-gray-600 mb-8">填写以下表单，我们会尽快与您联系</p>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="您的称呼"
                  className="w-full px-6 py-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="电子邮箱"
                  className="w-full px-6 py-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <textarea
                  placeholder="项目需求描述"
                  rows={4}
                  className="w-full px-6 py-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                提交需求
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
} 