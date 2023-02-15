import { AiOutlineFileText } from "react-icons/ai";
import { use } from "react";
import axios from "axios";
import Link from "next/link";
import SearchWithItem from "./SearchWithItem";

const getData = async (url) => {
  const data = await axios
    .get(`https://pokeapi.co/api/v2/item?limit=100000&offset=0`)
    .then(async (response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return data;
};

const data = getData();

const Home = () => {
  const itemData = use(data);

  const formattedItemData = Object.entries(itemData.results).map((entry) => ({
    item_name: entry[1].name,
    item_url: entry[1].url,
  }));

  return (
    <section className="w-full max-w-7xl min-h-screen flex justify-between mx-auto px-9 py-9">
      <div className="w-full mt-24">
        <div className="flex items-center mb-7">
          <h1 className="text-2xl">Item</h1>
          <AiOutlineFileText className="h-8 w-8 ml-3" />
        </div>
        <SearchWithItem apiData={formattedItemData} />
      </div>
    </section>
  );
};

export default Home;
