import React from "react";
import styled from "styled-components";
import tad from '../images/tad.jpg'


const Header = styled.div`
    height: 79vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #55596d;
    text-align: center;
    margin: 0 auto;
`

const HeaderTxt = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 45%;
    height: 60%;
`

const HeaderImage = styled.div`

`
const TxtTittle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.2
`


const Tribunal = styled.div`
     color: #222222;
     margin-right: 15px;
     margin-left: 15px;
     
`


const Digital = styled.div`
    color: #ffcb3a;
`

const TxtSecond = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 40%;
`
const TxtThird = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 40%;
`
const TxtForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 40%;
`
const IconsButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 40%;
`
const Icons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 40%;
`
const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 40%;
`

const Content = () => {
    
  
    return (
      <div className="Header">
     <Header>

             <HeaderTxt>
                 
                 <TxtTittle>
                     
                     <Tribunal>Tribunal</Tribunal> <Digital>Digital</Digital>
                 </TxtTittle>
                 </HeaderTxt>


             <HeaderImage>
               <img src={tad}/>
                  </HeaderImage>
     
         </Header>
    
        
      </div>
    );
  }



  export default Content;
