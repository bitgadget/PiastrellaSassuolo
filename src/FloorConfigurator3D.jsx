import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

const pavimenti = [
  { nome: "Pietra Grigia", texture: "/textures/pietra-60x60.jpg" },
  { nome: "Legno Rovere", texture: "/textures/legno-20x120.jpg" },
  { nome: "Cemento", texture: "/textures/cemento-grigio-60x60.jpg" },
];

function Pavimento({ texture }) {
  return (
    <mesh rotation-x={-Math.PI / 2} receiveShadow>
      <planeGeometry args={[4, 4]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default function FloorConfigurator3D() {
  const [selected, setSelected] = useState(0);
  const [texture, setTexture] = useState(null);

  // Carica la texture selezionata
  React.useEffect(() => {
    const loader = new window.THREE.TextureLoader();
    loader.load(pavimenti[selected].texture, setTexture);
  }, [selected]);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex gap-2 mb-2 justify-center">
        {pavimenti.map((p, i) => (
          <button
            key={p.nome}
            className={`px-3 py-1 rounded ${i === selected ? "bg-black text-white" : "bg-neutral-200"}`}
            onClick={() => setSelected(i)}
          >
            {p.nome}
          </button>
        ))}
      </div>
      <div style={{ height: 320, borderRadius: 16, overflow: "hidden" }}>
        <Canvas shadows camera={{ position: [2, 2, 2], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={0.7} castShadow />
          {texture && <Pavimento texture={texture} />}
          <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2.1} minPolarAngle={Math.PI / 2.1} />
          <Environment preset="city" />
        </Canvas>
      </div>
    </div>
  );
}