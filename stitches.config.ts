import { createStitches, globalCss } from "@stitches/react";

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: "Arial, sans-serif, system-ui",
    },
    colors: {
      atoll: "#075F73",
      niagara: "#0AA6A6",
      flamePea: "##D95829",
      thunderbird: "#D92A1A",
      codGray: "#0D0D0D",
      quickSilver: "#A6A6A6",
      white: "#fff",
    },
    fontSizes: {
      1: "12px",
      2: "16px",
      3: "24px",
    },
    space: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "32px",
    },
  },
});
