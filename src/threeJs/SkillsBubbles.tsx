'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';
import { useWindowSize } from '@/hooks';

export function SkillsBubbles({ dict }: { dict: any }) {
  const refContainer = useRef<HTMLDivElement>(null);
  const currentTheme = useTheme();
  const { windowSize, screenType } = useWindowSize();

  const smallScreens = screenType === 'S-screens';

  let skills: string[] = dict.softSkills.skills.darkMode;

  let camera: THREE.PerspectiveCamera,
    scene: THREE.Scene,
    renderer: THREE.WebGLRenderer;

  let sceneHeight: number = (windowSize.innerHeight * 70) / 100;
  let sceneWidth: number = windowSize.innerWidth;

  const bubbleContainerWidth = sceneWidth * 9;
  const bubbleContainerHeight = sceneHeight * 5;

  const spheres: THREE.Mesh[] = [];

  // Initialize 3D scene
  function init(): void {
    if (currentTheme.theme === 'light') {
      skills = dict.softSkills.skills.lightMode;
    }

    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    camera = new THREE.PerspectiveCamera(
      40,
      sceneWidth / sceneHeight,
      100,
      100000
    );
    camera.position.z = 3200;

    scene = new THREE.Scene();
    scene.background = null;

    // Lights
    const directionalLight: THREE.DirectionalLight = new THREE.DirectionalLight(
      0xffffff,
      3.5
    );
    directionalLight.position.set(0, 0, 1000); // Position the light
    scene.add(directionalLight);

    const ambientLight: THREE.AmbientLight = new THREE.AmbientLight(
      0x7c7c7c,
      1.5
    );
    scene.add(ambientLight);

    // Create sphere geometry
    const geometry = new THREE.SphereGeometry(200, 64, 32);

    skills.forEach((skill: string) => {
      // TEXTURE MAP
      const texture: THREE.Texture = new THREE.TextureLoader().load(
        skill,
        texture => {
          texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
          texture.colorSpace = THREE.SRGBColorSpace;
          texture.colorSpace = THREE.SRGBColorSpace;
          texture.offset.set(0.25, 0);
        }
      );

      // Create bubble material
      const material: THREE.MeshPhongMaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        map: texture,
      });
      material.needsUpdate = true;

      // Create the bubbles 3D objects
      const multiplyBy: number = smallScreens ? 1 : 2;
      for (let i = 0; i < multiplyBy; i++) {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.x =
          Math.random() * bubbleContainerWidth - bubbleContainerWidth / 2;
        mesh.position.y =
          Math.random() * bubbleContainerHeight - bubbleContainerWidth / 2;
        mesh.position.z = Math.random() * 10000 - 10000;
        mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 2 + 1;
        mesh.receiveShadow = true;

        scene.add(mesh);

        spheres.push(mesh);
      }
    });

    //

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(sceneWidth, sceneHeight);
    refContainer.current?.replaceChildren(renderer.domElement);

    //

    // window.addEventListener('resize', onWindowResize);
  }

  // // Update scene on window resize
  // function onWindowResize(): void {
  //   sceneHeight = (window.innerHeight * 70) / 100;
  //   sceneWidth = window.innerWidth;

  //   sceneHalfX = sceneWidth / 2;
  //   sceneHalfY = sceneHeight / 2;

  //   camera.aspect = sceneWidth / sceneHeight;
  //   renderer.setSize(sceneWidth, sceneHeight);

  //   camera.updateProjectionMatrix();
  // }

  // Animation loop
  function animate(): void {
    const timer = 0.0001 * Date.now();

    camera.lookAt(scene.position);

    for (let i = 0, il = spheres.length; i < il; i++) {
      const sphere = spheres[i];

      if (i % 2 === 0) {
        sphere.position.x = (bubbleContainerWidth / 2) * Math.cos(timer + i);
        sphere.position.y =
          (bubbleContainerHeight / 2) * Math.sin(timer + i * 1.1);
      } else {
        sphere.position.x = (bubbleContainerWidth / 2) * Math.sin(timer + i);
        sphere.position.y =
          (bubbleContainerHeight / 2) * Math.cos(timer + i * 1.1);
      }
    }

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  useEffect(() => {
    init();
    animate();

    return () => {
      // window.removeEventListener('resize', onWindowResize);

      renderer.dispose();
    };
  }, [currentTheme.theme, windowSize]);

  return (
    <div
      style={{
        backgroundColor: 'transparent',
        zIndex: -10,
        width: '100vw',
        height: '70vh',
      }}
      ref={refContainer}
    ></div>
  );
}
