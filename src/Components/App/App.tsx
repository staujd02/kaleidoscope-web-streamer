import React from 'react';
import './App.css';
import Cycler from '../Cycler/Cycler';
import SourceList from '../../source-list.json';
import Loader from '../Loader/Loader';
import { loadTime, cycleTime } from '../../Constants/environment.constants';

const App: React.FC = () => {
  return (
    <div className="App" onClick={goFullScreen}>
      <Loader loadTime={loadTime}>
        <Cycler sourceList={SourceList} cycleTime={cycleTime} />
      </Loader>
    </div>
  );
}

const goFullScreen = (): void => {
  let div = document.getElementById("root");
  if (div)
    div.requestFullscreen();
}

export default App;
