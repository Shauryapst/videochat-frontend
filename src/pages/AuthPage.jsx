import React, { useState } from "react";
import {
  Container,
  Grid,
  Button,
  Divider,
  Collapse,
  TextField,
  Box,
  CssBaseline,
} from "@mui/material";

import LoginRegisterImage from "../assets/images/conversation.gif";
import { apiPost } from "../utils/apiHandler";

import { useDispatch } from "react-redux";
import { setCredentials } from "../slices/authSlice";
import { Navigate, useNavigate, redirect } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleLoginClick = async () => {
    setShowRegisterForm(false);
    setPassword("");
    if (!showLoginForm) setShowLoginForm(!showLoginForm);
    else {
      const response = await apiPost("/api/auth/login", {
        body: { email: email, password: password },
      });

      dispatch(setCredentials(response.userDetails));
      console.log("fadsf");
      window.location.href = "/chat";
    }
  };

  const handleRegisterClick = async () => {
    setShowLoginForm(false);
    setPassword("");
    if (!showRegisterForm) setShowRegisterForm(!showRegisterForm);
    else {
      const response = await apiPost("/api/auth/register", {
        body: { email: email, password: password, username: username },
      });
      dispatch(setCredentials(response.userDetails));

      window.location.href = "/chat";
    }
  };

  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <CssBaseline />
      <Grid container>
        <Grid
          item
          xs={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={LoginRegisterImage}
            alt="Your Image"
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Collapse in={showLoginForm}>
            <Box noValidate sx={{ mb: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="lemail"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={handleEmailChange}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="lpassword"
                value={password}
                onChange={handlePasswordChange}
                autoComplete="current-password"
              />
            </Box>
          </Collapse>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {
              <Button variant="contained" onClick={handleLoginClick}>
                {!showLoginForm ? "Login" : "Submit"}
              </Button>
            }
            <Divider style={{ marginTop: "1rem", marginBottom: "1rem" }} />
            {
              <Button variant="contained" onClick={handleRegisterClick}>
                {!showRegisterForm ? "Register" : "Submit"}
              </Button>
            }
          </div>

          <Collapse in={showRegisterForm}>
            <Box onSubmit={handleRegisterClick} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="remail"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={handleEmailChange}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="rpassword"
                value={password}
                onChange={handlePasswordChange}
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="username"
                label="User Name"
                type="text"
                id="rusername"
                value={username}
                onChange={handleUserNameChange}
              />
            </Box>
          </Collapse>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AuthPage;
