import { BsArrowsMove } from "react-icons/bs";
import { use } from "react";
import axios from "axios";
import Link from "next/link";

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

const PokemonMoveList = ({ id }) => {
  const type = use(getData(`https://pokeapi.co/api/v2/pokemon/${id}/`));
  const getMove = use(
    getData(`https://pokeapi.co/api/v2/move?limit=100000&offset=0`)
  );

  return (
    <div className="w-full mt-10 lg:mt-24">
      <div className="flex items-center">
        <h1 className="text-2xl">Moves</h1>
        <BsArrowsMove className="h-8 w-8 ml-3" />
      </div>
      <ul className="flex flex-wrap w-full justify-between">
        {type.moves.map((moveName, index) => {
          return (
            <li
              key={index}
              className="w-32 h-32 mt-4 lg:m-4 rounded-xl p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex items-center justify-center"
            >
              {getMove.results.map(
                (getMoveName, index) =>
                  getMoveName.name === moveName.move.name && (
                    <Link
                      key={index}
                      href={`/pokemon/${id}/${moveName.move.name}`}
                    >
                      {getMoveName.name}
                    </Link>
                  )
              )}
            </li>
          );
        })}
      </ul>
      <div className="hidden fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4  w-[80vw] h-[70vh] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-2xl bg-white"></div>
    </div>
  );
};

export default PokemonMoveList;
