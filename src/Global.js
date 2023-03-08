import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
// RESET
html,
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
p,
a,
em,
img,
small,
strike,
strong,
b,
u,
i,
center,
ul,
li,
fieldset,
form,
label {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 0;
  font: inherit;
  vertical-align: baseline;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

html {
  box-sizing: border-box;
}

body,
p,
h1,
ul,
nav,
input,
form {
  padding: 0;
  margin: 0;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

html,
body, #root {
  height: 100%;
}

html {
  min-height: 100vh;
  overflow-y: scroll;
}

body, #root {
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-size: 1.2rem;
}
`;
