"use client";

import { use } from "react";
import axios from "axios";
import Image from "next/image";

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

const Item = ({ params: { item } }, PageProps) => {
  const itemDetails = use(getData(`https://pokeapi.co/api/v2/item/${item}/`));

  return (
    <section className="w-full max-w-7xl min-h-screen flex justify-between mx-auto px-9 py-9">
      <div className="w-full mt-24">
        <div className="flex items-center justify-between w-full">
          <Image
            src={itemDetails.sprites.default}
            height={100}
            width={100}
            alt={itemDetails.name}
          />
          <div>
            <h1 className="uppercase text-3xl mb-2">{itemDetails.name}</h1>
            <div className="flex items-center mb-2">
              <h2 className="text-2xl">Costs:</h2>
              <div className="ml-2 flex items-center">
                <h2 className="text-2xl">{itemDetails.cost} </h2>
                <Image
                  src="/images/PokeCoin.png"
                  height={30}
                  width={30}
                  alt="pokedollar"
                />
              </div>
            </div>
            <h2 className=" text-sm bg-black text-white px-2 py-1 rounded-full text-center">
              {itemDetails.category.name}
            </h2>
          </div>
        </div>
        <div className="mt-5 mb-4">
          <h2 className="text-2xl">Effect</h2>
          {itemDetails.effect_entries.map((entry, index) => (
            <p key={index} className="mt-2">
              {entry.effect}
            </p>
          ))}
        </div>
        {itemDetails.held_by_pokemon > 0 && (
          <>
            <div className="mb-4">
              <h2 className="text-2xl">Held by pokemon</h2>
              {itemDetails.held_by_pokemon.map((pokemon, index) => (
                <div
                  className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-32 h-32 p-4 rounded-xl flex flex-col items-center justify-center mt-5 md:mt-0"
                  key={index}
                >
                  <Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokemon.name}.png`}
                    height={200}
                    width={200}
                    alt={pokemon.pokemon.name}
                  />
                  <h1>{pokemon.pokemon.name}</h1>
                </div>
              ))}
            </div>
          </>
        )}
        <div className="mb-4">
          <h2 className="text-2xl">Attributes</h2>
          <ul>
            {itemDetails.attributes.map((attribute, index) => (
              <li key={index}>{attribute.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Item;
