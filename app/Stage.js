import Link from "next/link";
import Image from "next/image";
import PokemonSearch from "./PokemonSearch";

const Stage = () => {
  return (
    <section className="h-[80vh] w-full flex items-center pl-9 pr-9">
      <div className="lg:max-w-7xl mx-auto">
        <h1 className="text-4xl lg:text-7xl mb-6">
          Welcome,
          <br /> to the new Pokedex
        </h1>
        <PokemonSearch />
      </div>
    </section>
  );
};

export default Stage;
