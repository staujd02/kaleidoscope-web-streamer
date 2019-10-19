import React from 'react';

const ConfigurationHeader: React.FunctionComponent = props => (
    <header className="config-viewport">
        <div className="config-container">
            {props.children}
        </div>
    </header>
);

export default ConfigurationHeader;