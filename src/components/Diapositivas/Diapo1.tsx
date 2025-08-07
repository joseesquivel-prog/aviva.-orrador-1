import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import CameraControls from 'camera-controls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

CameraControls.install({ THREE });

type Props = {
  onStart: () => void;
};

export default function Diapo1({ onStart }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x808080, 40, 100);

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(6, 1, 10);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.25;

    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
      renderer.domElement.style.position = 'absolute';
      renderer.domElement.style.top = '0';
      renderer.domElement.style.left = '0';
      renderer.domElement.style.width = '100vw';
      renderer.domElement.style.height = '100vh';
      renderer.domElement.style.zIndex = '1';
    }

    // Lights
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(40, 35, 40);
    scene.add(dirLight);

    // Ambient light for better visibility
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    // Ground
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(80, 80),
      new THREE.MeshStandardMaterial({ color: 0xcccccc })
    );
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);

    // Camera controls
    const controls = new CameraControls(camera, renderer.domElement);

    // Load GLTF model
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/models/columna.gltf', (gltf: any) => {
      gltf.scene.traverse((nMesh: THREE.Object3D) => {
        if ((nMesh as THREE.Mesh).isMesh) {
          // Assign basic material if missing
          if (!(nMesh as THREE.Mesh).material) {
            (nMesh as THREE.Mesh).material = new THREE.MeshStandardMaterial({ color: 0xcccccc });
          }
          (nMesh as THREE.Mesh).castShadow = true;
          (nMesh as THREE.Mesh).receiveShadow = true;
        }
      });
      scene.add(gltf.scene);
    });

    // Load HDR background (optional)
    const rgbeLoader = new RGBELoader();
    rgbeLoader.load('/textures/fondo_Cielo3.hdr', (texture: THREE.Texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.background = texture;
      scene.environment = texture;
    });

    // Animation loop
    const animate = () => {
      controls.update(0.016);
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const handleStart = () => {
    const elem = containerRef.current;
    if (elem?.requestFullscreen) {
      elem.requestFullscreen();
    }
    onStart();
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '45%',
          left: 0,
          width: '100%',
          textAlign: 'center',
          zIndex: 2,
          pointerEvents: 'auto',
        }}
      >
        <button onClick={handleStart} style={{ fontSize: 24, padding: '12px 32px' }}>
          Empezar
        </button>
      </div>
    </div>
  );
}