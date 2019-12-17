import React from "react";
import styled from "styled-components";




const Bot = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #55596d;
    text-align: center;
    margin: 0 auto;
    background: #ececec;
    width: 1000px;
`

const BotTxt = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`


const TxtTittle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    border: 1px solid orange;
`
const TxtSecond = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    border: 1px solid cyan;
`
const TxtThird = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 40%;
`

const Button = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 40%;
`

const BotCards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border: 2px solid limegreen;
    width: 100%;
    height: 50%;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 2px solid pink;
    width: 30%;
    width: 300px;
`


const BotImg = styled.div`

`

const CardTxt = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 40%;
`


const CardTxtSmall = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 40%;
`

const BotContent = () => {
    
  
    return (
      <div className="Ctt">
     <Bot>
    
          <BotTxt>
         
              <TxtTittle>
                  Titutlo
              </TxtTittle>
              <TxtSecond>Text Second</TxtSecond>
              <TxtThird>Text Third</TxtThird>
              <Button>Button</Button>
              
              </BotTxt>   
        
        <BotCards>
                     <Card> <BotImg>
                   {/* <img src={conflict} className='botimg'/> */}
                      </BotImg>

                      <CardTxt>CardTxt</CardTxt>
                      <CardTxtSmall>blablablabla</CardTxtSmall>
                      
                      </Card>
                      <Card> <BotImg>
                   {/* <img src={conflict} className='botimg'/> */}
                      </BotImg>

                      <CardTxt>CardTxt</CardTxt>
                      <CardTxtSmall>blablablabla</CardTxtSmall>
                      
                      </Card>
                      <Card> <BotImg>
                   {/* <img src={conflict} className='botimg'/> */}
                      </BotImg>

                      <CardTxt>CardTxt</CardTxt>
                      <CardTxtSmall>blablablabla</CardTxtSmall>
                      
                      </Card>
        </BotCards>
            
         </Bot>
        
      </div>
    );
  }



  export default BotContent;
