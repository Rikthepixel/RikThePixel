import React, { useEffect } from 'react';
import "./Front.scss";
import MeWithDot from "../../images/Personal/MeWithDot.webp";
import Emoji from "../../components/Emoji";
import RandomText from "../../components/RandomText";

const Snippets = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={`grid grid-cols-[1fr] grid-row-[1fr] md:grid-cols-[1fr_1fr] md:place-items-center children:h-full children:w-full ${className ?? ""}`}
    >
      {children}
    </div>
  );
};

const SnippetHeader = ({ content, className, ...props }) => {
  return (
    <header className={`text-center h-full ${className}`} {...props}>
      {content}
    </header>
  );
};

const Snippet = ({ title, content, className = "", ...props }) => {
  return (
    <article className={`text-center flex flex-col basis-full items-center justify-center p-4 ${className}`} {...props}>
      <header>
        <h2 className="text-[1.8rem]">
          {title}
        </h2>
      </header>
      <div>
        {content}
      </div>
    </article>
  );
};

const Front = () => {
  useEffect(() => {
    document.title = "Rik den Breejen";
  }, []);

  return (
    <main className="flex-1 flex flex-col gap-6 mt-4 px-4">
      <h1 className="w-full text-center text-[3rem]">About me?</h1>
      <div className="md:max-h-[60vh] flex flex-col">
        <Snippets aria-label="Who am I?" className="overflow-hidden gap-4 children:overflow-hidden decendants:rounded-lg">
          <div className="relative h-full max-h-[50vh] sm:max-h-[60vh] md:max-h-[unset] flex items-center justify-center bg-light">
            <img
              width="1544"
              height="1158"
              className="inline object-cover h-full"
              alt="A picture of me with my dog"
              src={MeWithDot}
            />
            <div className="absolute bottom-1 text-center text-xs text-white p-1 hidden md:block bg-black bg-opacity-20 ">
              <RandomText
                options={[
                  "( I'm the human, not the dog )",
                  "( I'm the dog, not the human )"
                ]}
              />
            </div>
          </div>
          <Snippet
            aria-label="Hello, I am Rik!"
            className="bg-dark text-white"
            title={<>
              Hello, I'm Rik!<Emoji>👋</Emoji>
            </>}
            content={<>
              I am a 2nd year Software Engineering student at Hogeschool Fontys in the Netherlands.
            </>}
          />
        </Snippets>
      </div>

      <section aria-label="More about me" className="mt-12">
        <header>
          <h1 className="text-center text-[2rem]">
            More about me
          </h1>
        </header>
        <Snippets className="gap-4 children:rounded-lg children:justify-start children:bg-light">
          <Snippet
            aria-label="Passions"
            title={<>Passions<Emoji>❤</Emoji></>}
            content={<>I love experimenting with different technologies!</>}
          />
          <Snippet
            aria-label="Favorite technologies"
            title={<>Favorite technologies<Emoji>👾</Emoji></>}
            content={<>
              The programming languages I enjoy writing in are <span className="text-yellow-500">Javascript</span>, <span className="text-sky-500">Typescript</span> and <span className="text-blue-900">Lua</span>.
              If I were to choose my favorite technologies I would choose <span className="text-blue-400">ReactJS</span> and <span className="text-gray-800">Prisma</span>
              {/* and <span className="text-pink-500">Love<span className="text-blue-400">2D</span></span> */}.
            </>}
          />
        </Snippets>
      </section>
    </main >
  );
};

export default Front;