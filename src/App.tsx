import React from 'react';
import './App.css';
import Cycler from './components/Cycler';
import SourceList from './sources/SourceList';

const App: React.FC = () => {
  return (
    <div className="App">
      <Cycler sourceList={SourceList}/>
    </div>
  );
}

export default App;
