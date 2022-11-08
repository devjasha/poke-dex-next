import Image from "next/image";

const Pokemon = ({ pokemonImage, pokemonName, pokemonType }) => {
  return (
    <div className="p-4 border-black border-2 mb-4">
      <Image
        src={pokemonImage}
        height="100"
        width="100"
        alt={pokemonName}
        loading="lazy"
      />
      <div>
        <h3>{pokemonName}</h3>
        <h2>{pokemonType}</h2>
      </div>
    </div>
  );
};

export default Pokemon;
