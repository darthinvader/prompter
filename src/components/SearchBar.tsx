import { useState } from "react";

export type SearchBarProps = {
  placeholder?: string;
};

const SearchBar = ({ placeholder }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  return (
    <input
      className="w-96 h-8 text-xl rounded-3xl shadow-md focus:outline-none active:outline-none p-5"
      value={query}
      placeholder={placeholder}
      onChange={(e) => setQuery(e.currentTarget.value)}
    />
  );
};

export default SearchBar;
