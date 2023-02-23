"use client";
import Image from "next/image";
import { useState } from "react";
const PokemonImage = ({ image, shinyImage, name, fallback }) => {
  const [shiny, setShiny] = useState();
  const changeToShiny = () => {
    setShiny(true);

    if (shiny === true) {
      setShiny(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={image}
        height={500}
        width={500}
        alt={name}
        onError={fallback}
        style={{ width: "30rem", height: "auto" }}
        className={shiny ? "hidden" : "block"}
      />

      <Image
        src={shinyImage}
        height={500}
        width={500}
        alt={name}
        onError={fallback}
        style={{ width: "30rem", height: "auto" }}
        className={shiny ? "block" : "hidden"}
      />

      <button
        onClick={changeToShiny}
        className="px-4 py-2 bg-black text-white rounded-lg"
      >
        shiny
      </button>
    </div>
  );
};

export default PokemonImage;
