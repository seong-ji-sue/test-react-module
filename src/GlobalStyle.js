import {createGlobalStyle} from 'styled-components';

export const FONT = `'NanumBarunGothic', sans-serif`;

const GlobalStyle = createGlobalStyle`
    html, body {
 	    align-items: center;
 	    margin: 0px;
 	
 	    color: #333333;
        font-family: ${FONT};
        box-sizing: border-box;
        font-weight: normal;
    }
    
    form {
        margin:0px;
    }

    //input 기본 스타일 제거(브라우저마다 다름)
    input, textarea {
        appearance: none;
        -webkit-appearance: none;
        -webkit-border-radius: 0;
        box-sizing: border-box;
    }

    //select 기본 스타일 제거(브라우저마다 다름)
    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background: transparent;
        border: none;
        padding: 0;
    }
  
    div {    
        box-sizing: border-box;
    }`;

export default GlobalStyle;
