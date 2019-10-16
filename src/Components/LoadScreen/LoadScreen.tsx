import React from 'react';
import logo from '../../Assets/logos/kaleidoscope-2.svg';
import AppHeader from '../Headers/AppHeader';

const LoadScreen: React.FC = props =>
    <AppHeader>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Starting Up The Streams...</p>
        {props.children}
    </AppHeader>

export default LoadScreen;