import React, { useEffect } from 'react';
import "./Front.scss";
import MeWithDot from "../../images/Personal/MeWithDot.jpg";
import Emoji from "../../components/Emoji";

const Front = () => {
  useEffect(() => {
    document.title = "Rik den Breejen";
  }, []);

  return (
    <main className="main-front-container">
      <section aria-label="Who am I?" className="flex flex-col gap-4 md:flex-row md:justify-center">
        <header className="rounded-lg text-[2rem] font-bold text-center flex flex-col-reverse items-center justify-center md:flex-col md:w-2/4 lg:w-fit">
          <span>
            <img
              className="mx-4 rounded-md inline w-5/6 max-w-sm md:max-w-lg md:border-none"
              loading="lazy"
              alt="A picture of me with dogs 😜"
              src={MeWithDot}
            />
            <div className="text-xs text-zinc-600 hidden md:block">
              ( I am the human, not the dog )
            </div>
          </span>
          <h1>
            Who am I? <Emoji>🤩</Emoji>
          </h1>
        </header>
        <article className="bg-light rounded-lg p-4 flex flex-col justify-center gap-6 w-fit md:w-full 2xl:max-w-[100rem]">
          <section aria-label="Introduction" className="text-center md:text-left md:pr-14">
            <header>
              <h2 className="text-[1.8rem]">
                Hello, I am Rik! <Emoji>👋</Emoji>
              </h2>
            </header>
            <article>
              I am a 2nd year Software Engineering student at Hogeschool Fontys in the Netherlands.
            </article>
          </section>
          <section aria-label="Passions" className="text-center md:px-8">
            <header>
              <h2 className="text-[1.8rem]">
                Passions <Emoji>❤</Emoji>
              </h2>
            </header>
            <article>
              I love experimenting with different technologies!
            </article>
          </section>
          <section aria-label="Passions" className="text-center md:text-right md:pl-14">
            <header>
              <h2 className="text-[1.8rem]">
                Favorite technologies <Emoji>👾</Emoji>
              </h2>
            </header>
            <article>
              The programming languages I enjoy writing in are <span className="text-yellow-500">Javascript</span>, <span className="text-sky-500">Typescript</span> and <span className="text-blue-900">Lua</span>.
              If I were to choose my favorite technologies I would choose <span className="text-blue-400">ReactJS</span> and <span className="text-gray-800">Prisma</span>
              {/* and <span className="text-pink-500">Love<span className="text-blue-400">2D</span></span> */}.
            </article>
          </section>
        </article>
      </section>
      <section aria-label="Highlighted projects">
        <header className="text-[1.75rem] text-center">
          <h1>
            Highlighted projects <Emoji>✨</Emoji>
          </h1>
        </header>
        <article className="bg-light rounded-lg h-64">

        </article>
      </section>
    </main>
  );
};

export default Front;