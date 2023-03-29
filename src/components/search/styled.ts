import { styled } from "@stitches/react";

export const SearchContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  margin: "$space$4 0",
});

export const SearchInputContainer = styled("div", {
  display: "flex",
  flex: 1,
  marginBottom: "$space$1",
});

export const SearchResultCount = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
});

export const SearchInput = styled("input", {
  display: "flex",
  flex: 1,
});

export const SearchButton = styled("div", {
  backgroundColor: "$niagara",
  padding: "$space$2 $space$3",
  cursor: "pointer",
});
