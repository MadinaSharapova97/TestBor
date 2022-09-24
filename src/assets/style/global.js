import { createGlobalStyle } from "styled-components";
import './font.css'
import './icon.css'

 const GlobalStyle = createGlobalStyle`
     *{
        margin: 0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Poppins', sans-serif;
     }
     .container{
        max-width: 1110px;
        margin: 0 auto;
        padding: 0 15px;
     }
     


`
export default GlobalStyle;
