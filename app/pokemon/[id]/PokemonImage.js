import Image from "next/image";
const PokemonImage = ({ image, name }) => {
  return (
    <div>
      <Image src={image} height={500} width={500} alt={name} />
    </div>
  );
};

export default PokemonImage;
