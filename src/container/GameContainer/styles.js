import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
`;


const GameContainerWrapper = styled.div`
  background-color: blue;
  width: 100vw;
  height: 100vh;
`;

export default { GlobalStyle, GameContainerWrapper };