'use client';
import { useWindowSize } from '@/hooks';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

type AnimatedIconsProps = { iconSources: string[] };

export default function AnimatedIcons(props: AnimatedIconsProps) {
  const refContainer = useRef<HTMLDivElement>(null);

  let camera: THREE.OrthographicCamera,
    scene: THREE.Scene,
    renderer: THREE.WebGLRenderer,
    target: THREE.Vector3,
    sceneHeight: number,
    sceneWidth: number,
    aspectRatio: number,
    iconSize: number,
    iconGap: number,
    scrollOffset: number = 0,
    lastScrollOffset: number = 0;

  const iconSources: string[] = props.iconSources;
  const icons: THREE.Mesh[] = [];

  const cursorPosition: THREE.Vector2 = new THREE.Vector2(0, 0);
  const iconRotation: THREE.Vector2 = new THREE.Vector2(0, 0);

  // Set scene parameters
  function setSceneParams(): void {
    sceneHeight = window.innerWidth > 600 ? 80 : 55; // Component height in pixels
    sceneWidth = sceneHeight * iconSources.length;
    aspectRatio = sceneWidth / sceneHeight;

    iconSize = window.innerWidth > 600 ? 25 : 16; // Icon size in units
    iconGap = iconSize + iconSize / 4; // Gap between icons in units
  }

  // Update scene on window resize
  function onWindowResize(): void {
    setSceneParams();

    renderer.setSize(sceneWidth, sceneHeight);

    camera.updateProjectionMatrix();
  }

  // Update icon rotation values from cursor position and scroll offset
  function iconRotationUpdate(event: any): void {
    // console.log('scroll event top:', document.scrollingElement?.scrollTop);

    if (event.clientX) {
      cursorPosition.x = event.clientX;
      cursorPosition.y = event.clientY;
    }

    if (document.scrollingElement) {
      scrollOffset = document.scrollingElement.scrollHeight
        ? document.scrollingElement.scrollTop
        : scrollOffset;

      lastScrollOffset = scrollOffset;
    }

    iconRotation.y = cursorPosition.x / window.innerWidth - 0.5;
    iconRotation.x =
      (cursorPosition.y + scrollOffset) / window.innerHeight - 0.5;
  }

  // Initialize 3D scene
  function init() {
    target = new THREE.Vector3((iconGap * (iconSources.length - 1)) / 2, 0, 0);

    cursorPosition.x = window.innerWidth / 2;
    cursorPosition.y = window.innerHeight / 2;

    // Create an event listener for the window size
    window.addEventListener('resize', onWindowResize);

    // Create an event listener for the scroll
    window.addEventListener('scroll', iconRotationUpdate);

    // Create an event listener for the mouse moves
    window.addEventListener('mousemove', iconRotationUpdate);

    // Create a scene
    scene = new THREE.Scene();
    scene.background = null;

    // Create a camera
    camera = new THREE.OrthographicCamera(
      sceneWidth / -5,
      sceneWidth / 5,
      sceneHeight / 5,
      sceneHeight / -5,
      -50,
      100
    );

    camera.position.x = target.x;

    // Create a renderer
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(aspectRatio);
    renderer.setSize(sceneWidth, sceneHeight);

    refContainer.current &&
      refContainer.current.children.length > 0 &&
      refContainer.current.removeChild(refContainer.current.children[0]);

    refContainer.current &&
      refContainer.current.appendChild(renderer.domElement);

    // 3D Objects
    iconSources.forEach((iconSource, i) => {
      // TEXTURE MAP
      const textureMap: THREE.Texture = new THREE.TextureLoader().load(
        iconSource
      );
      textureMap.wrapS = textureMap.wrapT = THREE.ClampToEdgeWrapping;
      textureMap.anisotropy = 16;
      textureMap.colorSpace = THREE.SRGBColorSpace;

      // Create rounded cube geometry
      const geometry: THREE.BoxGeometry = new RoundedBoxGeometry(
        iconSize,
        iconSize,
        iconSize / 4,
        10,
        iconSize / 8
      );

      // Create materials list for each face of the cube's texture
      const materials: THREE.MeshPhongMaterial[] = [
        new THREE.MeshPhongMaterial({ color: 0xffffff }),
        new THREE.MeshPhongMaterial({ color: 0xffffff }),
        new THREE.MeshPhongMaterial({ color: 0xffffff }),
        new THREE.MeshPhongMaterial({ color: 0xffffff }),
        new THREE.MeshPhongMaterial({
          color: 0xffffff,
          map: textureMap,
          side: THREE.DoubleSide,
        }),
        new THREE.MeshPhongMaterial({ color: 0xffffff }),
      ];

      // Create the icon 3D object
      const threeIcon: THREE.Mesh = new THREE.Mesh(geometry, materials);
      threeIcon.receiveShadow = true;
      threeIcon.position.x = i * iconGap;

      scene.add(threeIcon);
      icons.push(threeIcon);
    });

    // Lights
    const directionalLight: THREE.DirectionalLight = new THREE.DirectionalLight(
      0xffffff,
      3.5
    );
    directionalLight.position.set(0, 20, 20); // Position the light
    scene.add(directionalLight);

    const ambientLight: THREE.AmbientLight = new THREE.AmbientLight(
      0x7c7c7c,
      1.5
    );
    scene.add(ambientLight);
  }

  // Animation loop
  function animate(): void {
    requestAnimationFrame(animate);

    icons.forEach(icon => {
      icon.rotation.x =
        (iconRotation.x +
          (target.y - icon.position.y) / (window.innerHeight / 2)) *
        2;
      icon.rotation.y =
        (iconRotation.y +
          (target.x - icon.position.x) / (window.innerWidth / 2)) *
        2;
    });
    renderer.render(scene, camera);
  }

  useEffect(() => {
    setSceneParams();
    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', iconRotationUpdate);
      window.removeEventListener('scroll', iconRotationUpdate);
      window.removeEventListener('resize', onWindowResize);

      renderer.dispose();
    };
  }, []);

  return (
    <div
      style={{ backgroundColor: 'transparent', zIndex: 10 }}
      ref={refContainer}
    ></div>
  );
}
