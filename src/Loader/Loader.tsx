import React from 'react';
import LoadScreen from '../LoadScreen/LoadScreen';

class Loader extends React.Component<LoaderProps, LoaderState> {

    constructor(props: any) {
        super(props);
        this.state = {
            doneLoading: false
        }
        setTimeout(this.finishedLoading.bind(this), 5000);
    }

    finishedLoading(){
        this.setState({
            doneLoading: true
        });
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