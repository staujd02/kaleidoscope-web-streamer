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

export default class SourceDetails extends React.Component<SourceDetailsProps, SourceDetailsState> {

    constructor(props: SourceDetailsProps) {
        super(props);
        this.state = {
            error: '',
        }
    }
    
    handleToggle = (name: string) => (event: any) => {
        const { checked } = event.target;
        this.handleErrors(() =>
            this.props.handleUpdate({
                ...this.props.source!,
                [name]: !checked
            }), name);
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.handleErrors(() =>
            this.props.handleUpdate({
                ...this.props.source!,
                [name]: value
            }), name);
    }

    handleErrors = (call: () => void, optionalErrorState?: string) => {
        try {
            this.setState({ error: '' }, call);
        } catch (ex) {
            this.setState({
                error: optionalErrorState ? optionalErrorState : ex
            });
        }
    }

    render() {
        const { error } = this.state;
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
                            <TextField name='title' label="Source Name" type="text" onChange={this.handleChange} value={this.props.source.title} />
                            <TextField name='source' className="beefy" label="URL" onChange={this.handleChange} type="url" helperText="Must be embeddable" value={this.props.source.source} />
                            <Grid>
                                <InputLabel id="durationLabel" error={error === 'duration'} className="inline-lb">Duration</InputLabel>
                                <Input id="duration" name="duration" onChange={this.handleChange} type="number" value={this.props.source.duration} />
                            </Grid>
                            <Grid>
                                <InputLabel className="inline-lb">Enabled</InputLabel>
                                <Switch id="enable-toggle" name='isEnabled' onClick={this.handleToggle('isEnabled')} type="button" checked={this.props.source.isEnabled} />
                            </Grid>
                        </FormGroup>
                    )}
                </CardContent>
            </Card>
        );
    }
}