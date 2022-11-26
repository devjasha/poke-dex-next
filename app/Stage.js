import Link from "next/link";
import Image from "next/image";
import PokemonSearch from "./PokemonSearch";

const Stage = () => {
  return (
    <section className="h-[80vh] w-full lg:max-w-7xl flex flex-col justify-center pl-9 pr-9">
      <h1 className="text-4xl mb-6">Welcome, to the new Pokedex</h1>
      <PokemonSearch />
    </section>
  );
};

export default Stage;
