import { Grid, Typography, Box, Divider } from "@mui/material";
import { Chat, Chat as ChatIcon } from "@mui/icons-material";
import { Outlet, Navigate, NavLink, useParams } from "react-router-dom";
import React from "react";
import SearchBox from "../component/SearchBox";
import ChatTab from "../component/ChatTab";
const testUser = [
  {
    name: "testUser1",
  },
  {
    name: "testUser2",
  },
];
const ChatListSection = () => {
  const { chatId } = useParams();
  return (
    <Box sx={{ display: "flex" }}>
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
          borderRight: "1px solid",
          color: "divider",
          height: "100vh",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "left" }}>
          <Typography sx={{ p: "1rem", color: "black" }}>Chats</Typography>
        </Box>
        <SearchBox />
        <Box sx={{ m: 0, px: "0.2rem" }}>
          {testUser.map((chat) => {
            return <ChatTab username={chat.name} />;
          })}
        </Box>
      </Grid>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8} lg={6}>
            {chatId ? <Outlet /> : "dafasdsdaf"}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ChatListSection;
