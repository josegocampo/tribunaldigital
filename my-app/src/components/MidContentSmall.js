import React from "react";
import styled from "styled-components";
// import mace from '../images/mace.png';
import conflict from '../images/conflict.png';
import chat from '../images/chat.png';



const Mid = styled.div`
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #55596d;
    text-align: center;
    margin: 0 auto;
    background: #ececec;
    margin-bottom: 100px;
`

const MidTxt = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const MidCards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 50%;
`

const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 42%;
    width: 300px;
`


const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`


const MidImg = styled.div`

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

const MidContent = () => {
    
  
    return (
      <div className="Ctt">
     <Mid>
    
          <MidTxt>Titulo Mid</MidTxt>   
        
        <MidCards>
                     <Card> <MidImg>
                   <img src={conflict} className='midimg'/>
                      </MidImg>

                      <Text><TxtTittle>Tribunal Arbitral Digital</TxtTittle>
                      <TxtSecond>blablablabla</TxtSecond></Text>
                      
                      </Card>

                      <Card> <MidImg>
                   <img src={chat} className='midimg'/>
                      </MidImg>

                      <Text><TxtTittle>Tribunal Arbitral Digital</TxtTittle>
                      <TxtSecond>blablablabla</TxtSecond></Text>
                      
                      </Card>
        </MidCards>
            
         </Mid>
        
      </div>
    );
  }



  export default MidContent;
