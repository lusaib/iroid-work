import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Menu, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge, { BadgeProps } from "@mui/material/Badge";

const pages = [
  {
    title: "HOME",
    hasMenu: false,
    menuItems: [],
  },
  {
    title: "MEN",
    hasMenu: true,
    menuItems: ["alpha", "sigma"],
  },
  {
    title: "WOMEN",
    hasMenu: true,
    menuItems: ["women (cofee_mug.jpg )"],
  },
  {
    title: "GIRLS",
    hasMenu: true,
    menuItems: ["insta", "kanthari", "etc"],
  },
  {
    title: "BOYS",
    hasMenu: true,
    menuItems: ["none"],
  },
];

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Tabbar() {
  return (
    <AppBar
      position="relative"
      color="secondary"
      elevation={0}
      sx={{ bottom: 0 }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <AdbIcon
            color="primary"
            sx={{ display: { xs: "none", md: "flex" }, ml: 4, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            color="primary"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "primary",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography> */}
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            }}
          >
            {pages.map((page, index) => (
              <TabbarMenuIcon
                key={index}
                page={page.title}
                hasMenu={page.hasMenu}
                menuItems={page.menuItems}
              />
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, mr: 5 }}>
            <Tooltip title="Search">
              <IconButton sx={{ p: 0, mr: 2 }}>
                <SearchIcon sx={{ color: "#A4A4A4" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Cart">
              <IconButton sx={{ p: 0 }}>
                <StyledBadge badgeContent={4} color="primary">
                  <ShoppingCartIcon sx={{ color: "#A4A4A4" }} />
                </StyledBadge>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

type TabbarMenuIconProps = {
  page: string;
  hasMenu: boolean;
  menuItems: Array<string>;
};

function TabbarMenuIcon(props: TabbarMenuIconProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        // onClick={handleCloseNavMenu}
        sx={{
          my: 2,
          mx: 3,
          color: "black",
        }}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={props.hasMenu ? handleClick : () => {}}
        endIcon={
          props.hasMenu ? (
            !open ? (
              <ArrowDropDownIcon />
            ) : (
              <ArrowDropUpIcon />
            )
          ) : null
        }
      >
        {props.page}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {props.menuItems.map((e, i) => (
          <MenuItem key={e} onClick={handleClose}>
            {e}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
