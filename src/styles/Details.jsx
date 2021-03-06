import styled from "styled-components";

export const StyledDetails = styled.div`
  #dark-details {
    background-color: hsl(207, 26%, 17%);
  }
  h2 {
    min-width: 250px;
  }
  .error {
    color: black;
    margin-top: 15px;
    margin-left: 10px;
  }
  .error-container {
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
  }
  .content {
    padding-bottom: 20px;
  }
  .container {
    padding: 0 20px;
  }
  #dark-loading {
    color: white;
  }
  .back {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100px;
    text-decoration: none;
    padding: 5px 20px;
    margin: 20px;
    color: black;
    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.2);
  }
  .flag {
    width: 100%;
  }
  .bold {
    font-weight: bold;
  }
  .top,
  .bottom,
  .top-bottom {
    display: flex;
    flex-direction: column;
  }
  .bottom {
    min-width: 220px;
  }
  .top {
    margin-bottom: 20px;
  }
  h2 {
    margin: 10px 0;
  }
  .border {
    display: flex;
    margin-top: 20px;
    .bold {
      margin-right: 10px;
    }
  }
  #dark-details {
    color: white;
  }
  #dark-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100px;
    text-decoration: none;
    padding: 5px 20px;
    margin: 20px;
    color: white;
    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.2);
    background-color: hsl(209, 23%, 22%);
  }
  #dark-container {
    background-color: hsl(209, 23%, 22%);
  }
  @media only screen and (min-width: 500px) {
    .top-bottom {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
  @media only screen and (min-width: 900px) {
    height: 100vh;
    width: 100vw;
    overflow-x: scroll;
    padding: 0 20px;
    .container {
      display: flex;
      justify-content: center;
    }
    .country-details {
      margin-top: -20px;
      padding-top: 50px;
      width: 100vw;
      min-height: 50vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-right: 30px;
    }
    .content {
      min-width: 300px;
      margin-left: 40px;
    }
    .top-bottom {
      min-width: 450px;
      max-width: 500px;
      padding-right: 30px;
    }
    .flag {
      min-width: 300px;
      max-width: 400px;
      max-height: 200px;
      margin-right: 30px;
      margin-left: -10px;
      padding-left: 45px;
    }
    .bottom {
      margin-left: 20px;
    }
    @media only screen and (min-width: 1100px) {
      overflow-x: hidden;
    }
  }
`;
