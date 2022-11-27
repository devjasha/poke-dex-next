import { AiOutlineFileText } from "react-icons/ai";
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

const PokemonMoveList = () => {
  const getMove = use(
    getData(`https://pokeapi.co/api/v2/move?limit=100000&offset=0`)
  );

  return (
    <section className="w-full max-w-7xl min-h-screen flex justify-between mx-auto px-9 py-9">
      <div className="w-full mt-24">
        <div className="flex items-center">
          <h1 className="text-2xl">Moves</h1>
          <AiOutlineFileText className="h-8 w-8 ml-3" />
        </div>
        <ul className="flex flex-wrap w-full justify-between mt-5">
          {getMove.results.map((getMoveName, index) => (
            <li
              key={index}
              className="w-32 h-32 mt-4 lg:m-4 rounded-xl p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex items-center justify-center"
            >
              <Link key={index} href={`/moves/${getMoveName.name}`}>
                {getMoveName.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PokemonMoveList;
