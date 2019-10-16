import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class StreamDetails extends React.Component {
    render() {
        return (
            <Card className="card">
                <CardContent>
                    <Typography className="title" color="textSecondary" gutterBottom>
                        Stream Details
                    </Typography>
                    <Typography className="placeholder">
                        Select a stream to view it's details.
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}