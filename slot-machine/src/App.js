import React from 'react';
import SlotMachine from './SlotMachine/SlotMachine';
import Friend from './Friend/Friend';
import Fruits from './Fruits';
import {choice, remove} from './Helpers/Helpers';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Slot machine!</h1>
      <SlotMachine S1="🍇" S2="🍊" S3="🍓" />
      <SlotMachine S1="🍇" S2="🍊" S3="🍇" />
      <SlotMachine S1="🍓" S2="🍓" S3="🍓" />
      <Friend hobbies={['Voleyball', 'Fotball', 'Singing']}/>
      <Friend name="mary" hobbies={['Painting', 'Dancing', 'Singing']}/>
      <p>{Fruits}</p>
      <p>I'd like a {choice(Fruits)} please.</p>
      <p>Here you go: {choice(Fruits)}</p>
      <p>Delicious! May I have another?</p>
      <p>Sorry, we're all out. We only have {remove(Fruits)} left.</p>

    </div>
  );
}

export default App;
