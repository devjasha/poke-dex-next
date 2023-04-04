import Image from "next/image";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";
import { TbPokeball } from "react-icons/tb";

const Pokemon = ({
  pokemonImage,
  pokemonName,
  pokemonDetails,
  pokemonNumber,
  pokemonType,
}) => {
  const colours = {
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

  return (
    <Link href={`/pokemon/${pokemonDetails}`} className="hover:underline">
      <div className="rounded-xl backdrop-blur-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] my-4 lg:mx-4 p-6 overflow-x-hidden">
        <div className="relative ">
          <TbPokeball className="absolute top-2/4 left-6 -translate-x-2/4 -translate-y-2/4 w-80 h-80 text-slate-200 -z-10" />
          <Image
            src={pokemonImage}
            height={300}
            width={300}
            alt={pokemonName}
            loading="lazy"
          />
        </div>
        <div>
          <h1
            className="px-4 py-2 w-fit rounded-lg mb-2"
            style={{
              backgroundColor: colours[pokemonType[0]],
            }}
          >
            {pokemonType}
          </h1>
        </div>
        <div>
          <h3 className="text-2xl uppercase mb-3 relative">{pokemonName}</h3>
          More details <HiChevronRight className="inline" />
        </div>
      </div>
    </Link>
  );
};

export default Pokemon;
