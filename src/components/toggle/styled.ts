import { styled } from "@stitches/react";
import { relative } from "path";

export const ToggleContainer = styled("div", {
  position: "relative",
});

export const ToggleItemContainer = styled("div", {
  backgroundColor: "$atoll",
  position: "absolute",
  right: 0,
});

export const ToggleItem = styled("div", {
  height: "30px",
  padding: "$space$2 $space$3",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",

  "&:hover": {
    backgroundColor: "$niagara",
  },
});
