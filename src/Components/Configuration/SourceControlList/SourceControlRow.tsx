import React from 'react';
import { Button, Container } from '@material-ui/core';

class SourceControlRow extends React.Component<SourceControlRowProps> {
    render(){
        return (
            <Container className='source-control'>
               <Button color="primary" onClick={this.props.addSource}>Add</Button>
               <Button onClick={this.props.sortUp} disabled={this.props.sortDisable[0]}>Move Up</Button>
               <Button onClick={this.props.sortDown} disabled={this.props.sortDisable[1]}>Move Down</Button>
               <Button color="secondary" onClick={this.props.deleteSource}>Delete</Button>
            </Container>
        );
    }
}

export default SourceControlRow;