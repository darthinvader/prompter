import { MdOutlineContentCopy } from "react-icons/md";
import WordChip from "./WordChip";
import { useState } from "react";

const CopyField = () => {
  const [descriptions, setDescriptions] = useState<string[]>([
    "hello",
    "There",
  ]);
  const Descriptions = () =>
    descriptions.map((value) => (
      <WordChip>
        {value} <MdOutlineContentCopy />
      </WordChip>
    ));

  return (
    <div>
      <div className="flex">{Descriptions()}</div>
    </div>
  );
};
export default CopyField;
