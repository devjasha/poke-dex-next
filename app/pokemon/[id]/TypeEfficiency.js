import axios from "axios";
import { use } from "react";

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

const TypeEfficiency = ({ type }) => {
  const typeStats = use(getData(`https://pokeapi.co/api/v2/type/${type}`));

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
    <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-auto h-auto p-4 rounded-xl mt-5">
      <h1
        className="py-2 w-[100px] px-3 text-xs mt-2 rounded-2xl text-white text-center"
        style={{
          backgroundColor: colours[type],
        }}
      >
        {type}
      </h1>
      <div className="flex flex-wrap items-start justify-around">
        <div className="mt-5 flex-col justify-center items-center">
          <h3>2x damage from</h3>
          {typeStats.damage_relations.double_damage_from.map((type, index) => (
            <p
              key={index}
              className="py-2 w-[100px] px-3 text-xs mt-2 rounded-2xl text-white text-center"
              style={{
                backgroundColor: colours[type.name],
              }}
            >
              {type.name}
            </p>
          ))}
        </div>
        <div className="mt-5">
          <h3>2x damage to</h3>
          {typeStats.damage_relations.double_damage_to.map((type, index) => (
            <p
              key={index}
              className="py-2 w-[100px] px-3 text-xs mt-2 rounded-2xl text-white text-center"
              style={{
                backgroundColor: colours[type.name],
              }}
            >
              {type.name}
            </p>
          ))}
        </div>
        <div className="mt-5">
          <h3>0.5x damage from</h3>
          {typeStats.damage_relations.half_damage_from.map((type, index) => (
            <p
              key={index}
              className="py-2 px-3 w-[100px] text-xs mt-2 rounded-2xl text-white text-center"
              style={{
                backgroundColor: colours[type.name],
              }}
            >
              {type.name}
            </p>
          ))}
        </div>
        <div className="mt-5">
          <h3>0.5x damage to</h3>
          {typeStats.damage_relations.half_damage_to.map((type, index) => (
            <p
              key={index}
              className="py-2 px-3 w-[100px] text-xs mt-2 rounded-2xl text-white text-center"
              style={{
                backgroundColor: colours[type.name],
              }}
            >
              {type.name}
            </p>
          ))}
        </div>
        <div className="mt-5">
          <h3>No damage from</h3>
          {typeStats.damage_relations.no_damage_from.map((type, index) => (
            <p
              key={index}
              className="py-2 px-3 text-xs w-[100px] mt-2 rounded-2xl text-white text-center"
              style={{
                backgroundColor: colours[type.name],
              }}
            >
              {type.name}
            </p>
          ))}
        </div>
        <div className="mt-5">
          <h3>No damage to</h3>
          {typeStats.damage_relations.no_damage_to.map((type, index) => (
            <p
              key={index}
              className="py-2 px-3 text-xs mt-2 w-[100px] rounded-2xl text-white text-center"
              style={{
                backgroundColor: colours[type.name],
              }}
            >
              {type.name !== null ? type.name : "no type"}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TypeEfficiency;
