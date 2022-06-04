import styled from "styled-components";

export const StyledInput = styled.div`
  input {
    min-width: 290px;
    padding: 10px;
    padding-left: 20px;
    border-radius: 10px;
    border-color: transparent;
    outline: none;
    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.2);

    @media only screen and (min-width: 500px) {
      min-width: 340px;
    }
  }
`;
