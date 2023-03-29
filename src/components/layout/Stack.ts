import { styled } from "@stitches/react";

export const Stack = styled("div", {
  display: "flex",
  flex: 1,

  variants: {
    variant: {
      column: {
        flexDirection: "column",
      },
    },
  },
});
