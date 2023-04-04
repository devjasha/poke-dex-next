import Stage from "./Stage";
import SearchWithPokemon from "./SearchWithPokemon";
import axios from "axios";
import { use } from "react";

const getData = async () => {
  const data = await axios
    .get("https://pokedex.world/api/pokemonList")
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
      pokemon_name: entry[1].name.english,
      pokemon_id: entry[1].id,
      pokemon_type: entry[1].type,
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
