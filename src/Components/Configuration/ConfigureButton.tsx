import React from 'react';
import { Button } from '@material-ui/core';

export default class ConfigureButton extends React.Component<ConfigureButtonProps> {
    render(){
        const { buttonClickHandler } = this.props;
        return <Button color="primary" className="configure-button" onClick={buttonClickHandler}>Configure Streams</Button>
    }
}