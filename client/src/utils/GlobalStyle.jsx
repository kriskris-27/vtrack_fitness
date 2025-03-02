import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
font-family: 'Space Grotesk', sans-serif;
 background: transparent;
    background-image: url('/utils/Images/Logo.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
}`




export default GlobalStyle