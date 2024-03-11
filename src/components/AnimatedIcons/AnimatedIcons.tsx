'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

type AnimatedIconsProps = { iconSources: string[] };

export default function AnimatedIcons(props: AnimatedIconsProps) {
  const refContainer = useRef<HTMLDivElement>(null);

  const iconSources = props.iconSources;
  const icons: THREE.Mesh[] = [];

  const sceneHeight = 80; // Component height in pixels
  const sceneWidth = sceneHeight * iconSources.length;
  const aspectRatio = sceneWidth / sceneHeight;

  const iconSize = 25; // Icon size in units
  const iconGap = iconSize + iconSize / 4; // Gap between icons in units
  const target = new THREE.Vector3(
    (iconGap * (iconSources.length - 1)) / 2,
    0,
    0
  );
  const iconRotation = new THREE.Vector2(0, 0);

  useEffect(() => {
    function iconRotationAnimation(event: MouseEvent) {
      iconRotation.y = event.clientX / window.innerWidth - 0.5;
      iconRotation.x = event.clientY / window.innerHeight - 0.5;
    }

    // Create an event listener for the mouse moves
    window.addEventListener('mousemove', iconRotationAnimation);

    // Create a scene
    const scene = new THREE.Scene();
    scene.background = null;

    // Create a camera
    const camera = new THREE.OrthographicCamera(
      sceneWidth / -5,
      sceneWidth / 5,
      sceneHeight / 5,
      sceneHeight / -5,
      -50,
      100
    );

    camera.position.x = target.x;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(aspectRatio);
    renderer.setSize(sceneWidth, sceneHeight);

    refContainer.current &&
      refContainer.current.children.length > 0 &&
      refContainer.current.removeChild(refContainer.current.children[0]);

    refContainer.current &&
      refContainer.current.appendChild(renderer.domElement);

    // 3D Objects
    for (let i = 0; i < iconSources.length; i++) {
      // Load an image resource for texture
      const texture = new THREE.TextureLoader().load(iconSources[i]);

      // Create rounded cube geometry
      const geometry = new RoundedBoxGeometry(
        iconSize,
        iconSize,
        iconSize / 4,
        iconSize / 4,
        iconSize / 8
      );

      // Create materials list for each face of the cube's texture
      const materials = [
        new THREE.MeshPhongMaterial({ color: 0xffffff }),
        new THREE.MeshPhongMaterial({ color: 0xffffff }),
        new THREE.MeshPhongMaterial({ color: 0xffffff }),
        new THREE.MeshPhongMaterial({ color: 0xffffff }),
        new THREE.MeshPhongMaterial({
          color: 0xffffff,
          map: texture,
          side: THREE.DoubleSide,
        }),
        new THREE.MeshPhongMaterial({ color: 0xffffff }),
      ];

      // Create the icon 3D object
      const threeIcon = new THREE.Mesh(geometry, materials);
      threeIcon.receiveShadow = true;
      threeIcon.position.x = i * iconGap;

      scene.add(threeIcon);
      icons.push(threeIcon);
    }

    // Lights
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3.5);
    directionalLight.position.set(0, 20, 20); // Position the light
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0x7c7c7c, 1.5);
    scene.add(ambientLight);

    // Animation loop
    const animate = () => {
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
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', iconRotationAnimation);
      renderer.dispose();
    };
  }, []);

  return (
    <div style={{ backgroundColor: 'transparent' }} ref={refContainer}></div>
  );
}
