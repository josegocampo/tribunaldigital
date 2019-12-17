import React from "react";
import styled from "styled-components";


const Bar = styled.div`
background: #ffcb3a;
height: 100px;
display: flex;
align-items: center;
`

const BarTxt = styled.div`
margin: 0 auto;
`

const BotBar = () => {
    
  
    return (
  <Bar>

<BarTxt>Don't miss our latest legal technology news. Learn more ></BarTxt>
  </Bar>
        
  
    );
  }



  export default BotBar;