import { css } from '@emotion/core';

export default css`
  body,
  html {
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    outline-width: 0;
    appearance: none;
  }

  input:focus,
  select:focus,
  button:focus,
  textarea:focus {
    outline-width: 1px;
  }

  section:focus {
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }
`;
