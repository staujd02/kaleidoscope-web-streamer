import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
                    {this.props.source !== null &&
                        <Typography className="placeholder">
                            {this.props.source.title}
                        </Typography>}
                </CardContent>
            </Card>
        );
    }
}