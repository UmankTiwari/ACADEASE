import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const ThreeCanvas = ({ children }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <OrbitControls />
      {children}
    </Canvas>
  );
};

export default ThreeCanvas;