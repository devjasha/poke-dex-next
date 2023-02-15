import { use, useState } from "react";
import Link from "next/link";

const MoveList = ({ moveResult }) => {
  const [count, setCount] = useState(21);

  const handleClick = () => {
    setCount(count + 21);
  };
  return (
    <section className="min-h-screen flex flex-col">
      <ul className="flex flex-wrap w-full justify-between mt-5">
        {moveResult.slice(0, count).map((move, index) => (
          <li
            key={index}
            className="w-32 h-32 mt-4 lg:m-4 rounded-xl p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex items-center justify-center"
          >
            <Link key={index} href={`/moves/${move.move_name}`}>
              {move.move_name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="w-full flex items-center justify-center">
        <button
          onClick={handleClick}
          className="py-3 px-6 w-auto my-10 rounded-md text-white dark:text-black bg-black dark:bg-white"
        >
          Load More
        </button>
      </div>
    </section>
  );
};

export default MoveList;
