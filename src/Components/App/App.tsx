import React from 'react';
import './App.css';
import Cycler from '../Cycler/Cycler';
import SourceList from '../../source-list.json';
import Loader from '../Loader/Loader';
import { loadTime, cycleTime } from '../../Constants/environment.constants';

const App: React.FC = () => {
  let reference = React.createRef() as React.RefObject<HTMLDivElement>;
  return (
    <div className="App" ref={reference} onClick={() => goFullScreen(reference)}>
      <Loader loadTime={loadTime}>
        <Cycler sourceList={SourceList} cycleTime={cycleTime} />
      </Loader>
    </div>
  );
}

const goFullScreen = (reference: React.RefObject<HTMLDivElement>): void => {
  if (reference.current)
    reference.current.requestFullscreen();
}

export default App;
