import React from 'react';
import Stream from '../Stream/Stream';
import TimeDisplay from '../TimeDisplay/TimeDisplay';
import CyclerControl from './CyclerControl/CyclerControl';
import Curtain from '../Curtain/Curtain';

class Cycler extends React.Component<CyclerProps, CyclerState> {
    
    private readonly increment = 50;

    constructor(props: any){
        super(props);
        this.state = {
            activeSource: 0,
            millisecondsRemaining: this.props.cycleTime,
            controlsVisible: false
        }
    }

    componentDidMount(){
        const { activeSource } = this.state;
        const { sourceList } = this.props;
        setTimeout(() => this.tick(sourceList, activeSource), this.increment);
    }
    
    tick = (sourceList: Source[], activeSource: number) => {
        let nextRemainingCycle = this.timeRemainingInCycle();
        if (nextRemainingCycle > this.increment)
            this.updateClock(nextRemainingCycle);
        else
            this.cycle();
        setTimeout(() => this.tick(sourceList, activeSource), this.increment);
    }
    
    cycle = () => {
        const { activeSource } = this.state;
        const { sourceList } = this.props;
        this.setState({
           activeSource: this.cycleIndex(activeSource, sourceList.length),
           millisecondsRemaining: this.props.cycleTime
        });
    }

    private updateClock = (nextRemainingCycle: number) => {
        this.setState({
            millisecondsRemaining: nextRemainingCycle
        });
    }

    private timeRemainingInCycle() {
        const { millisecondsRemaining } = this.state;
        let nextRemainingCycle = millisecondsRemaining - this.increment;
        return nextRemainingCycle;
    }

    render() {
        const { activeSource, millisecondsRemaining,
             controlsVisible } = this.state;
        return (
            <div>
                <Stream source={this.getSource(activeSource)} />
                <TimeDisplay onClick={this.timeClicked} 
                    time={millisecondsRemaining} />
                <Curtain open={controlsVisible}>
                    <CyclerControl onSkip={this.onSkip} />
                </Curtain>
            </div>
        );
    }

    onSkip = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        this.cycle();
    }

    timeClicked = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        this.setState({ controlsVisible: !this.state.controlsVisible });
    }

    private cycleIndex(activeSource: number, length: number) {
        activeSource++;
        if (activeSource === length) {
            activeSource = 0;
        }
        return activeSource;
    }

    private getSource = (activeSource: number) => {
        return this.props.sourceList[activeSource];
    }
}

export default Cycler;