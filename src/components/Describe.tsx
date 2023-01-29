import SearchBar from "./SearchBar";
import WordChip from "./WordChip";
import { useDescriptions } from "./DescriptionContext";

const Describe = () => {
  const descriptions = useDescriptions();
  const Chips = () =>
    descriptions?.map((value) => <WordChip label={value}></WordChip>);
  return (
    <div className="flex flex-col bg-zinc-800	p-8">
      <SearchBar />
      <div>{Chips()}</div>
    </div>
  );
};

export default Describe;
