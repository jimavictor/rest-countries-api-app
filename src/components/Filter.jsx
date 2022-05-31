import { StyledOptions } from "../styles/Filter";

function Filter({ dark, value, onChange }) {
  return (
    <StyledOptions>
      <select
        className="select"
        value={value}
        onChange={onChange}
        id={dark && "dark_filter"}
      >
        <option value="filter">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </StyledOptions>
  );
}
export default Filter;
