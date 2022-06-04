import styled from "styled-components";

export const StyledContainer = styled.span`
  a {
    color: black;
    text-decoration: none;
  }
  #dark_link {
    color: white;
  }
  width: fit-content;
  padding: 5px 10px;
  margin-top: -5px;
  text-align: center;
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.2);
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
`;
