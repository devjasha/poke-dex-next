"use client";
import { use, useRef, useState } from "react";
import axios from "axios";
import Link from "next/link";

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

const PokemonSearch = () => {
  const [newLink, setLink] = useState("");
  const inputRef = useRef(null);
  const pokemon = use(data);
  pokemon?.results.map((pokemon, index) => {
    const id = pokemon.url.split(/pokemon\/(\d+)/gi)[1];
  });

  const newArray = pokemon?.results.map((item, index) => ({
    index,
    ...item,
  }));

  const handleClick = () => {
    let value = inputRef.current.value.toLowerCase();
    let pokemonName = value;
    let link;
    newArray.map((name) =>
      pokemonName === name.name ? (link = `/pokemon/${name.index + 1}`) : ""
    );
    setLink(link);
  };

  return (
    <div className="mt-3">
      <div className="flex flex-wrap items-center justify-between">
        <input
          ref={inputRef}
          placeholder="Search for a pokemon ..."
          className="px-4 py-2 w-[80%] rounded-md  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white dark:text-black mr-3"
          id="input"
        />
        <a
          href={newLink}
          onClick={handleClick}
          className="rounded-md px-3 py-2 bg-black text-white dark:bg-white dark:text-black"
        >
          Search
        </a>
      </div>
    </div>
  );
};

export default PokemonSearch;
