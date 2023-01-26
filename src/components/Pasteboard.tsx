import { Button, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
// import { useDescriptions } from "./DescriptionContext";

function Pasteboard() {
  // const descriptions = useDescriptions();
  // const getValues = () => descriptions?.join(", ");

  const handleCopyClick = () => {
    // navigator.clipboard.writeText(getValues());
  };

  return (
    <div>
      <TextField type="text" value={"1"} onChange={(event) => {}} />
      <Button onClick={handleCopyClick}>Copy</Button>
    </div>
  );
}
export default Pasteboard;
