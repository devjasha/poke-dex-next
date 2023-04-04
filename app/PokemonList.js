"use client";

import { use, useState } from "react";
import Pokemon from "./Pokemon";

const PokemonList = ({ pokemonResult }) => {
  const [count, setCount] = useState(21);
  const [filterType, setFilterType] = useState();
  const [type, setType] = useState();

  const handleClick = () => {
    setCount(count + 21);
  };

  const filterFunction = () => {
    setFilterType("grass");
  };

  const colours = {
    all: "",
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
  const types = pokemonResult.map((pokemon, index) => {
    pokemon.pokemon_type.map((type, index) => {
      if (index === 0) {
        return type.toLowerCase();
      }
    });
  });

  return (
    <section className="min-h-screen flex flex-col">
      <div className="flex flex-wrap justify-center">
        {pokemonResult
          .slice(0, count)
          .map((pokemon, index) => {
            const id = pokemon.pokemon_id;
            const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
            const type = pokemon.pokemon_type.map((type, index) => {
              if (index === 0) {
                return type.toLowerCase();
              }
            });
            return (
              <Pokemon
                key={index}
                pokemonNumber={index}
                pokemonName={pokemon.pokemon_name}
                pokemonImage={image}
                pokemonDetails={id}
                pokemonType={type}
              />
            );
          })}
      </div>
      <div className="w-full flex items-center justify-center">
        <button
          onClick={handleClick}
          className="py-3 px-6 w-auto my-10 rounded-md text-white dark:text-black bg-black dark:bg-white"
        >
          Load More
        </button>
      </div>
    </section>
  );
};

export default PokemonList;
