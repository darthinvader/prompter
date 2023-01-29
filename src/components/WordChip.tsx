export type WordChipProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  label?: string;
};

const WordChip = ({ onClick, label }: WordChipProps) => {
  return (
    <button
      className="bg-slate-400  hover:bg-slate-500 py-1 px-4 rounded-full border-2"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default WordChip;
