import { BsSearch } from "react-icons/bs";
import { describeWord } from "../utils/scrape";
import { useState } from "react";

export type SearchBarProps = {
  placeholder?: string;
  setDescriptions?: (descriptions: string[]) => void;
};

const SearchBar = ({ placeholder, setDescriptions }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const onClick = async () => {
    const words = await describeWord(query);
    const wordArray = words.map((word) => word.word);
    setDescriptions?.(wordArray);
  };

  return (
    <div className="flex gap-2 justify-end items-center ">
      <input
        className="w-96 h-8 text-xl rounded-3xl shadow-md focus:outline-none active:outline-none p-5"
        value={query}
        placeholder={placeholder}
        onChange={(e) => setQuery(e.currentTarget.value)}
      />
      <button
        className="bg-neutral-700 hover:bg-neutral-600 active:bg-neutral-500 p-2 rounded-xl"
        onClick={onClick}
      >
        <BsSearch size={25} />
      </button>
    </div>
  );
};

export default SearchBar;
