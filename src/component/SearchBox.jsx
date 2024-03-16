import React, { useState } from "react";
import { Paper, InputBase, Divider } from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Directions as DirectionsIcon,
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
      <IconButton type="button"  aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase placeholder="Search Chat" />
    </Paper>
  );
};

export default SearchBox;
