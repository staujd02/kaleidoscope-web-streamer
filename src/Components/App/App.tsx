import React from 'react';
import './App.css';
import { loadTime } from '../../Constants/environment.constants';
import Kaleidoscope from '../Kaleidoscope/Kaleidoscope';

const App: React.FC = () => {
  let reference = React.createRef() as React.RefObject<HTMLDivElement>;
  return (
    <div className="App" ref={reference} onClick={() => goFullScreen(reference)}>
      <Kaleidoscope loadTime={loadTime} />
    </div>
  );
}

const goFullScreen = (reference: React.RefObject<HTMLDivElement>): void => {
  if (reference.current)
    reference.current.requestFullscreen();
}

export default App;
