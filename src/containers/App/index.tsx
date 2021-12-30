import React from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import Home from "../../pages/Home";
import GlobalStyle from "../../styles/global-styles";

const App = () => {
  return (
    <ErrorBoundary>
      <GlobalStyle />
      <Home />
    </ErrorBoundary>
  );
};

export default App;
