import Typewriter from 'typewriter-effect';

export default function TypewriterText() {
  return (
    <div className="text-xl md:text-2xl text-red-600 font-light">
      <Typewriter
        options={{
          strings: [
            'Full Stack Developer',
            'MERN Stack Expert',
            'Problem Solver',
            'Tech Enthusiast',
            'WEB Developer',
            'An Curious Engineer',
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 100,
        }}
      />
    </div>
  );
}