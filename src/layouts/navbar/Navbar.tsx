import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { pages } from "../tabbar/Tabbar";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function Navbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      {!matches ? (
        <MobileNavbar />
      ) : (
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
      )}
    </Box>
  );
}

function MobileNavbar() {
  const drawerRef = React.useRef<HTMLDivElement>(null);

  const [state, setState] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      console.log(event.target);
      console.log(drawerRef);
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      } else if (
        drawerRef.current &&
        drawerRef.current.contains(event.target as Node)
      ) {
        return;
      }

      setState(open);
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      ref={drawerRef}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          textAlign: "left",
          color: "#black",
          height: 100,
          ml: 3,
          mt: 5,
        }}
      >
        Alba Helpline:
        <br /> 04829 222776
      </Typography>
      <Divider />
      <List>
        {["Register", "Login"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{<AccountCircleIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {pages.map((itm, index) => (
          <InnerMenuDrawer key={index} itm={itm} />
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer(true)}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

type itmType = {
  title: string;
  hasMenu: boolean;
  menuItems: Array<string>;
};

type innerMenuDrawerProps = {
  itm: itmType;
};

function InnerMenuDrawer(props: innerMenuDrawerProps) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary={props.itm.title} />
          {props.itm.hasMenu ? open ? <ExpandLess /> : <ExpandMore /> : ""}
        </ListItemButton>
      </ListItem>
      {props.itm.hasMenu && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {props.itm.menuItems.map((e) => (
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary={e} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
}
