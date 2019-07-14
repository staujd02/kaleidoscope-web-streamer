import React from 'react';
import LoadScreen from './LoadScreen/LoadScreen';

interface LoaderProps {
    component: React.Component
}

interface LoaderState {
    doneLoading: boolean
}

class Loader extends React.Component<LoaderProps, LoaderState> {
    constructor(props: any) {
        super(props);
        this.state = {
            doneLoading: false
        }
    }

    render(){
        const { doneLoading } = this.state;
        const { component } = this.props; 
        return (
            <div>
                {!doneLoading && <LoadScreen />}
                {doneLoading && component}
            </div>
        );
    }
}

export default Loader;