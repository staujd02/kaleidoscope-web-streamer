import React from 'react';
import './App.css';
import Cycler from '../Cycler/Cycler';
import SourceList from '../source-list.json';
import Loader from '../Loader/Loader';

const TEN_MINUTES = "600000";
const cycleTime = parseInt(process.env.REACT_APP_CYCLE_TIME || TEN_MINUTES);

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
