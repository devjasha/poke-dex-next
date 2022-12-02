"use client";

import { use, useState } from "react";
import Pokemon from "./Pokemon";

const PokemonList = ({ pokemonResult }) => {
  const [count, setCount] = useState(21);

  const handleClick = () => {
    setCount(count + 21);
  };

  return (
    <section className="min-h-screen flex flex-col">
      <div className="flex flex-wrap justify-center">
        {pokemonResult.slice(0, count).map((pokemon, index) => {
          const id = pokemon.pokemon_url.split(/pokemon\/(\d+)/gi)[1];
          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
          return (
            <Pokemon
              key={index}
              pokemonNumber={index}
              pokemonName={pokemon.pokemon_name}
              pokemonImage={image}
              pokemonDetails={id}
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
