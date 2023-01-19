import { styled } from "@mui/material/styles";

export const HomeBackground = styled("div")(({ theme }) => ({
  position: "fixed",
  width: "100%",
  height: "100%",
}));

export const HomeCenterPart = styled("div")(({ theme }) => ({
  width: "100%",
  height: "76%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  overflowY: "scroll",
  overflowX: "hidden",
  // justifyContent: "center",
  // paddingLeft: 30,
}));

export const LinkPart = styled("div", {
  shouldForwardProp: (prop) => prop !== "marginTop",
})<{ marginTop?: string }>(({ theme, marginTop }) => ({
  fontSize: 13,
  width: "90%",
  textAlign: "center",
  fontStyle: "italic",
  textDecoration: "underline",
  color: theme.palette.action.active,
  writingMode: "vertical-rl",
  textOrientation: "mixed",
  cursor: "pointer",
  marginTop: marginTop || "0px",
  // backgroundColor: " red",
  "&:hover": {
    color: theme.palette.action.hover,
  },
}));
