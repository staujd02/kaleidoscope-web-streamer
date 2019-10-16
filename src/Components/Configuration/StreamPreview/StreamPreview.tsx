import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class StreamPreview extends React.Component {
    render() {
        return (
            <Card className="card">
                <CardContent>
                    <Typography className="title" color="textSecondary" gutterBottom>
                        Preview of the Stream
                    </Typography>
                    <Typography className="placeholder">
                        Select a stream to view a preview of it.
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}