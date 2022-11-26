import { Image } from "next/image";

const About = () => {
  return (
    <div className="w-full max-w-7xl min-h-screen flex items-center justify-between mx-auto px-9">
      <div>
        <h1 className="text-7xl">About</h1>
        <div className="mt-7">
          <p className="w-auto max-w-xl">
            Hello, my name is Jasha Chec, I am a developer trainee from Hamburg.
            At the moment I&apos;m working at JungVonMatt. I built this project
            for a variety of reasons. On the one hand, of course, for my
            personal development, on the other hand, to provide the Pokemon
            community with a clear and easy-to-use information page. The project
            will of course continue to be developed further. Have fun with the
            Pokedex!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
