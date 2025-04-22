import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, PerspectiveCamera } from '@react-three/drei';
import { useTheme } from '../../contexts/ThemeContext';
import * as THREE from 'three';

interface FloatingObjectProps {
  position: [number, number, number];
  speed?: number;
  size?: number;
  color?: string;
  shape?: 'box' | 'sphere' | 'octahedron';
}

const FloatingObject: React.FC<FloatingObjectProps> = ({
  position,
  speed = 1,
  size = 1,
  color = '#3b82f6',
  shape = 'box',
}) => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2 * speed;
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3 * speed;
  });

  const getGeometry = () => {
    switch (shape) {
      case 'sphere':
        return <sphereGeometry args={[size, 32, 32]} />;
      case 'octahedron':
        return <octahedronGeometry args={[size, 0]} />;
      default:
        return <boxGeometry args={[size, size, size]} />;
    }
  };

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <mesh ref={mesh} position={position} castShadow>
        {getGeometry()}
        <meshStandardMaterial color={color} roughness={0.5} metalness={0.8} />
      </mesh>
    </Float>
  );
};

const ThreeScene: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Canvas
      shadows
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
      <ambientLight intensity={theme === 'dark' ? 0.2 : 0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={theme === 'dark' ? 0.5 : 1}
        castShadow
      />
      
      <FloatingObject 
        position={[-3, 2, -5]} 
        shape="box" 
        size={0.7} 
        color="#3b82f6" 
        speed={0.7} 
      />
      <FloatingObject 
        position={[3.5, -1, -4]} 
        shape="sphere" 
        size={0.5} 
        color="#8b5cf6" 
        speed={1.2} 
      />
      <FloatingObject 
        position={[2, 3, -6]} 
        shape="octahedron" 
        size={0.8} 
        color="#ec4899" 
        speed={0.5} 
      />
      <FloatingObject 
        position={[-3, -2, -3]} 
        shape="sphere" 
        size={0.4} 
        color="#10b981" 
        speed={0.9} 
      />
      <FloatingObject 
        position={[0, 0, -7]} 
        shape="box" 
        size={1} 
        color="#f97316" 
        speed={0.3} 
      />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

export default ThreeScene;