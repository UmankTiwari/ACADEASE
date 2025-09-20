import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, Cylinder, Sphere } from '@react-three/drei';
import ThreeCanvas from './ThreeCanvas';

const Hardware3DViewer = ({ type = 'cpu', animated = true }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current && animated) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
  });

  const getComponent = () => {
    switch (type) {
      case 'cpu':
        return (
          <Box args={[2, 0.5, 2]}>
            <meshStandardMaterial 
              color={hovered ? '#00aaff' : '#0066cc'} 
              emissive="#001133"
              emissiveIntensity={hovered ? 0.2 : 0.1}
            />
          </Box>
        );
      case 'memory':
        return (
          <Box args={[1.5, 0.2, 3]}>
            <meshStandardMaterial 
              color={hovered ? '#ffaa00' : '#cc8800'} 
              emissive="#331100"
              emissiveIntensity={hovered ? 0.2 : 0.1}
            />
          </Box>
        );
      case 'gpu':
        return (
          <Box args={[2.5, 1, 0.5]}>
            <meshStandardMaterial 
              color={hovered ? '#ff6600' : '#cc4400'} 
              emissive="#331100"
              emissiveIntensity={hovered ? 0.2 : 0.1}
            />
          </Box>
        );
      default:
        return (
          <Sphere args={[1]}>
            <meshStandardMaterial 
              color={hovered ? '#aa00aa' : '#880088'} 
              emissive="#220022"
              emissiveIntensity={hovered ? 0.2 : 0.1}
            />
          </Sphere>
        );
    }
  };

  return (
    <ThreeCanvas>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      <group 
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {getComponent()}
        
        <Text
          position={[0, -1.5, 0]}
          fontSize={0.4}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {type.toUpperCase()}
        </Text>
      </group>
    </ThreeCanvas>
  );
};

export default Hardware3DViewer;