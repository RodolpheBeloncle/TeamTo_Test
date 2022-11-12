import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media 
  (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    font-size: 16px;
    color: #F5F5F5;
    background-image: url('../background.png');
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, textarea, select, button {
    font: 400 1rem "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

    // Scrollbar
    ::-webkit-scrollbar {
    width: .5rem;
  }
  ::-webkit-scrollbar-track {
    background: #7D7D7D;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #c41f1f;
    border-radius: 4px;
  }
`;
