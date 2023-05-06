import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => (props.darkMode ? '#222' : '#fff')};
    color: ${props => (props.darkMode ? '#fff' : '#222')};
  }
`;
