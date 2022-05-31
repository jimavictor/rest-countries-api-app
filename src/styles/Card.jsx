import styled from "styled-components";

export const CardGrid = styled.div`
  .error-container {
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .error {
    color: black;
  }
  #dark-loading {
    color: white;
  }
  display: grid;
  place-content: center;
  width: 100%;
  grid-gap: 30px;
  margin-top: 20px;
  grid-template-columns: repeat(auto-fit, 300px);
  .data {
    font-weight: bolder;
  }
  .name {
    margin-bottom: 15px;
    font-weight: bolder;
  }
  .card {
    min-height: 300px;
    width: 290px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.2);
    color: black;
  }
  .flag {
    width: 100%;
    height: 150px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  .details {
    height: 150px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-bottom: 30px;
  }
  .link {
    text-decoration: none;
  }
`;
