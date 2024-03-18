import {
  Folder as FolderIcon,
} from "@mui/icons-material";
import {
  Avatar,
  ListItemAvatar,
  ListItemText,
  Typography,
  ListItemButton,
} from "@mui/material";
import React from "react";

const ChatTab = ({ username }) => {
  return (
    <ListItemButton
      sx={{
        borderRadius: "10px",
        paddingTop: "5px",
        px: "2px",
        "&:hover": {
          backgroundColor: "lightgray",
        },
      }}
    >
      <ListItemAvatar sx={{ minWidth: "40px" }}>
        <Avatar sx={{ width: "30px", height: "30px" }}>
          <FolderIcon sx={{ width: "20px", height: "20px" }} />
        </Avatar>
      </ListItemAvatar>

      <ListItemText
        primary={
          <Typography variant="body2" style={{ color: "black" }}>
            {username}
          </Typography>
        }
        secondary={"Secondary text"}
      />
    </ListItemButton>
  );
};

export default ChatTab;
