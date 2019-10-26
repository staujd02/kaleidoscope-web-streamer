import React from 'react';
import './Configuration.scss';
import SourceDetails from './SourceDetails/SourceDetails';
import ConfigurationHeader from '../Headers/ConfigurationHeader';
import SourceListCard from './SourceListCard/SourceListCard';
import StreamPreview from './StreamPreview/StreamPreview';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

export default class Configuration extends React.Component<ConfigurationProps, ConfigurationState> {

    constructor(props: ConfigurationProps) {
        super(props);
        this.state = {
            selectedSource: null
        }
    }

    handleSelectSource = (s: Source) => {
        this.setState({
            selectedSource: s.key
        });
    }

    handleUpdate = (s: Source) => {
        let found = this.props.sourceRepo.streams
            .findIndex(source => source.key === s.key);
        if (found >= 0) {
            let copy = this.props.sourceRepo.streams;
            copy[found] = s;
            this.props.handleSave({
                ...this.props.sourceRepo,
                streams: copy
            })
        }
    }

    render() {
        let source = this.props.sourceRepo.streams.find(s => s.key === this.state.selectedSource) || null;
        return (
            <ConfigurationHeader>
                <Container className="config-titlebar">
                    <Button onClick={this.props.doneConfiguring} className="resume-cycle">Resume Cycle</Button>
                </Container>
                <Container className="config-content">
                    <SourceListCard handleSelectSource={this.handleSelectSource} sourceList={this.props.sourceRepo.streams} />
                    <SourceDetails handleUpdate={this.handleUpdate} source={source} />
                    <StreamPreview source={source} />
                </Container>
            </ConfigurationHeader>
        );
    }

}