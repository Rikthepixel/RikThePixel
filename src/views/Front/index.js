import React, { useEffect } from 'react';
import "./Front.scss";
import MeWithDot from "../../images/Personal/MeWithDotCompressed.jpg";
import Emoji from "../../components/Emoji";

const Snippets = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={`flex flex-col md:flex-row md:justify-center ${className ?? ""}`}
    >
      {children}
    </div>
  );
};

const SnippetHeader = ({ content, className, ...props }) => {
  return (
    <header className={`text-center basis-full ${className}`} {...props}>
      {content}
    </header>
  );
};

const Snippet = ({ title, content, className, ...props }) => {
  return (
    <article className="bg-light text-center flex flex-col basis-full items-center justify-center p-4" {...props}>
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
    <main className="flex-1">
      <div className="max-h-[90vh] p-4 pb-0 flex flex-col flex-1">
        <Snippets aria-label="Who am I?" className="gap-0 rounded-lg overflow-hidden">
          <SnippetHeader
            className="flex flex-col basis-full"
            content={<div className="relative h-full flex items-center justify-center">
              <img
                className="inline object-contain h-full"
                loading="lazy"
                alt="A picture of me with dogs 😜"
                src={MeWithDot}
              />
              <div className="absolute bottom-0 w-full text-center text-xs text-white py-2 hidden md:block">
                ( I'm the human, not the dog )
              </div>
            </div>}
          />
          <Snippet
            aria-label="Hello, I am Rik!"
            className=""
            title={<>
              Who am I?
            </>}
            content={<>
              <h2>Hello, I am Rik!<Emoji>👋</Emoji></h2>
              I am a 2nd year Software Engineering student at Hogeschool Fontys in the Netherlands.
            </>}
          />
        </Snippets>
      </div>

      {/* <section aria-label="Highlighted projects" className="p-4">
        <header className="text-[1.75rem] text-center">
          <h1>
            Highlighted projects <Emoji>✨</Emoji>
          </h1>
        </header>
        <article className="bg-light rounded-lg h-64">

        </article>
      </section> */}


      <section aria-label="More about me">
        {/* <header>
          <h1>
              More about me
          </h1>
        </header> */}
        <Snippets className="gap-4 p-4 children:rounded-lg children:justify-start">
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