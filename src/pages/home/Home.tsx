import {
  Box,
  Breadcrumbs,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";
// import React, { useState } from "react";
import { HomeBackground, HomeCenterPart } from "./HomeStyling";
import { Navbar, Tabbar } from "../../layouts";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import { useTheme } from "@mui/material/styles";

export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  // const smallMatches = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <>
      <HomeBackground>
        <Navbar />
        <Tabbar />
        <HomeCenterPart>
          <Box
            sx={{
              display: "flex",
              jusityContent: "start",
              width: "100%",
              ml: !matches ? 8 : 20,
              mt: 1,
              mb: 5,
            }}
          >
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              <Link
                underline="hover"
                key="1"
                color="inherit"
                href="/"
                // onClick={handleClick}
              >
                <HomeIcon />
              </Link>
              <Typography key="3" color="primary">
                About
              </Typography>
            </Breadcrumbs>
          </Box>
          <Box>
            <Typography
              variant="h4"
              component="div"
              justifyContent="center"
              alignItems="center"
              color="primary"
              sx={{
                // paddingBottom: 3,
                mb: 3,
              }}
            >
              Happiness is our Culture
            </Typography>
          </Box>
          <Box sx={{ marginInline: !matches ? 5 : 20, mb: 5 }}>
            <Typography
              variant="h6"
              component="div"
              justifyContent="center"
              alignItems="center"
              sx={{
                // paddingBottom: 3,
                color: "black",
              }}
            >
              The productivity and prosperity of an organisation is the
              reflection of the happiness and contentment of its employees. We
              believe that is what builds a family and the nation too. Happy
              employees are not just an asset to the organisation, but the love,
              contentment and enthusiasm they display build the whole world.So
              it is our prime responsibility to give a conducive, happy work
              culture for our employees, a climate which gives them
              opportunities for self growth and skill development.
            </Typography>
          </Box>
          <Box>
            <img src={require("../../assets/home_image.png")} alt="" />
          </Box>
        </HomeCenterPart>
      </HomeBackground>
    </>
  );
}
