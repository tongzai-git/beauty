'use client';

import Image from 'next/image';
import Link from 'next/link';

interface AIToolCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export default function AIToolCard({ title, description, image, href }: AIToolCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="card group-hover:-translate-y-1">
        <div className="aspect-square relative overflow-hidden rounded-xl mb-6">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <div className="flex items-center text-gray-600">
          <span className="text-sm">{description}</span>
          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
} 