'use client';
import { CSSProperties, useState } from 'react';
import styles from './TechStack.module.css';
import techStackData from '../../../public/datas/techStack.json';
import dynamic from 'next/dynamic';
// Dynamic import of the ThreeJS component
const AnimatedIcons = dynamic(
  () => {
    return import('@/threeJs');
  },
  { ssr: false }
);

export function TechStack() {
  const [isLoading, setIsLoading] = useState(true);
  const [timeoutFinished, settimeoutFinished] = useState(false);

  function getLoadingState(isLoading: boolean) {
    setIsLoading(isLoading);
  }

  setTimeout(() => {
    settimeoutFinished(true);
  }, 200);

  const loadingStyle: () => CSSProperties = () => {
    const height: string = `${80 * Object.keys(techStackData).length}px`;
    const width: string = `${80 * techStackData.iconSourcesList1.length}`;
    if (isLoading || !timeoutFinished) {
      return { display: 'flex', height, width };
    } else {
      return { display: 'none', height, width };
    }
  };

  const iconsContainerStyle: () => CSSProperties = () => {
    const height: string = `${80 * Object.keys(techStackData).length}px`;
    const width: string = `${80 * techStackData.iconSourcesList1.length}`;
    if (isLoading || !timeoutFinished) {
      return { display: 'none', height, width };
    } else {
      return { display: 'flex', height, width, gap: 0 };
    }
  };

  return (
    <div id="stack" className={styles.stackContainer}>
      {/* <h2>MyTeckStack</h2> */}
      <div style={loadingStyle()} className={styles.container}>
        <p>MyTeckStack is comming soon...</p>
        {/* <p>Wait a little bit...</p> */}
      </div>
      <div style={iconsContainerStyle()} className={styles.container}>
        <AnimatedIcons
          iconSources={techStackData.iconSourcesList1}
        ></AnimatedIcons>
        <AnimatedIcons
          iconSources={techStackData.iconSourcesList2}
        ></AnimatedIcons>
        <AnimatedIcons
          iconSources={techStackData.iconSourcesList3}
          getAnimatedIconsLoadingState={getLoadingState}
        ></AnimatedIcons>
      </div>
    </div>
  );
}
