import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

interface GLTFViewerProps {
    modelPath: string;
  }
  
  const GLTFViewer: React.FC<GLTFViewerProps> = ({ modelPath }) => {
    const mountRef = useRef<HTMLDivElement | null>(null);
    const [loadedModel, setLoadedModel] = useState<boolean>(false); // Controle para garantir que o modelo é carregado uma vez
  
    useEffect(() => {
      if (!mountRef.current) return;
  
      // Inicializar a cena, câmera e renderizador
      const { scene, camera, renderer } = initScene();
      mountRef.current.appendChild(renderer.domElement);
  
      // Adicionar luz e controles de órbita
      addLighting(scene);
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
  
      // Carregar o modelo GLTF
      if (!loadedModel) {
        loadGLTF(modelPath, scene);
        setLoadedModel(true); // Garantir que o modelo só seja carregado uma vez
      }
  
      // Função de animação
      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
      animate();
  
      // Cleanup ao desmontar o componente
      return () => {
        mountRef.current?.removeChild(renderer.domElement);
      };
    }, [modelPath, loadedModel]); // Executa novamente se o modelPath mudar, mas somente carrega o modelo uma vez
  
    return <div ref={mountRef} />;
  };
  
  // Função para inicializar a cena, câmera e renderizador
  const initScene = () => {
    const scene = new THREE.Scene();
  
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1, 3);
  
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
  
    return { scene, camera, renderer };
  };
  
  // Função para adicionar luz à cena
  const addLighting = (scene: THREE.Scene) => {
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(2, 2, 2);
    scene.add(light);
  };
  
  // Função para carregar o modelo GLTF
  const loadGLTF = (path: string, scene: THREE.Scene) => {
    const loader = new GLTFLoader();
    loader.load(path, (gltf) => {
      scene.add(gltf.scene);
    });
  };
  
  export default GLTFViewer;