import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import SourceList from './SourceList';
import SourceControlRow from '../SourceControlList/SourceControlRow';

export default class SourceListCard extends React.Component<SourceListCardProps, SourceListCardState> {

    constructor(props: SourceListCardProps){
        super(props);
        this.state = {
            search: ''
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            search: e.target.value
        });
    }

    render(){
        const { handleSelectSource, addSource, deleteSource, sourceList } = this.props;
        const { search } = this.state;
        return (
            <Card className="card source-list">
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
                        onChange={this.handleChange}
                    />
                    <SourceList search={search} handleSelectSource={handleSelectSource} sources={sourceList}/>
                    <SourceControlRow addSource={addSource} deleteSource={deleteSource} />
                </CardContent>
            </Card>
        );
    }
}