import {
  Drawer,
  ListItem,
  Box,
  List,
  ListItemIcon,
  ListItemButton,
  Container,
  CssBaseline
} from "@mui/material";
import {
  Chat,
  Chat as ChatIcon,
  Groups as GroupsIcon,
  PersonAdd as InviationIcon,
} from "@mui/icons-material";
import React from "react";
import { Outlet, Navigate, NavLink} from "react-router-dom";

const iconTabs = (key, icon, url) => {
  return (
    <ListItem key={key}>
      <NavLink to={`${url}`}>
      <ListItemButton
        sx={{
          minHeight: 24,
          justifyContent: "center",
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            justifyContent: "center",
          }}
        >
          {icon}
        </ListItemIcon>
      </ListItemButton>
      </NavLink>
    </ListItem>
  );
};

const DashboardPage = () => {
  return (
    <Box sx={{ display: 'flex', height:"100vh"}}>
      <CssBaseline />
      <Box variant="permanent" sx={{borderRight: "1px solid", color: 'divider'}}>
        <List>
          {iconTabs("chat", <ChatIcon sx={{ color: "black" }} />, "/chat")}
          {iconTabs("peoples", <GroupsIcon sx={{ color: "black" }}/>, "/people")}
          {iconTabs("invitations", <InviationIcon sx={{ color: "black" }}/>, "/invitations")}
        </List>
      </Box>
      <Box component="main" sx={{ flexGrow: 1}}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardPage;
