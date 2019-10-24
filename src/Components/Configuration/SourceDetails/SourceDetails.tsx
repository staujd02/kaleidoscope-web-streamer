import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

export default class SourceDetails extends React.Component<StreamDetailProps> {
    render() {
        return (
            <Card className="card">
                <CardContent>
                    <Typography className="title" color="textSecondary" gutterBottom>
                        Stream Details
                    </Typography>
                    {this.props.source === null &&
                        <Typography className="placeholder">
                            Select a stream to view it's details.
                        </Typography>}
                    {this.props.source !== null && (
                        <React.Fragment>
                            <TextField label="Source Name" type="text" value={this.props.source.title} />
                            <TextField label="URL" type="url" helperText="Must be embeddable" value={this.props.source.source} />
                            <InputLabel>Duration</InputLabel>
                            <Input type="number" value={this.props.source.duration} />
                            <InputLabel>Enabled</InputLabel>
                            <Switch type="button" checked={this.props.source.isEnabled} />
                        </React.Fragment>
                    )}
                </CardContent>
            </Card>
        );
    }
}