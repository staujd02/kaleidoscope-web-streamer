import React from 'react';
import Stream from '../Stream/Stream';
import TimeDisplay from '../TimeDisplay/TimeDisplay';

class Cycler extends React.Component<CyclerProps, CyclerState> {
    
    private readonly increment = 50;

    constructor(props: any){
        super(props);
        this.getSource = this.getSource.bind(this);
        this.state = {
            activeSource: 0,
            millisecondsRemaining: this.props.cycleTime,
            forgoRender: false
        }
    }

    shouldComponentUpdate(){
        const { forgoRender } = this.state;
        return !forgoRender ;
    }
    
    cycle = (sourceList: Array<Source>, activeSource: number) => {
        this.setState({
           activeSource: this.cycleIndex(activeSource, sourceList.length),
           millisecondsRemaining: this.props.cycleTime,
           forgoRender: false
        });
    }

    tick(sourceList: Array<Source>, activeSource: number) {
        const { millisecondsRemaining } = this.state;
        let nextRemainingCycle = millisecondsRemaining - this.increment;
        if (nextRemainingCycle > this.increment)
            this.setState({
                millisecondsRemaining: nextRemainingCycle
            });
        else
            this.cycle(sourceList, activeSource);
    }

    private cycleIndex(activeSource: number, length: number) {
        activeSource++;
        if (activeSource === length) {
            activeSource = 0;
        }
        return activeSource;
    }

    timeClicked = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        this.setState({
            millisecondsRemaining: 0,
            forgoRender: true
        });
    }

    render() {
        const { activeSource, millisecondsRemaining } = this.state;
        const { sourceList } = this.props;
        setTimeout(() => this.tick(sourceList, activeSource), this.increment);
        return (
            <div>
                <Stream source={this.getSource(activeSource)} />
                <TimeDisplay onClick={this.timeClicked} time={millisecondsRemaining} />
            </div>
        );
    }

    private getSource(activeSource: number) {
        return this.props.sourceList[activeSource];
    }
}

export default Cycler;