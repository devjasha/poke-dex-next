"use client";

import { use, useState } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";

const getData = async () => {
  const data = await axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
    .then(async (response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });

  return data;
};

const data = getData();

const PokemonList = () => {
  const [count, setCount] = useState(21);
  const pokemon = use(data);

  const handleClick = () => {
    setCount(count + 21);
  };

  return (
    <section className="min-h-screen flex items-center justify-center flex-col">
      <div className="flex flex-wrap justify-center">
        {pokemon?.results?.slice(0, count).map((pokemon, index) => {
          const id = pokemon.url.split(/pokemon\/(\d+)/gi)[1];
          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
          return (
            <Pokemon
              key={index}
              pokemonNumber={index}
              pokemonName={pokemon.name}
              pokemonImage={image}
              pokemonDetails={id}
            />
          );
        })}
      </div>
      <button
        onClick={handleClick}
        className="py-3 px-6 my-10 rounded-md text-white dark:text-black bg-black dark:bg-white"
      >
        Load More
      </button>
    </section>
  );
};

export default PokemonList;
