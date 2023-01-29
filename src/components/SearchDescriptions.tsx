import Descriptions from "./Descriptions";
import SearchBar from "./SearchBar";
import { useState } from "react";

const SearchDescriptions = () => {
  const [descriptions, setDescriptions] = useState<string[]>();

  return (
    <div className="flex flex-col items-center gap-5 bg-zinc-800	p-8 ">
      <SearchBar setDescriptions={setDescriptions} />
      <Descriptions descriptions={descriptions} />
    </div>
  );
};

export default SearchDescriptions;
