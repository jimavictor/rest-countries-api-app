import styled from "styled-components";

export const StyledContainer = styled.span`
  padding: 5px 10px;
  margin-top: -5px;
  text-align: center;
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.2);
`;

export const StyledGrid = styled.div`
  min-width: 20vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  grid-row-gap: 15px;
  grid-column-gap: 9px;
`;
