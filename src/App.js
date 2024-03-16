import { useState } from "react";
import "./App.css";
import DashboardPage from "./pages/DashboardPage";

import { CssBaseline, Box } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import ChatListSection from "./section/ChatListSection";
import InviationsSection from "./section/InviationsSection";
import PeopleSection from "./section/PeopleSection";
import Conversation from "./component/Conversation";

const ProtectedRoute = ({ element, path, ...rest }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <AuthPage />;
  }
  return element;
};

const App = () => {
  return (
    <Box>
      <CssBaseline />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<ProtectedRoute element={<DashboardPage />} />}
          >
            <Route path="chat" element={<ChatListSection/>}>
              <Route path=":chatId" element={<Conversation/>} />
            </Route>
            <Route path="invitations" element={<InviationsSection/>}></Route>
            <Route path="people" element={<PeopleSection/>}></Route>
          </Route>
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
