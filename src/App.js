import React from 'react';
import {NameField, Taulukko, FetchNasaData} from './Components/Etusivu';
import './App.css';
import { GetExplanation } from './Explanation';
import { GetTitle } from './GetTitle';

function App() {
  return (
    <div className="App">
    <NameField />
    <h4>Planeetta Bongaus Lista: </h4>
    <Taulukko />
    <br></br>
    <GetExplanation />
    <br></br>
    <GetTitle />
    <FetchNasaData />
    </div>
  );
}

export default App;
