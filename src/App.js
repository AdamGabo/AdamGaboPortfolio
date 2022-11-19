import React from 'react';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import GridImages from './components/Cards'; 

function App() {
  return (
    <div>
      <Header></Header>
        <GridImages/>
      <Footer></Footer>
    </div>
  );
}

export default App;
