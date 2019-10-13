import React from 'react';
import LoadScreen from '../LoadScreen/LoadScreen';
import ConfigureButton from '../Configuration/ConfigureButton';

class Loader extends React.Component<LoaderProps, LoaderState> {

    constructor(props: any) {
        super(props);
        this.state = {
            doneLoading: false
        }
        setTimeout(this.finishedLoading, this.props.loadTime);
    }

    finishedLoading = () => {
        this.setState({
            doneLoading: true
        });
    }

    render() {
        const { doneLoading } = this.state;
        const { handleConfigureClick } = this.props;
        if (doneLoading)
            return this.props.children;
        else
            return (
                <LoadScreen>
                    <ConfigureButton buttonClickHandler={handleConfigureClick} />
                </LoadScreen>
            );
    }
}

export default Loader;