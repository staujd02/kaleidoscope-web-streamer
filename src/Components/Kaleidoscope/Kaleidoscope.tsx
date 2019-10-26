import React from 'react';
import Loader from '../Loader/Loader';
import Cycler from '../Cycler/Cycler';
import Configuration from '../Configuration/Configuration';
import SourceRepo from '../../LocalStorage/SourceRepo';

export default class Kaleidoscope extends React.Component<KaleidoscopeProps, KaleidoscopeState>{

    constructor(props: KaleidoscopeProps) {
        super(props);
        this.state = {
            isConfiguring: false,
            sourceRepository: {
                streams: []
            }
        }
    }

    componentDidMount() {
        this.setState({
            sourceRepository: SourceRepo.load()
        });
    }

    openConfiguration = (event: ButtonClickEvent): void => {
        this.setState({
            isConfiguring: true
        });
    }

    handleSave = (updatedSourceRepo: SourceRepository) => {
        SourceRepo.save(updatedSourceRepo);
        this.setState({
            sourceRepository: updatedSourceRepo
        });
    }

    doneConfiguringCallback = () => {
        this.setState({
            isConfiguring: false
        });
    }

    render() {
        const { isConfiguring, sourceRepository } = this.state;
        let sources = sourceRepository.streams.filter(s => s.isEnabled);
        sources.sort((a, b) => a.sortOrder - b.sortOrder);
        return (
            <React.Fragment>
                {isConfiguring && <Configuration doneConfiguring={this.doneConfiguringCallback} sourceRepo={sourceRepository} handleSave={this.handleSave} />}
                {!isConfiguring &&
                    <Loader loadTime={this.props.loadTime} handleConfigureClick={this.openConfiguration}>
                        <Cycler openMenuCallback={this.openConfiguration} sourceList={sources} />
                    </Loader>
                }
            </React.Fragment>
        );
    }
}