import React from 'react';
import Stream from './Stream/Stream';

class Cycler extends React.Component<CyclerProps, CyclerState> {

    constructor(props: any){
        super(props);
        this.getSource = this.getSource.bind(this);
        this.state = {
            activeSource: 0
        }
        setInterval(this.cycle.bind(this), this.props.cycleTime);
    }
    
    cycle() {
        const { sourceList } = this.props;
        let { activeSource } = this.state;
        this.setState({
           activeSource: this.cycleIndex(activeSource, sourceList.length) 
        });
    }

    private cycleIndex(activeSource: number, length: number) {
        activeSource++;
        if (activeSource === length) {
            activeSource = 0;
        }
        return activeSource;
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