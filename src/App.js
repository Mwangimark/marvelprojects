import React from 'react';
import Header from './components/Header';
import Headerpic from './components/Headerpic';
import Routes from './components/Routes';
import Foot from './components/Foot';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Headerpic />
      {/* <BrowserRouter>
        <Routes />
      </BrowserRouter> */}
      <Characters/>
      <Foot />
    </div>
  );
}

export default App;
