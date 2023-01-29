export type WordChipProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const WordChip = ({ onClick }: WordChipProps) => {
  return (
    <button className="" onClick={onClick}>
      Hmmm
    </button>
  );
};

export default WordChip;
