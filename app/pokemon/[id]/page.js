import { use } from "react";
import axios from "axios";
import PokemonImage from "./PokemonImage";
import {
  AiOutlineArrowDown,
  AiFillEye,
  AiFillExperiment,
  AiOutlineNumber,
  AiOutlineFileText,
  AiOutlineAudio,
  AiOutlineClose,
} from "react-icons/ai";
import { IoStatsChart, IoLocationSharp } from "react-icons/io5";
import { HiOutlineSparkles } from "react-icons/hi";
import Link from "next/link";
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

const Detail = ({ params: { id } }, PageProps) => {
  const details = use(
    getData(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
  );
  const type = use(getData(`https://pokeapi.co/api/v2/pokemon/${id}/`));
  const locations = use(
    getData(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`)
  );

  const text = details.flavor_text_entries[0]?.flavor_text;
  const pokemonName = details.name;
  const firstLetter = pokemonName.charAt(0).toUpperCase();
  const pokemonFullName = firstLetter + pokemonName.substring(1);

  const colours = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };

  return (
    <div className="flex relative flex-col lg:flex-row min-h-screen overflow-hidden pt-28 pl-9 pr-9 pb-9 lg:pt-0">
      <div className=" flex items-center justify-center lg:h-screen lg:w-2/4 lg:fixed lg:right-0">
        <div
          className="lg:absolute lg:top-0 lg:right-0 lg:h-[120vh] lg:w-full lg:-mr-6 lg:block lg:rotate-2 hidden"
          style={{ backgroundColor: colours[type.types[0].type.name] }}
        ></div>
        <div className="relative ">
          <div className="block">
            <PokemonImage
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              name={pokemonName}
            />
          </div>
        </div>
      </div>
      <section className="flex flex-col items-center justify-center mt-8 lg:w-2/4 lg:px-[5%] lg:mt-0">
        <div className="w-full lg:h-screen lg:flex lg:flex-col lg:justify-center lg:relative">
          <div className="hidden lg:h-full lg:w-full lg:block lg:absolute lg:top-0 lg:left-0">
            <AiOutlineArrowDown className="h-10 w-auto absolute bottom-1/4 left-4 -translate-x-2/4 -translate-y-0" />
          </div>
          <div className="flex items-center">
            <h1 className="font-medium text-3xl">{pokemonFullName}</h1>
            <AiOutlineNumber className="font-medium text-3xl ml-3" />
            <h1 className="font-medium text-3xl">{id}</h1>
          </div>
          <div className="flex items-center my-2">
            {type.types.map((type, index) => (
              <p
                key={index}
                className="py-2 px-3 text-xs mr-2 rounded-2xl text-white"
                style={{
                  backgroundColor: colours[type.type.name],
                }}
              >
                {type.type.name}
              </p>
            ))}
          </div>
          <p className="mt-3 lg:max-w-[65%]">{text}</p>
          <div className=" w-full flex justify-end mt-2">
            <AiOutlineArrowDown className="h-6 w-auto lg:hidden " />
          </div>
        </div>
        <div className="w-full mt-10">
          <div className="flex items-center">
            <h1 className="text-2xl">Stats</h1>
            <IoStatsChart
              className="h-8 w-8 ml-3"
              style={{
                color: colours[type.types[0].type.name],
              }}
            />
          </div>
          {type.stats.map((stat, index) => (
            <div key={index} className="mt-5">
              <div className="flex items-center mb-2">
                <h5 className="mr-2 uppercase">{stat.stat.name}</h5>
                <h5>{stat.base_stat}</h5>
              </div>
              <div className="w-full h-4 rounded-xl bg-stone-100 dark:bg-neutral-900">
                <div
                  className="bg-black dark:bg-white text-white h-full rounded-xl"
                  style={{
                    width:
                      stat.base_stat > 100
                        ? (stat.base_stat = 100) + "%"
                        : stat.base_stat + "%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full mt-10 lg:mt-24">
          <div className="flex items-center">
            <h1 className="text-2xl">Abilities</h1>
            <AiFillExperiment
              className="h-8 w-8 ml-3"
              style={{
                color: colours[type.types[0].type.name],
              }}
            />
          </div>
          {type.abilities.map((ability, index) => (
            <p key={index} className="mt-5 uppercase">
              {ability.ability.name}
            </p>
          ))}
        </div>
        <div className="w-full mt-10 lg:mt-24">
          <div className="flex items-center">
            <h1 className="text-2xl">Shiny</h1>
            <HiOutlineSparkles
              className="h-8 w-8 ml-3"
              style={{
                color: colours[type.types[0].type.name],
              }}
            />
          </div>
          <div className="mt-5 flex items-center">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`}
              width="100"
              height="100"
              alt={pokemonName}
            />
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${id}.png`}
              width="100"
              height="100"
              alt={pokemonName}
            />
          </div>
        </div>
        {locations.length > 0 && (
          <div className="w-full mt-10 lg:mt-24">
            <div className="flex items-center">
              <h1 className="text-2xl">Locations</h1>
              <IoLocationSharp
                className="h-8 w-8 ml-3"
                style={{
                  color: colours[type.types[0].type.name],
                }}
              />
            </div>

            {locations.map((location, index) => (
              <p key={index} className="mt-5 uppercase">
                {location.location_area.name}
              </p>
            ))}
          </div>
        )}
        <div className="w-full mt-10 lg:mt-24">
          <div className="flex items-center">
            <h1 className="text-2xl">Pokedex Nr.</h1>
            <AiOutlineNumber
              className="h-8 w-8 ml-3"
              style={{
                color: colours[type.types[0].type.name],
              }}
            />
          </div>
          {details.pokedex_numbers.map((game, index) => (
            <div key={index} className="flex justify-between mt-5">
              <p className="uppercase">{game.pokedex.name}</p>
              <p>Nr. {game.entry_number}</p>
            </div>
          ))}
        </div>
        <div className="w-full mt-10 lg:mt-24">
          <div className="flex items-center">
            <h1 className="text-2xl">Names</h1>
            <AiOutlineAudio
              className="h-8 w-8 ml-3"
              style={{
                color: colours[type.types[0].type.name],
              }}
            />
          </div>
          {details.names.map((name, index) => (
            <div key={index} className="flex justify-between mt-5">
              <p className="uppercase">{name.language.name}</p>
              <p>{name.name}</p>
            </div>
          ))}
        </div>
        <div className="w-full mt-10 lg:mt-24">
          <div className="flex items-center">
            <h1 className="text-2xl">Moves</h1>
            <AiOutlineFileText
              className="h-8 w-8 ml-3"
              style={{
                color: colours[type.types[0].type.name],
              }}
            />
          </div>
          <ul>
            {type.moves.map((name, index) => (
              <li key={index} className="mt-2">
                {name.move.name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Detail;
