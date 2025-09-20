import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import ThreeCanvas from './ThreeCanvas';

/**
 * A component that renders a rotating 3D box.
 */
const RotatingBox = () => {
  // This reference gives us direct access to the THREE.Mesh object
  const meshRef = useRef();

  // useFrame is a hook that runs on every rendered frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Animate the rotation on both x and y axes
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={'mediumpurple'} />
    </mesh>
  );
};

const InteractiveScene = () => (
  <ThreeCanvas>
    <RotatingBox />
  </ThreeCanvas>
);

export default InteractiveScene;