import React from 'react';
import LoadScreen from '../LoadScreen/LoadScreen';

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

    render(){
        const { doneLoading } = this.state;
        return (
            <div>
                {doneLoading ? this.props.children : (<LoadScreen />)}
            </div>
        );
    }
}

export default Loader;