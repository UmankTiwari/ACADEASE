import React from 'react';
import { Canvas } from '@react-three/fiber';

export default function Meme3DViewer({ modelPath }) {
  return (
    <div className="h-64 w-full">
      {/* Minimal Canvas Setup */}
      <Canvas>{/* Add lights and model here */}</Canvas>
    </div>
  );
}