import React, { useEffect } from 'react';

const Front = () => {
  useEffect(() => {
    document.title = "Rik den Breejen";
  }, []);

  return (
    <main className="p-4 flex-1">
      <section aria-label="Who am I?" className="flex">
        <header className="text-[2rem] font-bold text-center w-fit">
          <h1>
            Who am I?
            <div className="text-[4rem]">
              🤩
            </div>
          </h1>
        </header>
        <article>
          <section>
            <header>
              <h2 className="text-[1.8rem]">
                Passions
              </h2>
            </header>
            <article>
              I love experimenting with different technologies!
            </article>
          </section>
        </article>
      </section>
      <section>
        <header>
          <h1>
            Highlighted projects ✨
          </h1>
        </header>
      </section>
    </main>
  );
};

export default Front;