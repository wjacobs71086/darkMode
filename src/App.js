import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "./Contexts/darkModeContext";

const Wrapper = styled("div")`
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  margin: 0;
  madding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen";
  h1 {
    color: ${props => props.theme.body};
  }
`;

const App = () => {
  const themeState = useTheme();

  return (
    <Wrapper>
      <h1>Dark Mode example</h1>
      <div>
        <button onClick={() => themeState.toggle()}>
          {themeState.dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </Wrapper>
  );
};

export default App;