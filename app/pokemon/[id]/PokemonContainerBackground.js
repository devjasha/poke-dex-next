"use client";
import { use, useState } from "react";
import axios from "axios";

const getData = async (url) => {
  const data = await axios
    .get(url)
    .then(async (response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return data;
};

const PokemonContainer = ({ id }) => {
  const [type, setType] = useState();
  const getType = use(getData(`https://pokeapi.co/api/v2/pokemon/${id}/`));
  const firstType = getType.types[0].type.name;

  const types = {
    normal: "#A8A77A",
    fighting: "#C21E28",
    flying: "#A98FF3",
    poison: "#A33EA1",
    ground: "#E2BF65",
    rock: "#B6A136",
    bug: "#A6B91A",
    ghost: "#735797",
    steel: "#B7B7CE",
    fire: "#EE8130",
    water: "#6390F0",
    grass: "#7AC74C",
    electric: "#F7D02C",
    psychic: "#F95587",
    ice: "#96D9D6",
    dragon: "#6F35FC",
    dark: "#705746",
    fairy: "#D685AD",
    unknown: "#000000",
    shadow: "#BFAFB2",
  };

  for (const [key, value] of Object.entries(types)) {
    let typeColorValue;

    console.log(`${key}: ${value}`);

    typeColorValue = key === firstType ? console.log({ value }) : false;

    setType(typeColorValue);
  }
  return (
    <div
      className={`h-[120%] absolute -z-10 w-[110%] origin-center rotate-3 ${type}`}
    ></div>
  );
};

export default PokemonContainer;
