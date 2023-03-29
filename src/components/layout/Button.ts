import { styled } from "@stitches/react";

export const Button = styled("div", {
  border: "1px solid $thunderbird",
  borderRadius: "$space$2",
  padding: "$space$2 $space$3",
  cursor: "pointer",
  backgroundColor: "$thunderbird",
});

export const FloatingButton = styled(Button, {
  position: "absolute",
  top: "$space$2",
  right: "$space$2",
});
