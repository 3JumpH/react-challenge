import { styled } from "@stitches/react";

export const Container = styled("div", {
  maxWidth: "800px",
  margin: "auto",
});

export const FloatingContainer = styled("div", {
  position: "absolute",
  top: "$space$2",
  right: "$space$2",
  display: "flex",
  gap: "20px",
});
