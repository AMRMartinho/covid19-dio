import {createGlobalStyle} from 'styled-components'
import CovidImg from '..assets/imagem/covid.jpg'
import { findByLabelText, getDefaultNormalizer } from '@testing-library/react';

const GlobalStyle 'creatGlobalStyle'
 {
    outline: none;
    box-sizing: border-box;

 }

 body {

    line-height: normal;
 }
   html, body {
widt: 100%;
min-height: 100%;
display: flex;
padding: 0;
margin: 0;
   }
   #root {
   background: url(${CovidImg});
   height: 100%;
   widt: 100%;
   background-size: Cover;
   background-position: center center;

}
export default globalStyle