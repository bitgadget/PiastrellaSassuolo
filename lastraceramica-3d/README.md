### 1. Installazione di Three.js

Prima di tutto, assicurati di avere Three.js installato nel tuo progetto. Puoi farlo eseguendo il seguente comando:

```bash
npm install three
```

### 2. Creazione di un Componente 3D

Crea un nuovo componente React per il tuo configuratore 3D. Ad esempio, puoi chiamarlo `FloorConfigurator.jsx`.

```jsx
// filepath: /workspaces/lastraceramica/src/components/FloorConfigurator.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FloorConfigurator = ({ textures }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(5, 5);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const floor = new THREE.Mesh(geometry, material);
    floor.rotation.x = -Math.PI / 2; // Ruota il pavimento
    scene.add(floor);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  const changeTexture = (textureUrl) => {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(textureUrl, (texture) => {
      floor.material.map = texture;
      floor.material.needsUpdate = true;
    });
  };

  return (
    <div>
      <div ref={mountRef} />
      <div className="texture-selector">
        {textures.map((texture, index) => (
          <button key={index} onClick={() => changeTexture(texture.img)}>
            {texture.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FloorConfigurator;
```

### 3. Utilizzo del Componente nel Tuo Progetto

Ora puoi utilizzare il componente `FloorConfigurator` nel tuo file principale, ad esempio in `SinceraStudioLanding.jsx`. Assicurati di passare le texture disponibili come props.

```jsx
import FloorConfigurator from './components/FloorConfigurator';

// Aggiungi le texture che vuoi utilizzare
const textures = [
  { title: "Pietra Grigia", img: "/prodotti/pietra-60x60.png" },
  { title: "Pietra Beige", img: "/prodotti/pietra-beige-60x60.png" },
  // Aggiungi altre texture qui
];

// Nella tua funzione principale
return (
  <main>
    {/* Altri componenti */}
    <FloorConfigurator textures={textures} />
    {/* Altri componenti */}
  </main>
);
```

### 4. Stile e Layout

Puoi aggiungere stili CSS per il layout del tuo configuratore e dei pulsanti delle texture. Ad esempio:

```css
.texture-selector {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.texture-selector button {
  padding: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
}

.texture-selector button:hover {
  background-color: #444;
}
```

### 5. Considerazioni Finali

- **Performance**: Assicurati di ottimizzare le texture e le geometrie per mantenere buone prestazioni.
- **Responsive Design**: Potresti voler gestire il ridimensionamento della finestra per mantenere il canvas di Three.js correttamente dimensionato.
- **Interazione Avanzata**: Puoi aggiungere ulteriori funzionalità come la rotazione della vista, lo zoom e altre interazioni.

Con questi passaggi, dovresti essere in grado di integrare un configuratore 3D per cambiare il pavimento in tempo reale nel tuo progetto React. Se hai bisogno di ulteriori dettagli o chiarimenti, non esitare a chiedere!