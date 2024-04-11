'use client';
import TypewriterComponent from 'typewriter-effect';

export function TypeWriter() {
  return (
    <TypewriterComponent
      onInit={typewriter => {
        typewriter
          .typeString('If you have a question')
          .pauseFor(300)
          .deleteChars(8)
          .typeString('project')
          .pauseFor(400)
          .deleteChars(14)
          .typeString('need to contact me...')
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
