import React from 'react';
import NavBar from './components/Navbar';
import Lista from './components/Lista';
import ProveerTemContexto from './context/Tema_Contexto';

function App() {
  return (
    <div className="App">
      <ProveerTemContexto>
        <NavBar/>
        <Lista />
      </ProveerTemContexto>
    </div>
  );
}

export default App;
