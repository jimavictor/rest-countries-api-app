import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 15px;
  background-color: white;
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.2);
  color: black;
  margin-bottom: 40px;
  .question {
    font-weight: bolder;
  }
  .toggle_mode {
    display: flex;
    align-items: center;
    justify-content: center;

    .toggle_icon {
      color: red;
      margin-top: 7px;
      margin-right: 7px;
      fill: black;
      &:hover {
        cursor: pointer;
      }
    }
  }
  @media screen and (min-width: 700px) {
    padding: 10px 40px;
    padding-left: 20px;
    font-size: 16px;
  }

  @media screen and (min-width: 900px) {
    padding: 10px 40px;
  }
`;
