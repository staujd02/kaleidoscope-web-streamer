import React from 'react';

const AppHeader: React.FunctionComponent = props => (
    <header className="App-header">
        {props.children}
    </header>
);

export default AppHeader;