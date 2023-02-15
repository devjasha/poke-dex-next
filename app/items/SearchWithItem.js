"use client";

import ItemSearch from "./ItemSearch";
import ItemList from "./ItemList";
import { useState } from "react";
import Fuse from "fuse.js";

const SearchWithItem = ({ apiData }) => {
  const [query, setQuery] = useState("");

  const options = {
    keys: ["item_name"],
    includeScore: true,
  };

  const fuse = new Fuse(apiData, options);
  const results = fuse.search(query);
  const itemResult = query ? results.map((result) => result.item) : apiData;

  return (
    <div className="flex flex-col">
      <ItemSearch query={query} setQuery={setQuery} />
      <ItemList itemResult={itemResult} />
    </div>
  );
};

export default SearchWithItem;
