import { ReactNode } from "react";

export type WordChipProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
};

const WordChip = ({ onClick, children }: WordChipProps) => {
  return (
    <button
      className="flex justify-center items-center gap-x-2	bg-slate-700  hover:bg-slate-600 active:bg-slate-500 py-1 px-4 rounded-full border-2 shadow-md text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default WordChip;
