import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import SourceList from './SourceList';

export default class SourceListCard extends React.Component<SourceListCardProps> {
    render(){
        return (
            <Card className="card">
                <CardContent>
                    <Typography className="title" color="textSecondary" gutterBottom>
                        List of the Streams
                    </Typography>
                    <TextField
                        id="outlined-dense"
                        label="Search"
                        className="search"
                        margin="dense"
                        variant="outlined"
                    />
                    <SourceList handleSelectSource={this.props.handleSelectSource} sources={this.props.sourceList}/>
                </CardContent>
            </Card>
        );
    }
}