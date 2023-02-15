"use client";
import { use, useState } from "react";
import axios from "axios";
import Link from "next/link";

const MoveSearch = ({ setQuery, query }) => {
  const handleOnSearch = ({ currentTarget = {} }) => {
    const { value } = currentTarget;
    setQuery(value);
  };
  return (
    <div className="mb-12 flex w-full">
      <div className=" mx-auto">
        <div className="flex items-center ">
          <input
            placeholder="Search for a pokemon ..."
            className="px-4 py-2 w-[80%] lg:max-w-7xl rounded-md  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white dark:text-black mr-3"
            id="input"
            value={query}
            onChange={handleOnSearch}
          />
          <a
            className="rounded-md px-4 py-2 bg-black text-white dark:bg-white dark:text-black"
            href="#"
          >
            Search
          </a>
        </div>
      </div>
    </div>
  );
};

export default MoveSearch;
