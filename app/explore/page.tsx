'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';

const challenges = [
  {
    id: 1,
    title: '春日花语创意设计',
    description: '用AI创作一幅充满春天气息的艺术作品',
    participants: 128,
    daysLeft: 5,
    prize: '¥1000',
    image: 'https://picsum.photos/800/600?random=4',
  },
  {
    id: 2,
    title: '环保主题包装设计',
    description: '设计一款环保创意包装，展现可持续理念',
    participants: 256,
    daysLeft: 7,
    prize: '¥1500',
    image: 'https://picsum.photos/800/600?random=5',
  },
  {
    id: 3,
    title: '城市印象艺术展',
    description: '用AI捕捉城市的独特魅力',
    participants: 189,
    daysLeft: 3,
    prize: '¥2000',
    image: 'https://picsum.photos/800/600?random=6',
  },
  {
    id: 4,
    title: '未来科技产品设计',
    description: '设计一款具有未来感的科技产品',
    participants: 312,
    daysLeft: 10,
    prize: '¥2500',
    image: 'https://picsum.photos/800/600?random=7',
  },
  {
    id: 5,
    title: '传统文化创新设计',
    description: '将传统文化元素融入现代设计',
    participants: 245,
    daysLeft: 6,
    prize: '¥1800',
    image: 'https://picsum.photos/800/600?random=8',
  },
  {
    id: 6,
    title: '可持续时尚设计',
    description: '设计环保可持续的时尚单品',
    participants: 178,
    daysLeft: 4,
    prize: '¥1200',
    image: 'https://picsum.photos/800/600?random=9',
  },
];

const showcases = [
  {
    id: 1,
    title: '星空主题T恤',
    author: '设计师小王',
    likes: 234,
    comments: 45,
    image: 'https://picsum.photos/800/600?random=10',
  },
  {
    id: 2,
    title: '城市印象帆布包',
    author: '创意达人阿明',
    likes: 189,
    comments: 32,
    image: 'https://picsum.photos/800/600?random=11',
  },
  {
    id: 3,
    title: '自然元素手机壳',
    author: '设计师小李',
    likes: 156,
    comments: 28,
    image: 'https://picsum.photos/800/600?random=12',
  },
  {
    id: 4,
    title: '几何图案笔记本',
    author: '创意师小张',
    likes: 201,
    comments: 36,
    image: 'https://picsum.photos/800/600?random=13',
  },
  {
    id: 5,
    title: '抽象艺术马克杯',
    author: '艺术家小陈',
    likes: 167,
    comments: 24,
    image: 'https://picsum.photos/800/600?random=14',
  },
  {
    id: 6,
    title: '极简风格台历',
    author: '设计师小刘',
    likes: 145,
    comments: 19,
    image: 'https://picsum.photos/800/600?random=15',
  },
];

const banners = [
  {
    id: 1,
    image: 'https://picsum.photos/1200/400?random=1',
    title: '春日创意挑战赛',
    description: '用AI创作一幅充满春天气息的艺术作品',
  },
  {
    id: 2,
    image: 'https://picsum.photos/1200/400?random=2',
    title: '环保主题设计大赛',
    description: '设计一款环保创意包装，展现可持续理念',
  },
  {
    id: 3,
    image: 'https://picsum.photos/1200/400?random=3',
    title: '城市印象艺术展',
    description: '用AI捕捉城市的独特魅力',
  },
];

export default function Explore() {
  const [activeTab, setActiveTab] = useState('challenges');
  const [currentBanner, setCurrentBanner] = useState(0);

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // 获取上一个和下一个banner的索引
  const getPrevIndex = (current: number) => (current - 1 + banners.length) % banners.length;
  const getNextIndex = (current: number) => (current + 1) % banners.length;

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="w-full pt-16">
        {/* 轮播 Banner */}
        <div className="relative h-[400px] mb-8">
          <div className="relative h-full flex items-center">
            {/* 左侧banner */}
            <div className="absolute left-0 w-[200px] h-[360px] z-10">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src={banners[getPrevIndex(currentBanner)].image}
                  alt={banners[getPrevIndex(currentBanner)].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>

            {/* 主banner */}
            <div className="w-full mx-auto px-[220px] group">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                {banners.map((banner, index) => (
                  <div
                    key={banner.id}
                    className={`absolute inset-0 transition-all duration-500 ${
                      index === currentBanner
                        ? 'translate-x-0 opacity-100'
                        : index === getPrevIndex(currentBanner)
                        ? '-translate-x-full opacity-0'
                        : 'translate-x-full opacity-0'
                    }`}
                  >
                    <Image
                      src={banner.image}
                      alt={banner.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center">
                      <div className="text-white max-w-2xl px-8">
                        <h2 className="text-4xl font-bold mb-4">{banner.title}</h2>
                        <p className="text-xl">{banner.description}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* 左右切换按钮 */}
                <button
                  onClick={() => setCurrentBanner(getPrevIndex(currentBanner))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentBanner(getNextIndex(currentBanner))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* 右侧banner */}
            <div className="absolute right-0 w-[200px] h-[360px] z-10">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src={banners[getNextIndex(currentBanner)].image}
                  alt={banners[getNextIndex(currentBanner)].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>
          </div>

          {/* 导航按钮 */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentBanner ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentBanner(index)}
              />
            ))}
          </div>
        </div>

        {/* 分类和筛选 */}
        <div className="container mx-auto">
          <div className="flex justify-center items-center mb-8">
            <div className="inline-flex p-1 bg-gray-100 rounded-full">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'challenges'
                    ? 'bg-white text-black shadow'
                    : 'text-gray-600 hover:text-black'
                }`}
                onClick={() => setActiveTab('challenges')}
              >
                创意挑战
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'showcase'
                    ? 'bg-white text-black shadow'
                    : 'text-gray-600 hover:text-black'
                }`}
                onClick={() => setActiveTab('showcase')}
              >
                作品展示
              </button>
            </div>
          </div>

          {/* 创意挑战 */}
          {activeTab === 'challenges' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {challenges.map((challenge) => (
                <div key={challenge.id} className="card hover:shadow-lg transition-shadow bg-white">
                  <div className="aspect-video relative rounded-lg mb-4 overflow-hidden">
                    <Image
                      src={challenge.image}
                      alt={challenge.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                  <p className="text-gray-600 mb-4">{challenge.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{challenge.participants} 人参与</span>
                    <span>还剩 {challenge.daysLeft} 天</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">奖金 {challenge.prize}</span>
                    <button className="btn-primary">立即参与</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 作品展示 */}
          {activeTab === 'showcase' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {showcases.map((showcase) => (
                <div key={showcase.id} className="card hover:shadow-lg transition-shadow bg-white">
                  <div className="aspect-video relative rounded-lg mb-4 overflow-hidden">
                    <Image
                      src={showcase.image}
                      alt={showcase.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{showcase.title}</h3>
                  <p className="text-gray-600 mb-4">by {showcase.author}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1">
                        <span>👍</span>
                        <span>{showcase.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1">
                        <span>💬</span>
                        <span>{showcase.comments}</span>
                      </button>
                    </div>
                    <button className="text-black hover:text-gray-600">
                      分享
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 加载更多 */}
          <div className="text-center mt-12">
            <button className="btn-secondary">
              加载更多
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 