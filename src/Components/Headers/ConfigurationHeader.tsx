import React from 'react';

const ConfigurationHeader: React.FunctionComponent = props => (
    <header className="config-header">
        {props.children}
    </header>
);

export default ConfigurationHeader;