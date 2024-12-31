import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { CatmullRomCurve3, Vector3, TubeGeometry } from 'three';
import { Float } from '@react-three/drei';

export default function RoadmapPath() {
  const pathRef = useRef();
  const materialRef = useRef();

  // Create a curved path
  const curve = useMemo(() => {
    const points = [
      new Vector3(-10, 0, 0),
      new Vector3(-8, 2, -3),
      new Vector3(-4, -1, -5),
      new Vector3(0, 2, -3),
      new Vector3(4, -1, -5),
      new Vector3(8, 2, -3),
      new Vector3(10, 0, 0),
    ];
    return new CatmullRomCurve3(points);
  }, []);

  // Create milestone markers
  const Milestone = ({ position }) => (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh position={position}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial color="#6366f1" metalness={0.5} roughness={0.2} />
      </mesh>
    </Float>
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.dashOffset -= 0.001;
    }
  });

  return (
    <group>
      {/* Main path */}
      <mesh ref={pathRef}>
        <tubeGeometry args={[curve, 64, 0.2, 8, false]} />
        <meshStandardMaterial
          ref={materialRef}
          color="#4f46e5"
          metalness={0.5}
          roughness={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Milestone markers */}
      {[0, 0.2, 0.4, 0.6, 0.8, 1].map((t, i) => (
        <Milestone key={i} position={curve.getPoint(t)} />
      ))}
    </group>
  );
}