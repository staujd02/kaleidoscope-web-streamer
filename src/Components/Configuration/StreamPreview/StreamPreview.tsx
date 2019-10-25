import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Stream from '../../Stream/Stream';

export default class StreamPreview extends React.Component<StreamPreviewProps> {
    render() {
        return (
            <Card className="card stream-preview">
                <CardContent>
                    <Typography className="title" color="textSecondary" gutterBottom>
                        Preview of the Stream
                    </Typography>
                    {this.props.source === null  &&
                        <Typography className="placeholder">
                            Select a stream to view a preview of it.
                        </Typography>
                    }
                    {this.props.source !== null &&
                        <Stream source={this.props.source} />}
                </CardContent>
            </Card>
        );
    }
}