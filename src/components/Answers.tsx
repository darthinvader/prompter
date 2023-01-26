import { useState } from "React";
import { Paper } from "@mui/material";
import Search from "./Search";
import DescriptionChip from "./DescriptionChip";

function getRandomStrings() {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const numStrings = 1000;
  const stringLength = 10;
  let randomStrings = [];

  for (let i = 0; i < numStrings; i++) {
    let randomString = "";
    for (let j = 0; j < stringLength; j++) {
      let randomIndex = Math.floor(Math.random() * chars.length);
      randomString += chars[randomIndex];
    }
    randomStrings.push(randomString);
  }

  return randomStrings;
}

const Answers = () => {
  const [searchText, setSearchText] = useState("");
  const [descriptions, setDesctriptions] = useState<String[]>();
  const handleChange = (event: any) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    setDesctriptions(getRandomStrings());
  };

  const Descriptions = descriptions?.map((description) => (
    <DescriptionChip label={description} key={description} />
  ));

  return (
    <Paper
      sx={{
        overflowY: "scroll",
        padding: 4,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "30em",
        width: "100vw",
      }}
      elevation={1}
    >
      <Search
        handleChange={handleChange}
        handleSearch={handleSearch}
        searchText={searchText}
      />
      <Paper elevation={2} sx={{ padding: 2, margin: 2 }}>
        {Descriptions}
      </Paper>
    </Paper>
  );
};

export default Answers;
