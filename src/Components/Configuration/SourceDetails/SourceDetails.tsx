import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import SourceTitle from './SourceTitle/SourceTitle';
import SourceURL from './SourceURL/SourceURL';
import SourceDuration from './SourceDuration/SourceDuration';

export default class SourceDetails extends React.Component<SourceDetailsProps, SourceDetailsState> {

    constructor(props: SourceDetailsProps) {
        super(props);
        this.state = {
            error: '',
            shock: false
        }
    }
    componentDidUpdate(prevProps: SourceDetailsProps){
        if(this.state.shock)
            this.setState({
                shock: false
            });
        if(this.props.source !== null 
            && prevProps.source !== null
            && this.props.source.key !== prevProps.source.key)
                this.setState({
                    shock: true
                });

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
    
    transformUp = (ratio: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.value = (parseInt(event.target.value) * ratio).toString();
        this.handleChange(event);
    }

    render() {
        const { error, shock } = this.state;
        const conversionRatio = 1000;
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
                            <SourceTitle 
                                handleChange={this.handleChange} 
                                title={this.props.source.title} 
                                shock={shock} />
                            <SourceURL 
                                handleChange={this.handleChange} 
                                url={this.props.source.source} 
                                shock={shock} />
                            <Grid>
                                <InputLabel id="durationLabel" error={error === 'duration'} className="inline-lb">Duration</InputLabel>
                                <SourceDuration 
                                    handleChange={this.transformUp(conversionRatio)}
                                    duration={this.props.source.duration / conversionRatio} />
                            </Grid>
                            <Grid>
                                <InputLabel className="inline-lb">Enabled</InputLabel>
                                <Switch id="enable-toggle" name='isEnabled' onClick={this.handleToggle('isEnabled')}
                                    type="button" checked={this.props.source.isEnabled} />
                            </Grid>
                        </FormGroup>
                    )}
                </CardContent>
            </Card>
        );
    }
}