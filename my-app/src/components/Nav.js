import React from "react";
import styled from "styled-components";
import justicegold from '../images/justicegold.jpg';
import { createGlobalStyle } from "styled-components";



const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Fira Sans');
  body {
    font-family: 'Fira Sans', sans-serif;
  }
`


const Navigator = styled.div`
  height: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  top: 0;
  position: sticky;
  display: flex;
  align-items: center;
  background: white;
`;

const Navalogo = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-right: 200px;
  font-size: 14px;
  font-weight: 700;
  `;

  
const Log = styled.div`
width: 300px;
height: 50px;

`;

const NavaLinks = styled.div`
display: flex;
justify-content: space-between;
width: 1000px;
height: 60px;
margin: 0 auto;

`;


const NavATags = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;


const Nava = styled.div`
color: #222222;
font-weight: 600;
letter-spacing: 1.1px;
text-transform: none;
margin-right: 25px;
font-size: 0.8rem;
text-transform: uppercase;

  
  &:hover {
    background-color: fff;
    border-bottom: 2px solid #3dade2;
  }
`;

const Button = styled.form`
  width: 150px;
  background: #222222;
  height: 50px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;


 
 &:hover {
  background-color: fff;
  border-bottom: 1px solid white;
}
`;





const Nav = props => {
  return (

     
    
    <Navigator>

        
     
    <GlobalStyles/>
        
            <NavaLinks>

            <Navalogo><img src={justicegold} className='justice'/> tribunal digital</Navalogo>
          
          <NavATags>
                
                    <a href='#'> <Nava>Home</Nava></a>
                    
                    <a href='#'><Nava>Servicios </Nava></a>
                 
                     <a href='#'><Nava>Arbitros </Nava></a>
                     
                 
                    <a href='#'> <Nava>Reglamento</Nava></a>
            
                    <a href='#'><Nava>Contacto </Nava></a>
            
               
          </NavATags>
        
            </NavaLinks>  
                
        
         </Navigator>

  );
};

export default Nav;
