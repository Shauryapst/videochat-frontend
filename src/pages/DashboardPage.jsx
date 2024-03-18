import {
  ListItem,
  Box,
  List,
  ListItemIcon,
  ListItemButton,
  CssBaseline
} from "@mui/material";
import {
  Chat as ChatIcon,
  Groups as GroupsIcon,
  PersonAdd as InviationIcon,
} from "@mui/icons-material";
import React, { useEffect } from "react";
import { Outlet, NavLink} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { establishSocketConnection } from "../socketCommunication/socketConnection";
import { loadCredentials } from "../slices/authSlice";

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
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const userData = useSelector((state) => state.auth);
  console.log(userData);
  useEffect(()=>{
    if(token)
      dispatch(loadCredentials());
      establishSocketConnection(userData);
  },[token])
  

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
