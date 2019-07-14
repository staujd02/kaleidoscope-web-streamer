import React from 'react';
import './App.css';
import Cycler from './components/Cycler';
import SourceList from './source-list.json';
import LoadScreen from './components/LoadScreen/LoadScreen';

const TEN_SECONDS = 10000;
const ONE_MINUTE = TEN_SECONDS * 6;
const cycleTime = ONE_MINUTE;
const App: React.FC = () => {
  return (
    <div className="App">
      { false && <Cycler sourceList={SourceList} cycleTime={cycleTime}/>}
      <LoadScreen/>
    </div>
  );
}

export default App;
