import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Box
            component="div"
            sx={{
              flexGrow: 1,
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                textAlign: "left",
                marginLeft: 10,
                color: "#ffffff",
                height: "auto",
              }}
            >
              {"Alba Helpline: 04829 222776"}
            </Typography>
          </Box>
          <Button
            color="primary"
            variant="text"
            sx={{ fontSize: "13px", fontWeight: "bold", color: "white" }}
            // onClick={props.onLoginClick}
          >
            Register
          </Button>
          <Button
            color="primary"
            variant="text"
            sx={{
              fontSize: "13px",
              fontWeight: "bold",
              color: "white",
              marginLeft: "20px",
              marginRight: 10,
            }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
