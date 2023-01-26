import { Box, Button, TextField } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

interface SearchTypes {
  searchText: string;
  handleChange: (event: any) => void;
  handleSearch: () => void;
}

const Search: React.FC<SearchTypes> = ({
  searchText,
  handleChange,
  handleSearch,
}) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      position: "relative",
      padding: 0,
      margin: 0,
    }}
  >
    <TextField label="Search" value={searchText} onChange={handleChange} />
    <Button onClick={handleSearch} disableFocusRipple disableRipple>
      <SearchIcon />
    </Button>
  </Box>
);

export default Search;
