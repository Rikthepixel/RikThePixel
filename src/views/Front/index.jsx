import React, { useEffect } from 'react';

const Front = () => {
  useEffect(() => {
    document.title = "Rik den Breejen";
  }, []);

  return (
    <main className="flex-1 flex flex-col overflow-y-auto">
      <div className="h-screen flex items-center justify-center relative">
        <span className="text-[20vmin] z-10">W.I.P.</span>
      </div>
    </main>
  );
};

export default Front;