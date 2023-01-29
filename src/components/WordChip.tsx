import { ReactNode } from "react";

export type WordChipProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
};

const WordChip = ({ onClick, children }: WordChipProps) => {
  return (
    <button
      className="flex justify-center	items-center	gap-x-3	bg-slate-400  hover:bg-slate-500 py-1 px-4 rounded-full border-2 shadow-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default WordChip;
