import { StyledInput } from "../styles/SearchBox";
function SearchBox({ dark, input, onInput }) {
  return (
    <StyledInput>
      <input
        id={dark && "dark_search"}
        type="text"
        placeholder="Search for a country..."
        value={input}
        onInput={onInput}
      />
    </StyledInput>
  );
}

export default SearchBox;
