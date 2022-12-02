"use client";

import PokemonSearch from "./PokemonSearch";
import PokemonList from "./PokemonList";
import { useState } from "react";
import Fuse from "Fuse.js";

const SearchWithPokemon = ({ apiData }) => {
  const [query, setQuery] = useState("");

  const options = {
    keys: ["pokemon_name"],
    includeScore: true,
  };

  const fuse = new Fuse(apiData, options);
  const results = fuse.search(query);
  const pokemonResult = query ? results.map((result) => result.item) : apiData;

  return (
    <div className="pl-9 pr-9 flex flex-col">
      <PokemonSearch query={query} setQuery={setQuery} />
      <PokemonList pokemonResult={pokemonResult} />
    </div>
  );
};

export default SearchWithPokemon;
