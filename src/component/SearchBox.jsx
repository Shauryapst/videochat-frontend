import React, { useState } from "react";
import { Paper, InputBase } from "@mui/material";
import {
  Search as SearchIcon,
} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Paper elevation={0} sx={{ display: "flex", alignItems: "center" }}>
      <IconButton type="button"  aria-label="search" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
      <InputBase placeholder="Search Chat" onChange={handleChange}/>
    </Paper>
  );
};

export default SearchBox;
