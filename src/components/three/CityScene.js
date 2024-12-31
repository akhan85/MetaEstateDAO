import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useHelper } from '@react-three/drei';
import * as THREE from 'three';

function Building({ position, height, color }) {
  const meshRef = useRef();
  
  return (
    <mesh position={position} ref={meshRef}>
      <boxGeometry args={[1, height, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function CityScene() {
  const lightRef = useRef();
  useHelper(lightRef, THREE.DirectionalLightHelper, 5);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        ref={lightRef}
        position={[10, 10, 5]}
        intensity={1}
        castShadow
      />
      
      {/* Generate random buildings */}
      {Array.from({ length: 15 }).map((_, i) => (
        <Building
          key={i}
          position={[
            (Math.random() - 0.5) * 10,
            Math.random() * 2,
            (Math.random() - 0.5) * 10
          ]}
          height={Math.random() * 5 + 2}
          color={i % 2 ? '#3B82F6' : '#A855F7'}
        />
      ))}
    </>
  );
}