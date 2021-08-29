import React from 'react';
import {Header} from "./components/header";
import {HeaderLine} from "./components/headerline";
import {AppContainer} from "./AppStyle";

function App() {
  const header = "Posts";
  const desc = "Click the button to render posts!";
  return (
    <AppContainer>
      <Header/>
      <section className="main">
        <HeaderLine header={header} desc={desc}/>
      </section>
    </AppContainer>
  );
}

export default App;
