import Stage from "./Stage";
import SearchWithPokemon from "./SearchWithPokemon";
import axios from "axios";
import { use } from "react";

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

const Home = () => {
  const pokemonData = use(data);

  const formattedPokemonData = Object.entries(pokemonData.results).map(
    (entry) => ({
      pokemon_name: entry[1].name,
      pokemon_url: entry[1].url,
    })
  );
  return (
    <div>
      <Stage />
      <SearchWithPokemon apiData={formattedPokemonData} />
    </div>
  );
};

export default Home;
