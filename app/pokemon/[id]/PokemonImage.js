import Image from "next/image";
const PokemonImage = ({ image, name, fallback }) => {
  return (
    <div>
      <Image
        src={image}
        height={500}
        width={500}
        alt={name}
        onError={fallback}
      />
    </div>
  );
};

export default PokemonImage;
