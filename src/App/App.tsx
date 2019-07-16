import React from 'react';
import './App.css';
import Cycler from '../Cycler/Cycler';
import SourceList from '../source-list.json';
import Loader from '../Loader/Loader';

const TEN_SECONDS = 10000;
const ONE_MINUTE = TEN_SECONDS * 6;
const cycleTime = ONE_MINUTE;

const App: React.FC = () => {
  const cycle = <Cycler sourceList={SourceList} cycleTime={cycleTime} /> as unknown as React.Component;
  return (
    <div className="App" onClick={goFullScreen}>
      <Loader component={cycle} />
    </div>
  );
}

const goFullScreen = (): void => {
  let div = document.getElementById("root");
  if (div)
    div.requestFullscreen();
}

export default App;
