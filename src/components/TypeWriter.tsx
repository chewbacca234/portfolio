'use client';
import TypewriterComponent from 'typewriter-effect';

export function TypeWriter() {
  return (
    <TypewriterComponent
      onInit={typewriter => {
        typewriter
          .typeString('My skills')
          .pauseFor(300)
          .deleteChars(8)
          .typeString('Y SKILLS : team work')
          .pauseFor(400)
          .deleteChars(9)
          .typeString('debug')
          .pauseFor(400)
          .deleteChars(5)
          .typeString('learning')
          .pauseFor(400)
          .deleteChars(8)
          .typeString('teaching')
          .pauseFor(400)
          .deleteChars(8)
          .typeString('motivation')
          .deleteAll()
          .start();
      }}
      options={{
        loop: true,
      }}
    />
  );
}
