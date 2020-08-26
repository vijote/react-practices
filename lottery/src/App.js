import React from 'react';
import './App.css';
import Lotto from './Lotto/Lotto';

function App() {
  return (
    <div className="App">
      <Lotto title='Lottery game!' balls={5} maxNum={40}/>
    </div>
  );
}

export default App;
