import React from 'react';
import Loader from '../Loader/Loader';
import Cycler from '../Cycler/Cycler';
import SourceList from '../../source-list.json';
import Configuration from '../Configuration/Configuration';

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

    componentDidMount(){

    }

    render() {
        const { isConfiguring, sourceRepository } = this.state;
        return (
            <React.Fragment>
                {isConfiguring && <Configuration sourceRepo={sourceRepository} />}
                {!isConfiguring &&
                    <Loader loadTime={this.props.loadTime} handleConfigureClick={this.openConfiguration}>
                        <Cycler sourceList={SourceList}/>
                    </Loader>
                }
            </React.Fragment>
        );
    }

    openConfiguration = (event: ButtonClickEvent): void => {
        this.setState({
            isConfiguring: true
        });
    }

}