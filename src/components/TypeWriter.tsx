'use client';
import TypewriterComponent from 'typewriter-effect';

export function TypeWriter({ dict }: { dict: any }) {
  return (
    <TypewriterComponent
      onInit={typewriter => {
        typewriter
          .typeString(dict.contact.typeWritter1)
          .pauseFor(300)
          .deleteChars(dict.contact.typeWritterDelete1)
          .typeString(dict.contact.typeWritter2)
          .pauseFor(400)
          .deleteChars(dict.contact.typeWritterDelete2)
          .typeString(dict.contact.typeWritter3)
          .pauseFor(400)
          .deleteChars(dict.contact.typeWritterDelete3)
          .typeString(dict.contact.typeWritter4)
          .pauseFor(400)
          .deleteAll()
          .start();
      }}
      options={{
        loop: true,
      }}
    />
  );
}
