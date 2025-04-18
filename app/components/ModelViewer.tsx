'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('./Scene'), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center">加载中...</div>
});

export default function ModelViewer({ color, material }: { color: string; material: string }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="w-full h-full flex items-center justify-center">加载中...</div>;
  }

  return (
    <div className="w-full h-full relative aspect-square">
      <Scene color={color} material={material} />
    </div>
  );
} 