import React from 'react';
import {Header} from "./components/header";
import {HeaderLine} from "./components/headerline";
import {AppContainer} from "./AppStyle";


const tempArr = [
  {
    fName:"TT",
    lName:"YY",
    email:"1xxxxx@gmail.com",
    age:24,
    onlineStatus:true,
  }
]

function App() {
  const header = "Posts";
  const desc = "Click the button to render posts!";
  return (
    <AppContainer data-test="appContainer">
      <Header />
      <section className="main">
        <HeaderLine  header={header} desc={desc} tempArr={tempArr}/>
      </section>
    </AppContainer>
  );
}

export default App;
