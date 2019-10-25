import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';

export default class SourceDetails extends React.Component<StreamDetailProps> {
    render() {
        return (
            <Card className="card source-detail">
                <CardContent>
                    <Typography className="title" color="textSecondary" gutterBottom>
                        Stream Details
                    </Typography>
                    {this.props.source === null &&
                        <Typography className="placeholder">
                            Select a stream to view it's details.
                        </Typography>}
                    {this.props.source !== null && (
                        <FormGroup>
                            <TextField label="Source Name" type="text" value={this.props.source.title} />
                            <TextField className="beefy" label="URL" type="url" helperText="Must be embeddable" value={this.props.source.source} />
                            <Grid>
                                <InputLabel className="inline-lb">Duration</InputLabel>
                                <Input type="number" value={this.props.source.duration} />
                            </Grid>
                            <Grid>
                                <InputLabel className="inline-lb">Enabled</InputLabel>
                                <Switch type="button" checked={this.props.source.isEnabled} />
                            </Grid>
                        </FormGroup>
                    )}
                </CardContent>
            </Card>
        );
    }
}