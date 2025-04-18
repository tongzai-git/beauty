'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ShoppingCart, CreditCard } from 'lucide-react';
import Navbar from '../../components/Navbar';

export default function ProductDetail() {
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState('黑色');
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const basePrice = 199.00;

  const colors = ['黑色', '白色', '灰色', '蓝色'];
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const productImages = [
    'https://picsum.photos/800/800?random=1',
    'https://picsum.photos/800/800?random=2',
    'https://picsum.photos/800/800?random=3',
    'https://picsum.photos/800/800?random=4',
  ];

  const totalPrice = (basePrice * quantity).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {/* 返回按钮 */}
        <button
          onClick={() => router.back()}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          返回
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 商品图片 */}
          <div className="flex gap-4">
            <div className="w-4/5 aspect-square rounded-lg overflow-hidden bg-white shadow-sm">
              <img
                src={productImages[currentImageIndex]}
                alt="商品主图"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/5 flex flex-col gap-4">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-square rounded-lg overflow-hidden bg-white shadow-sm cursor-pointer hover:shadow-md transition-shadow ${
                    currentImageIndex === index ? 'ring-2 ring-black' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`商品图片 ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 商品信息 */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">AI 定制 T 恤</h1>
              <div className="mt-2 flex items-baseline gap-2">
                <p className="text-2xl text-gray-900">¥{totalPrice}</p>
                <p className="text-sm text-gray-500">单价：¥{basePrice.toFixed(2)}</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* 尺码选择 */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">尺码</h3>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-md text-sm font-medium ${
                        selectedSize === size
                          ? 'bg-black text-white'
                          : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* 颜色选择 */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">颜色</h3>
                <div className="flex gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-md text-sm font-medium ${
                        selectedColor === color
                          ? 'bg-black text-white'
                          : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* 数量选择 */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">数量</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span className="text-lg font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* 操作按钮 */}
            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                加入购物车
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                <CreditCard className="w-5 h-5" />
                立即购买
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 