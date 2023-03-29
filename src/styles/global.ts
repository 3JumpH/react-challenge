import { globalCss } from "@stitches/react";
import { styleReset } from "./normalize";

export const globalStyles = globalCss({
  ...styleReset,
  body: {
    backgroundColor: "$codGray",
    color: "$white",
    fontFamily: "$fonts$system",
  },
});
