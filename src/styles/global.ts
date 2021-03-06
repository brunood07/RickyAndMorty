import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --green: #33cc95;
    --red: #e52e4d;
    --blue: #5429cc;
    
    --blue-light: #6933ff;
    
    --text-title: #363f5f;
    --text-body: #969cb3;
    --text: #20bf55;
    
    --background: #1e1e1e;
    --shape: #ffffff
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15 px
    }
    @media (min-width: 720px) {
      font-size: 87.5%; // 14 px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;

    font-family: Roboto, sans-serif;

  }

  body, input, textarea, button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button {
    cursor: pointer;
  }
  
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
