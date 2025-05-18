import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NEON = "#eaff00";
const GRID = 7; // 7x7x7 = 343 punti
const SIZE = 1.4; // dimensione del cubo/sfera

// Genera le posizioni dei punti per il cubo
function getCubePositions() {
  const positions = [];
  for (let x = 0; x < GRID; x++) {
    for (let y = 0; y < GRID; y++) {
      for (let z = 0; z < GRID; z++) {
        positions.push([
          ((x / (GRID - 1)) - 0.5) * SIZE,
          ((y / (GRID - 1)) - 0.5) * SIZE,
          ((z / (GRID - 1)) - 0.5) * SIZE,
        ]);
      }
    }
  }
  return positions;
}

// Genera le posizioni dei punti per la sfera
function getSpherePositions() {
  const positions = [];
  let i = 0;
  for (let x = 0; x < GRID; x++) {
    for (let y = 0; y < GRID; y++) {
      for (let z = 0; z < GRID; z++) {
        // Normalizza la posizione rispetto al centro
        const nx = (x / (GRID - 1)) - 0.5;
        const ny = (y / (GRID - 1)) - 0.5;
        const nz = (z / (GRID - 1)) - 0.5;
        const r = Math.sqrt(nx * nx + ny * ny + nz * nz);
        // Proietta su una sfera solo se dentro il raggio
        const sphereRadius = SIZE * 0.5;
        if (r === 0) {
          positions.push([0, 0, 0]);
        } else {
          positions.push([
            (nx / r) * sphereRadius,
            (ny / r) * sphereRadius,
            (nz / r) * sphereRadius,
          ]);
        }
        i++;
      }
    }
  }
  return positions;
}

const cubePositions = getCubePositions();
const spherePositions = getSpherePositions();

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function lerp3(a, b, t) {
  return [
    lerp(a[0], b[0], t),
    lerp(a[1], b[1], t),
    lerp(a[2], b[2], t),
  ];
}

function MorphingShape() {
  const [phase, setPhase] = useState(0); // 0...1...0 loop
  const group = useRef();

  useFrame((state, delta) => {
    // Animazione avanti e indietro (ping-pong)
    setPhase((prev) => {
      let next = prev + delta * 0.28; // <--- valore ridotto per rallentare
      if (next > 2) next -= 2;
      return next;
    });
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.5;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
    }
  });

  // t va da 0 (cubo) a 1 (sfera) e ritorna a 0
  const t = phase < 1 ? phase : 2 - phase;

  return (
    <group ref={group}>
      {cubePositions.map((cubePos, i) => {
        const spherePos = spherePositions[i];
        const pos = lerp3(cubePos, spherePos, t);
        return (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.045, 12, 12]} />
            <meshStandardMaterial
              color="#222"
              emissive={NEON}
              emissiveIntensity={1.5}
              metalness={0.5}
              roughness={0.18}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 3.2], fov: 50 }} style={{ width: "100%", height: 320 }}>
      <ambientLight intensity={0.18} />
      <directionalLight position={[3, 2, 5]} intensity={0.5} />
      <MorphingShape />
    </Canvas>
  );
}
