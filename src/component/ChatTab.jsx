import {
  Delete as DeleteIcon,
  Folder as FolderIcon,
} from "@mui/icons-material";
import {
  List,
  ListItem,
  IconButton,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Typography,
  ListItemButton
} from "@mui/material";
import React from "react";

const ChatTab = ({ username }) => {
  return (
    <ListItemButton
      sx={{
        
        borderRadius: "10px",
        paddingTop: "5px",
        "&:hover": {
          backgroundColor: "lightgray",
        },
      }}
      // secondaryAction={
      //   <IconButton edge="end" aria-label="delete">
      //     <DeleteIcon />
      //   </IconButton>
      // }
    >
      {/* <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar> */}

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
