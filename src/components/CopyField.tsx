import { HiClipboardCopy } from "react-icons/hi";
import { MdOutlineContentCopy } from "react-icons/md";
import WordChip from "./WordChip";
import { useDescriptions } from "./DescriptionContext";
import { useState } from "react";

const CopyField = () => {
  const descriptions = useDescriptions();

  const Descriptions = () =>
    descriptions?.map((value) => (
      <WordChip>
        {value} <MdOutlineContentCopy />
      </WordChip>
    ));

  return (
    <div className="flex justify-between p-8 bg-zinc-900 items-start">
      <div className="flex gap-2 flex-wrap">{Descriptions()}</div>
      <button className="flex justify-center items-center bg-neutral-700 hover:bg-neutral-600 p-2 active:bg-neutral-500 rounded-md text-white">
        Copy All To Clipboard
        <HiClipboardCopy size={70} />
      </button>
    </div>
  );
};
export default CopyField;
