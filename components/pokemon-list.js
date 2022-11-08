import { use } from "react";
import axios from "axios";
import Pokemon from "./pokemon";

const getData = async (url) => {
  const data = await axios
    .get(url)
    .then(async (response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });

  return data;
};

const PokemonList = ({ image, name, description }) => {
  const pokemon = use(
    //getData("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    getData("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
  );

  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <div>
        {pokemon.results.map((pokemon, index) => {
          const id = pokemon.url.split(/pokemon\/(\d+)/gi)[1];
          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
          return (
            <Pokemon
              key={index}
              pokemonName={pokemon.name}
              pokemonImage={image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PokemonList;
