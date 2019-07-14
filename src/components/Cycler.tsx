import React from 'react';
import Stream from './Stream/Stream';

class Cycler extends React.Component<CyclerProps, CyclerState> {

    constructor(props: any){
        super(props);
        this.getSource = this.getSource.bind(this);
        this.state = {
            activeSource: 0
        }
    }

    render() {
        const { activeSource } = this.state;
        return (
            <div>
                <Stream source={this.getSource(activeSource)} />
            </div>
        );
    }

    private getSource(activeSource: number) {
        return this.props.sourceList[activeSource];
    }
}

export default Cycler;