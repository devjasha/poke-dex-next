"use client";

import MoveSearch from "./MoveSearch";
import MoveList from "./MoveList";
import { useState } from "react";
import Fuse from "fuse.js";

const SearchWithMove = ({ apiData }) => {
  const [query, setQuery] = useState("");

  const options = {
    keys: ["move_name"],
    includeScore: true,
  };

  const fuse = new Fuse(apiData, options);
  const results = fuse.search(query);
  const moveResult = query ? results.map((result) => result.item) : apiData;

  return (
    <div className="pl-9 pr-9 flex flex-col">
      <MoveSearch query={query} setQuery={setQuery} />
      <MoveList moveResult={moveResult} />
    </div>
  );
};

export default SearchWithMove;
