import React from 'react';
import './Configuration.scss';
import SourceDetails from './SourceDetails/SourceDetails';
import ConfigurationHeader from '../Headers/ConfigurationHeader';
import SourceListCard from './SourceListCard/SourceListCard';
import StreamPreview from './StreamPreview/StreamPreview';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import SourceRepositoryMutator from '../Mutators/SourceRepositoryMutator';

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
    
    sortDown = () => {
        this.props.handleSave(
            SourceRepositoryMutator.sortDown(this.props.sourceRepo, this.state.selectedSource)
        )
    }

    sortUp = () => {
        this.props.handleSave(
            SourceRepositoryMutator.sortUp(this.props.sourceRepo, this.state.selectedSource)
        )
    }

    addSource = () => {
        let s;
        this.props.handleSave(
            (s = SourceRepositoryMutator.add(this.props.sourceRepo))
        );
        this.setState({ selectedSource: s.streams[s.streams.length - 1].key });
    }

    deleteSelectedSource = () => {
        this.props.handleSave(
            SourceRepositoryMutator.delete(this.props.sourceRepo, this.state.selectedSource)
        );
        this.setState({ selectedSource: null });
    }

    handleUpdate = (s: Source) =>
        this.props.handleSave(
            SourceRepositoryMutator.update(this.props.sourceRepo, s)
        );

    render() {
        let source = this.props.sourceRepo.streams.find(s => s.key === this.state.selectedSource) || null;
        const sortUpDisabled = source === null ? true : !this.props.sourceRepo.streams.find(s => s.sortOrder < source!.sortOrder);
        const sortDownDisabled = source === null ? true : !this.props.sourceRepo.streams.find(s => s.sortOrder > source!.sortOrder);
        return (
            <ConfigurationHeader>
                <Container className="config-titlebar">
                    <Button onClick={this.props.doneConfiguring} className="resume-cycle">Resume Cycle</Button>
                </Container>
                <Container className="config-content">
                    <SourceListCard
                        handleSelectSource={this.handleSelectSource}
                        sortUp={this.sortUp}
                        sortDown={this.sortDown}
                        sortDisabled={[sortUpDisabled, sortDownDisabled]}
                        addSource={this.addSource}
                        deleteSource={this.deleteSelectedSource}
                        sourceList={this.props.sourceRepo.streams} />
                    <SourceDetails handleUpdate={this.handleUpdate} source={source} />
                    <StreamPreview source={source} />
                </Container>
            </ConfigurationHeader>
        );
    }

}