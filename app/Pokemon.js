import Image from "next/image";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";
import { TbPokeball } from "react-icons/tb";

const Pokemon = ({
  pokemonImage,
  pokemonName,
  pokemonDetails,
  pokemonNumber,
}) => {
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
          <h3 className="text-2xl uppercase mb-3 relative">{pokemonName}</h3>
          More details <HiChevronRight className="inline" />
        </div>
      </div>
    </Link>
  );
};

export default Pokemon;
