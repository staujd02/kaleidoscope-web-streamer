import React from 'react';
import Stream from '../Stream/Stream';
import TimeDisplay from '../TimeDisplay/TimeDisplay';

class Cycler extends React.Component<CyclerProps, CyclerState> {

    constructor(props: any){
        super(props);
        this.getSource = this.getSource.bind(this);
        this.state = {
            activeSource: 0,
            millisecondsRemaining: this.props.cycleTime
        }
    }
    
    cycle(sourceList: Array<Source>, activeSource: number) {
        this.setState({
           activeSource: this.cycleIndex(activeSource, sourceList.length),
           millisecondsRemaining: this.props.cycleTime
        });
    }

    tick(sourceList: Array<Source>, activeSource: number) {
        const { millisecondsRemaining } = this.state;
        let nextRemainingCycle = millisecondsRemaining - 1000;
        if (nextRemainingCycle > 1000)
            this.setState({
                millisecondsRemaining: nextRemainingCycle
            });
        else
            this.cycle.bind(this)(sourceList, activeSource);
    }

    private cycleIndex(activeSource: number, length: number) {
        activeSource++;
        if (activeSource === length) {
            activeSource = 0;
        }
        return activeSource;
    } 

    render() {
        const { activeSource, millisecondsRemaining } = this.state;
        const { sourceList } = this.props;
        setTimeout(() => this.tick(sourceList, activeSource), 1000);
        return (
            <div>
                <Stream source={this.getSource(activeSource)} />
                <TimeDisplay time={millisecondsRemaining} />
            </div>
        );
    }

    private getSource(activeSource: number) {
        return this.props.sourceList[activeSource];
    }
}

export default Cycler;