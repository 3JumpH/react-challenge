import { styled } from "@stitches/react";

const COMPONENT_HEIGHT = "300px";

export const ArticleContainer = styled("div", {
  position: "relative",
  marginBottom: "$space$4",
});

export const ArticleInnerContainer = styled("div", {
  display: "flex",
  gap: "$space$3",
  height: COMPONENT_HEIGHT,
});

export const ArticleImageContainer = styled("div", {
  position: "relative",
  width: "500px",
  height: COMPONENT_HEIGHT,
  cursor: "pointer",
});

export const ArticleInfoContainer = styled("div", {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  gap: "$space$3",
  overflow: "hidden",
});

export const ArticleTitle = styled("div", {
  fontSize: "$fontSizes$3",
  cursor: "pointer",
});

export const ArticleFooter = styled("div", {
  display: "flex",
  justifyContent: "flex-end",

  div: {
    textDecoration: "none",
    color: "$niagara",
    cursor: "pointer",
  },
});
