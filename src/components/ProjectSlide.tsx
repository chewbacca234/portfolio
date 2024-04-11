'use client';
import Image from 'next/image';
import styles from './ProjectSlide.module.css';
import Link from 'next/link';
import { FiGithub, FiGlobe, FiLink2 } from 'react-icons/fi';
import { AiOutlineApple } from 'react-icons/ai';
import { PiAndroidLogo } from 'react-icons/pi';
import { Modal } from 'antd';
import { useState } from 'react';

export function ProjectSlide({
  name,
  description,
  techStack,
  picture,
  links,
}: {
  name: string;
  description: string;
  techStack: { frontend: string[]; backend: string[] };
  picture: string;
  links: { url: string; label: string }[];
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [qrCodeSrc, setQrCodeSrc] = useState('');

  function handleOpenModal(src: string) {
    setQrCodeSrc(src);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setQrCodeSrc('');
    setIsModalOpen(false);
  }

  const stackItems = links.map(linkItem => {
    switch (linkItem.label) {
      case 'website':
        return (
          <Link
            key={linkItem.label}
            className={styles.linkItem}
            href={linkItem.url}
            target="_blank"
          >
            <FiGlobe className={styles.linkIcon} />
            {linkItem.label}
          </Link>
        );

      case 'github-front':
      case 'github-back':
      case 'github':
        return (
          <Link
            key={linkItem.label}
            className={styles.linkItem}
            href={linkItem.url}
            target="_blank"
          >
            <FiGithub className={styles.linkIcon} />
            {linkItem.label}
          </Link>
        );

      case 'android':
        return (
          <button
            key={linkItem.label}
            className={styles.linkItem}
            onClick={() => handleOpenModal(linkItem.url)}
          >
            <PiAndroidLogo className={styles.linkIcon} />
            {linkItem.label}
          </button>
        );

      case 'ios':
        return (
          <button
            key={linkItem.label}
            className={styles.linkItem}
            onClick={() => handleOpenModal(linkItem.url)}
          >
            <AiOutlineApple className={styles.linkIcon} />
            {linkItem.label}
          </button>
        );

      case 'android | ios':
        return (
          <button
            key={linkItem.label}
            className={styles.linkItem}
            onClick={() => handleOpenModal(linkItem.url)}
          >
            <PiAndroidLogo className={styles.linkIcon} />
            <AiOutlineApple className={styles.linkIcon} />
            {linkItem.label}
          </button>
        );

      default:
        return (
          <Link
            key={linkItem.label}
            className={styles.linkItem}
            href={linkItem.url}
            target="_blank"
          >
            <FiLink2 className={styles.linkIcon} />
            {linkItem.label}
          </Link>
        );
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.firstGlow}></div>
      <div className={styles.secondGlow}></div>
      <h3 className={styles.title}>{name}</h3>
      <div className={styles.content}>
        <div className={styles.imgWrapper}>
          <Image
            src={picture}
            alt={`${name} project`}
            width={1600}
            height={1280}
          />
        </div>
        <div className={styles.infos}>
          <div className={styles.itemsContainer}>
            {techStack.frontend.map(stackItemFront => {
              return (
                <p key={stackItemFront} className={styles.stackItemFront}>
                  {stackItemFront}
                </p>
              );
            })}
            {techStack.backend.map(stackItemBack => {
              return (
                <p key={stackItemBack} className={styles.stackItemBack}>
                  {stackItemBack}
                </p>
              );
            })}
          </div>
          <p className={styles.description}>{description}</p>
          <div className={styles.itemsContainer}>{stackItems}</div>
        </div>
      </div>

      <Modal
        footer={null}
        closable
        open={isModalOpen}
        onCancel={handleCloseModal}
        classNames={{
          wrapper: styles.modal,
          body: styles.modalBody,
        }}
        style={{ maxWidth: '80vw', top: '0' }}
      >
        <Image
          src={qrCodeSrc}
          alt={`${name} project qrcode`}
          width={512}
          height={512}
        />
        <p>{`Scan me on Expo Go to view ${name} on your phone.`}</p>
      </Modal>
    </div>
  );
}
