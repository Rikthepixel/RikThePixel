import React, { useEffect } from 'react';

const Front = () => {
  useEffect(() => {
    document.title = "Rik den Breejen";
  }, []);

  return (
    <main className="p-4 flex-1">
      Front
    </main>
  );
};

export default Front;