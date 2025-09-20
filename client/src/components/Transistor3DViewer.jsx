import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Cylinder, Sphere } from '@react-three/drei';
import ThreeCanvas from './ThreeCanvas';

const Transistor3DViewer = ({ state = 'off', animated = true }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current && animated) {
      meshRef.current.rotation.z += delta * 0.2;
    }
  });

  const isOn = state === 'on';
  const color = isOn ? '#00ff00' : '#666666';
  const emissive = isOn ? '#004400' : '#000000';

  return (
    <ThreeCanvas>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      <group ref={meshRef}>
        {/* Base */}
        <Cylinder
          args={[0.8, 0.8, 0.2]}
          position={[0, -0.5, 0]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <meshStandardMaterial 
            color={color}
            emissive={emissive}
            emissiveIntensity={hovered ? 0.3 : 0.1}
          />
        </Cylinder>
        
        {/* Collector */}
        <Cylinder
          args={[0.1, 0.1, 0.8]}
          position={[-0.5, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <meshStandardMaterial color="#333333" />
        </Cylinder>
        
        {/* Emitter */}
        <Cylinder
          args={[0.1, 0.1, 0.8]}
          position={[0.5, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <meshStandardMaterial color="#333333" />
        </Cylinder>
        
        {/* Base terminal */}
        <Cylinder
          args={[0.1, 0.1, 0.3]}
          position={[0, -0.8, 0]}
        >
          <meshStandardMaterial color="#333333" />
        </Cylinder>
        
        <Text
          position={[0, -1.5, 0]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {state.toUpperCase()}
        </Text>
      </group>
    </ThreeCanvas>
  );
};

export default Transistor3DViewer;