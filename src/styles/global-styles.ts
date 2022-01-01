import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #F5F9F8;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  .charts{
      display:flex;
      flex-wrap:wrap;
      justify-content:space-around;
      margin:10px auto;
      width:80%;
  }
  .filters{ 
    margin:10px auto;
    width:70%;
    display:flex;
    justify-content:space-around;
    background-color:#FAEDCC;
    border-radius: 10px;
    >div {
      width:100%;
      margin:30px;
    }
  }

  .statistics{
    margin:10px auto;
    width:70%;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around;
  }
`;

export default GlobalStyle;
