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
  }
  .filters{ 
    margin:30px;
    display:flex;
    justify-content:space-around;
    background-color:#FAEDCC;
    border-radius: 10px;
    >div {
      width:100%;
      margin:30px;
    }
  }
`;

export default GlobalStyle;
