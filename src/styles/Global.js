import { createGlobalStyle } from "styled-components/";

import BwModelica_Regular from "../fonts/BwModelica/woff/BwModelica-Regular.woff";
import BwModelica_Regular_2 from "../fonts/BwModelica/woff2/BwModelica-Regular.woff2";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0
    }

    @font-face {
        font-family: 'Bw Modelica';
        src: local('Bw Modelica'), local('FontName'),
        url(${BwModelica_Regular_2}) format('woff2'),
        url(${BwModelica_Regular}) format('woff');
        font-style: normal;
    }

    body {
        font-family: 'Bw Modelica';
        color: #fff;
        background-color: #0F0F0F;
    }
`;

export default GlobalStyles;
