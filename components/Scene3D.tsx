'use client';

import { useRef, useMemo } from 'react';
'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';

function FloatingOrbs() {
  const groupRef = useRef<Group>(null);

  const orbs = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
      ] as [number, number, number],
      scale: 0.5 + Math.random() * 0.5,
      speed: 0.2 + Math.random() * 0.3,
      color: i % 3 === 0 ? '#9333EA' : i % 3 === 1 ? '#7C3AED' : '#A855F7',
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {orbs.map((orb, i) => (
        <FloatingOrb
          key={i}
          position={orb.position}
          scale={orb.scale}
          speed={orb.speed}
          color={orb.color}
        />
      ))}
    </group>
  );
}

function FloatingOrb({
  position,
  scale,
  speed,
  color,
}: {
  position: [number, number, number];
  scale: number;
  speed: number;
  color: string;
}) {
  const meshRef = useRef<Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed) * 2;
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

export function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10 opacity-30">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#9333EA" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#7C3AED" />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
}

