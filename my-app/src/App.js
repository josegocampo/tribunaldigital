import React from 'react';
import './App.css';
// import Cards from './components/TribunalCard';
import Header from './components/Header';
import BorderBar from './components/BorderBar';
import TopContent from './components/TopContent';
import BotContent from './components/BotContent';
import Team from './components/Team';
import Press from './components/Press';
import Footer from './components/Footer'
// import BottomContent from './components/BottomContent'
import { createGlobalStyle } from "styled-components";
import Nav from './components/Nav';
import styled from "styled-components";




const Body = styled.div`
width: 1000px;
margin: 0 auto;
-webkit-font-smoothing: antialiased;
font-style: normal;
background: white;
`

const BodyGrey = styled.div`
background: #ececec;
`



const App = () => {


return (
  <div className="App">
  
    <Nav/>
    <Body>
      
      <Header/>
      
    </Body>

      <BorderBar/>

      <Body>
        
      <TopContent/>

    </Body>
<BodyGrey>
      <BotContent/>
</BodyGrey>
    <Body>

    <Team/>
    </Body>
    <BodyGrey>
      <Press/>
</BodyGrey>
<Footer/>
 


 
  
  </div>
);
}


export default App;
