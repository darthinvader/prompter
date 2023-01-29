import { useDescriptions, useDescriptionsUpdate } from "./DescriptionContext";

import { IoMdAddCircleOutline } from "react-icons/io";
import WordChip from "./WordChip";
import { useState } from "react";

export type DescriptionsProps = {
  descriptions?: string[];
};

const Descriptions = ({ descriptions }: DescriptionsProps) => {
  const copiedDescriptions = useDescriptions();
  const descriptionUpdate = useDescriptionsUpdate();

  const addDescription = (value: string) => {
    console.log("Add Description");
    descriptionUpdate(value);
  };

  const finalDescriptions = descriptions?.filter(
    (description) => !copiedDescriptions?.includes(description)
  );

  const Chips = () =>
    finalDescriptions?.map((value) => (
      <WordChip key={value} onClick={() => addDescription(value)}>
        {value} <IoMdAddCircleOutline />
      </WordChip>
    ));

  return <div className="flex flex-wrap gap-2">{Chips()}</div>;
};

export default Descriptions;
