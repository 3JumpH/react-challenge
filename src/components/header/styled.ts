import { css, styled } from "@stitches/react";

export const HeaderContainer = styled("nav", {
  display: "flex",
  justifyContent: "space-between",
  margin: "$space$3 $space$4 $space$4",
});

export const HeaderItem = css({
  fontSize: "$fontSizes$3",
  color: "$white",
  textDecoration: "none",

  "&:hover": {
    color: "$quickSilver",
  },

  "&.active": {
    textDecoration: "underline",
    color: "$niagara",
  },
});
