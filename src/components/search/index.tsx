import {
  SearchButton,
  SearchContainer,
  SearchInput,
  SearchInputContainer,
  SearchResultCount,
} from "./styled";

interface ISearchProps {
  value: string;
  itemCount: number;
  onChange: (newValue: string) => void;
  onSearch: () => void;
}

export const Search: React.FC<ISearchProps> = ({
  value,
  itemCount,
  onChange,
  onSearch,
}) => {
  return (
    <SearchContainer>
      <SearchInputContainer>
        <SearchInput value={value} onChange={(e) => onChange(e.target.value)} />
        <SearchButton onClick={() => onSearch()}>Search</SearchButton>
      </SearchInputContainer>
      <SearchResultCount>
        {`Currently showing ${itemCount} items`}
      </SearchResultCount>
    </SearchContainer>
  );
};
