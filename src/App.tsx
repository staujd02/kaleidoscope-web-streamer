import React from 'react';
import './App.css';
import Cycler from './components/Cycler';
import SourceList from './source-list.json';

const TEN_SECONDS = 10000;
const ONE_MINUTE = TEN_SECONDS * 6;
const cycleTime = ONE_MINUTE;
const App: React.FC = () => {
  return (
    <div className="App">
      <Cycler sourceList={SourceList} cycleTime={cycleTime}/>
    </div>
  );
}

export default App;
