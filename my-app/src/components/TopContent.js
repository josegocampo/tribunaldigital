import React from "react";
import styled from "styled-components";
import shake from '../images/shake.jpg'
import MidContent from './MidContentSmall';


const Top = styled.div`
    height: 72vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: #55596d;
    text-align: center;
    margin: 0 auto;
`

const TopTxt = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 40%;
`

const TopImg = styled.div`
    
`
const TxtTittle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 40%;
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

const TopContent = () => {
    
  
    return (
      <div className="Ctt">
     <Top>
     <TopImg>
               <img src={shake} className='topimg'/>
                  </TopImg>

          <TopTxt>
                 <TxtTittle>Tribunal Arbitral Digital</TxtTittle>
                 <TxtSecond>Tribunal Arbitral Digital</TxtSecond>
                 <TxtThird>Tribunal Arbitral Digital</TxtThird>
                 <TxtForm>Tribunal Arbitral Digital</TxtForm>

          </TopTxt>   
          </Top>
          <MidContent/>
     
        
        
      </div>
    );
  }



  export default TopContent;
