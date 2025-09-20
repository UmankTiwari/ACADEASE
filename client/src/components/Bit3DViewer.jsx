import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, Sphere } from '@react-three/drei';
import ThreeCanvas from './ThreeCanvas';

const Bit3DViewer = ({ value = 0, animated = true }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current && animated) {
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <ThreeCanvas>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      <group ref={meshRef}>
        <Box
          args={[1, 1, 1]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <meshStandardMaterial 
            color={value === 1 ? '#00ff00' : '#ff0000'} 
            emissive={value === 1 ? '#004400' : '#440000'}
            emissiveIntensity={hovered ? 0.3 : 0.1}
          />
        </Box>
        
        <Text
          position={[0, -1.5, 0]}
          fontSize={0.5}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {value}
        </Text>
      </group>
    </ThreeCanvas>
  );
};

export default Bit3DViewer;