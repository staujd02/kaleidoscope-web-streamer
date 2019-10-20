import React from 'react';
import './Configuration.scss';
import SourceDetails from './SourceDetails/SourceDetails';
import ConfigurationHeader from '../Headers/ConfigurationHeader';
import SourceListCard from './SourceListCard/SourceListCard';
import StreamPreview from './StreamPreview/StreamPreview';
import { Button } from '@material-ui/core';

export default class Configuration extends React.Component<ConfigurationProps, ConfigurationState> {

    constructor(props: ConfigurationProps){
        super(props);
        this.state = {
            selectedSource: null
        }
    }

    handleSelectSource = (s: Source) => {
        this.setState({
            selectedSource: s
        });
    }

    handleUpdate = (s: Source) => {
        let found = this.props.sourceRepo.streams
            .findIndex(source => source.sortOrder === s.sortOrder);
        if(found >= 0){
            let copy = this.props.sourceRepo.streams;
            copy[found] = s;
            this.props.handleSave({
                ...this.props.sourceRepo,
                streams: copy
            })
        }
    }

    render() {
        return (
            <ConfigurationHeader>
                <Button onClick={this.props.doneConfiguring} className="cycle">Resume Cycle</Button>
                <SourceListCard handleSelectSource={this.handleSelectSource} sourceList={this.props.sourceRepo.streams} />
                <SourceDetails handleUpdate={this.handleUpdate} source={this.state.selectedSource}  />
                <StreamPreview source={this.state.selectedSource} />
            </ConfigurationHeader>
        );
    }

}