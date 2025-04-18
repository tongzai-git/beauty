'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';

const categories = [
  { id: 'all', name: '全部' },
  { id: 'clothing', name: '服饰' },
  { id: 'accessories', name: '配饰' },
  { id: 'home', name: '家居' },
  { id: 'art', name: '艺术品' },
  { id: 'gifts', name: '礼品' },
];

const products = [
  {
    id: 1,
    name: 'AI艺术印花T恤',
    price: 199,
    image: '/images/products/product-1.jpg',
    category: 'clothing',
    tags: ['新品', '热销'],
  },
  {
    id: 2,
    name: '定制帆布包',
    price: 159,
    image: '/images/products/product-2.jpg',
    category: 'accessories',
    tags: ['限量'],
  },
  {
    id: 3,
    name: '个性化马克杯',
    price: 89,
    image: '/images/products/product-3.jpg',
    category: 'home',
    tags: ['热销'],
  },
  {
    id: 4,
    name: 'AI生成艺术画',
    price: 299,
    image: '/images/products/product-4.jpg',
    category: 'art',
    tags: ['新品'],
  },
  {
    id: 5,
    name: '创意手机壳',
    price: 129,
    image: '/images/products/product-5.jpg',
    category: 'accessories',
    tags: ['新品'],
  },
  {
    id: 6,
    name: '艺术抱枕',
    price: 169,
    image: '/images/products/product-6.jpg',
    category: 'home',
    tags: ['热销'],
  },
  {
    id: 7,
    name: 'AI设计卫衣',
    price: 259,
    image: '/images/products/product-7.jpg',
    category: 'clothing',
    tags: ['新品'],
  },
  {
    id: 8,
    name: '创意笔记本',
    price: 79,
    image: '/images/products/product-8.jpg',
    category: 'gifts',
    tags: ['限量'],
  },
  {
    id: 9,
    name: '艺术鼠标垫',
    price: 69,
    image: '/images/products/product-9.jpg',
    category: 'gifts',
    tags: ['热销'],
  },
  {
    id: 10,
    name: 'AI设计帽子',
    price: 149,
    image: '/images/products/product-10.jpg',
    category: 'accessories',
    tags: ['新品'],
  },
  {
    id: 11,
    name: '创意台灯',
    price: 199,
    image: '/images/products/product-11.jpg',
    category: 'home',
    tags: ['限量'],
  },
  {
    id: 12,
    name: '艺术挂钟',
    price: 189,
    image: '/images/products/product-12.jpg',
    category: 'home',
    tags: ['热销'],
  },
];

export default function Store() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredProducts = products.filter(
    (product) => activeCategory === 'all' || product.category === activeCategory
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-16">
        {/* 搜索栏 */}
        <div className="max-w-2xl mx-auto mb-8 mt-8">
          <div className="relative">
            <input
              type="text"
              placeholder="搜索商品..."
              className="w-full px-6 py-4 rounded-full border focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="absolute right-2 top-2 btn-primary">
              搜索
            </button>
          </div>
        </div>

        {/* 分类和筛选 */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          <select
            className="p-2 border rounded-lg"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="newest">最新上架</option>
            <option value="price-asc">价格从低到高</option>
            <option value="price-desc">价格从高到低</option>
            <option value="popular">人气排序</option>
          </select>
        </div>

        {/* 商品列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-black text-white rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 btn-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  查看详情
                </button>
              </div>
              <h3 className="font-medium mb-2">{product.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">¥{product.price}</span>
                <button className="text-sm text-gray-600 hover:text-black">
                  加入购物车
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 分页器 */}
        <div className="flex justify-end mt-8">
          <div className="flex items-center gap-2">
            <button
              className="px-3 py-1 rounded-lg border disabled:opacity-50"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              上一页
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`px-3 py-1 rounded-lg ${
                  currentPage === page
                    ? 'bg-black text-white'
                    : 'border hover:bg-gray-100'
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button
              className="px-3 py-1 rounded-lg border disabled:opacity-50"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              下一页
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 