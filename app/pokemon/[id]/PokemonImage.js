"use client";
import Image from "next/image";
import { HiOutlineSparkles } from "react-icons/hi";
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

      <h1 className="mb-4 text-2xl">
        {shiny ? (
          <HiOutlineSparkles
            className="h-8 w-8 ml-3"
            style={{
              color: "#FDE295",
            }}
          />
        ) : (
          "normal"
        )}
      </h1>
      <button
        onClick={changeToShiny}
        className="inline-block text-2xl w-[80px] py-4 bg-black rounded-full relative"
        style={{
          backgroundColor: shiny ? "#FDE295" : "#fff",
        }}
      >
        <div
          className="absolute top-1/2 left-[4px] px-1 translate-y-1/2 h-6 w-6 bg-white rounded-full"
          style={{
            transform: shiny
              ? "translateX(195%) translateY(-50%)"
              : "translateX(0) translateY(-50%)",
            backgroundColor: shiny ? "#fff" : "#000",
            transition: "ease-in-out .3s",
          }}
        ></div>
      </button>
    </div>
  );
};

export default PokemonImage;
