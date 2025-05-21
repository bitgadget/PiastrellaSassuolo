import React, { useState, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";

// Lista completa dei prodotti (ordine come nella sezione prodotti)
const prodotti = [
    // Effetto Pietra
    { nome: "Pietra Grigia 60x60", texture: "/prodotti/pietra-60x60.png" },
    { nome: "Pietra Beige 60x60", texture: "/prodotti/pietra-beige-60x60.png" },
    { nome: "Pietra Antracite 30x60", texture: "/prodotti/pietra-antracite-30x60.png" },
    { nome: "Pietra Bianca 60x60", texture: "/prodotti/pietra-bianca-60x60.png" },
    { nome: "Pietra Grigia 30x60", texture: "/prodotti/pietra-grigia-30x60.png" },
    { nome: "Pietra Beige 30x60", texture: "/prodotti/pietra-beige-30x60.png" },
    { nome: "Pietra Scura 60x60", texture: "/prodotti/pietra-scura-60x60.png" },
    { nome: "Pietra Sabbia 60x60", texture: "/prodotti/pietra-sabbia-60x60.png" },
    { nome: "Pietra Grigia 45x45", texture: "/prodotti/pietra-grigia-45x45.png" },
    { nome: "Pietra Beige 45x45", texture: "/prodotti/pietra-beige-45x45.png" },
    // Effetto Legno
    { nome: "Gres Effetto Legno 20x120", texture: "/prodotti/legno-20x120.png" },
    { nome: "Legno Chiaro 20x120", texture: "/prodotti/legno-chiaro-20x120.png" },
    { nome: "Legno Scuro 20x120", texture: "/prodotti/legno-scuro-20x120.png" },
    { nome: "Legno Rovere 15x90", texture: "/prodotti/legno-rovere-15x90.png" },
    { nome: "Legno Grigio 20x120", texture: "/prodotti/legno-grigio-20x120.png" },
    { nome: "Legno Miele 20x120", texture: "/prodotti/legno-miele-20x120.png" },
    { nome: "Legno Sbiancato 20x120", texture: "/prodotti/legno-sbiancato-20x120.png" },
    { nome: "Legno Noce 20x120", texture: "/prodotti/legno-noce-20x120.png" },
    { nome: "Legno Naturale 15x90", texture: "/prodotti/legno-naturale-15x90.png" },
    { nome: "Legno Anticato 20x120", texture: "/prodotti/legno-anticato-20x120.png" },
    // Effetto Cemento
    { nome: "Gres Porcellanato 60x60", texture: "/prodotti/gres-60x60.png" },
    { nome: "Cemento Grigio 60x60", texture: "/prodotti/cemento-grigio-60x60.png" },
    { nome: "Cemento Antracite 60x60", texture: "/prodotti/cemento-antracite-60x60.png" },
    { nome: "Cemento Beige 60x60", texture: "/prodotti/cemento-beige-60x60.png" },
    { nome: "Cemento Chiaro 30x60", texture: "/prodotti/cemento-chiaro-30x60.png" },
    { nome: "Cemento Grigio 30x60", texture: "/prodotti/cemento-grigio-30x60.png" },
    { nome: "Cemento Scuro 60x60", texture: "/prodotti/cemento-scuro-60x60.png" },
    { nome: "Cemento Sabbia 60x60", texture: "/prodotti/cemento-sabbia-60x60.png" },
    { nome: "Cemento Grigio 45x45", texture: "/prodotti/cemento-grigio-45x45.png" },
    { nome: "Cemento Beige 45x45", texture: "/prodotti/cemento-beige-45x45.png" },
    // Effetto Marmo
    { nome: "Effetto Marmo Bianco 120x60", texture: "/prodotti/marmo-120x60.png" },
    { nome: "Marmo Calacatta 60x120", texture: "/prodotti/marmo-calacatta-60x120.png" },
    { nome: "Marmo Statuario 60x120", texture: "/prodotti/marmo-statuario-60x120.png" },
    { nome: "Marmo Nero 60x120", texture: "/prodotti/marmo-nero-60x120.png" },
    { nome: "Marmo Beige 60x120", texture: "/prodotti/marmo-beige-60x120.png" },
    { nome: "Marmo Grigio 60x120", texture: "/prodotti/marmo-grigio-60x120.png" },
    { nome: "Marmo Bianco 60x60", texture: "/prodotti/marmo-bianco-60x60.png" },
    { nome: "Marmo Nero 60x60", texture: "/prodotti/marmo-nero-60x60.png" },
    { nome: "Marmo Beige 60x60", texture: "/prodotti/marmo-beige-60x60.png" },
    { nome: "Marmo Grigio 60x60", texture: "/prodotti/marmo-grigio-60x60.png" },
];

function Pavimento({ textureUrl }) {
    let texture;
    try {
        texture = useLoader(THREE.TextureLoader, textureUrl);
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(8, 8);
        texture.encoding = THREE.sRGBEncoding;
    } catch (e) {
        return (
            <mesh rotation-x={-Math.PI / 2} receiveShadow>
                <planeGeometry args={[8, 8]} />
                <meshStandardMaterial color="#ddd" />
            </mesh>
        );
    }
    return (
        <mesh rotation-x={-Math.PI / 2} receiveShadow>
            <planeGeometry args={[8, 8]} />
            <meshBasicMaterial map={texture} toneMapped={false} />
        </mesh>
    );
}

export default function FloorConfigurator3D() {
    const [selected, setSelected] = useState(0);
    const controlsRef = useRef();

    // Funzione per vista dall'alto
    const goTopView = () => {
        if (controlsRef.current) {
            controlsRef.current.object.position.set(0, 8, 0.01);
            controlsRef.current.target.set(0, 0, 0);
            controlsRef.current.update();
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-stretch gap-8 bg-white rounded-2xl shadow-lg p-8 border border-neutral-200">
            {/* Visualizzatore 3D */}
            <div className="flex-1 flex flex-col items-center justify-center gap-4">
                <div
                    style={{
                        width: "100%",
                        minWidth: 420,
                        height: 480,
                        borderRadius: 20,
                        overflow: "hidden",
                        background: "#222",
                        boxShadow: "0 4px 32px #0002",
                        border: "2px solid #222",
                    }}
                >
                    <Canvas
                        shadows
                        camera={{ position: [4, 5, 4], fov: 45 }}
                        gl={{ outputEncoding: THREE.sRGBEncoding }}
                    >
                        <ambientLight intensity={0.4} />
                        <directionalLight
                            position={[5, 8, 5]}
                            intensity={0.5}
                            castShadow
                        />
                        <Pavimento textureUrl={prodotti[selected].texture} />
                        <OrbitControls
                            ref={controlsRef}
                            enablePan={false}
                            maxPolarAngle={Math.PI / 2}
                            minPolarAngle={0}
                        />
                        <Environment preset="city" />
                    </Canvas>
                </div>
                <button
                    onClick={goTopView}
                    className="mt-2 px-4 py-2 rounded bg-black text-white text-sm font-semibold shadow hover:bg-neutral-800 transition"
                >
                    Vista dall'alto
                </button>
            </div>
            {/* Selettore a destra */}
            <div className="flex flex-col justify-center md:w-72 w-full">
                <label
                    htmlFor="tipo-piastrella"
                    className="block mb-2 font-semibold text-neutral-700 text-lg"
                >
                    Scegli la piastrella
                </label>
                <select
                    id="tipo-piastrella"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-neutral-100 text-neutral-900 text-base focus:outline-none focus:ring-2 focus:ring-black transition mb-4 shadow"
                    value={selected}
                    onChange={(e) => setSelected(Number(e.target.value))}
                >
                    {prodotti.map((p, i) => (
                        <option key={p.nome} value={i}>
                            {p.nome}
                        </option>
                    ))}
                </select>
                <div className="flex items-center gap-3 mt-2">
                    <img
                        src={prodotti[selected].texture}
                        alt={prodotti[selected].nome}
                        className="w-20 h-20 object-contain rounded border border-neutral-200 bg-white shadow"
                    />
                    <span className="font-medium text-neutral-700 text-lg">
                        {prodotti[selected].nome}
                    </span>
                </div>
            </div>
        </div>
    );
}