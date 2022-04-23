import React, { useEffect } from 'react';
import "./Front.scss";
import Emoji from "../../components/Emoji";
import RandomText from "../../components/RandomText";

const Front = () => {
  useEffect(() => {
    document.title = "Rik den Breejen";
  }, []);

  return (
    <main className="flex-1 flex flex-col mt-4 px-4">
      WIP
    </main>
  );
};

export default Front;