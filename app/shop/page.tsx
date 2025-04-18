import Image from 'next/image';

const products = [
  {
    id: 1,
    name: '定制T恤',
    price: 199,
    image: 'https://picsum.photos/id/999/400/400'
  },
  {
    id: 2,
    name: '艺术帆布包',
    price: 299,
    image: 'https://picsum.photos/id/1000/400/400'
  },
  {
    id: 3,
    name: '个性化马克杯',
    price: 99,
    image: 'https://picsum.photos/id/1001/400/400'
  },
  {
    id: 4,
    name: '艺术装饰画',
    price: 399,
    image: 'https://picsum.photos/id/1002/400/400'
  },
  {
    id: 5,
    name: '定制手机壳',
    price: 129,
    image: 'https://picsum.photos/id/1003/400/400'
  },
  {
    id: 6,
    name: '艺术笔记本',
    price: 159,
    image: 'https://picsum.photos/id/1004/400/400'
  },
  {
    id: 7,
    name: '个性化贴纸',
    price: 29,
    image: 'https://picsum.photos/id/1005/400/400'
  },
  {
    id: 8,
    name: '艺术明信片',
    price: 49,
    image: 'https://picsum.photos/id/1006/400/400'
  }
];

export default function Shop() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="aspect-square relative overflow-hidden rounded-lg mb-3">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>
            <div className="space-y-1">
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-gray-500">¥{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 