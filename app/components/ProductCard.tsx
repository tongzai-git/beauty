'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  href: string;
}

export default function ProductCard({ title, price, image, href }: ProductCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="card group-hover:-translate-y-1">
        <div className="aspect-square relative overflow-hidden rounded-xl mb-4">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="space-y-2">
          <h3 className="font-medium text-gray-900 line-clamp-2 text-sm">{title}</h3>
          <div className="flex items-center justify-between">
            <p className="text-base font-medium">¥ {price.toFixed(2)}</p>
            <button className="text-sm text-gray-600 hover:text-black transition-colors duration-300 flex items-center">
              查看详情
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
} 