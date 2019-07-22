import React from 'react';
import './TimeDisplay.css';

class TimeDisplay extends React.Component<TimeDisplayProps>{

    render(){
        const { time } = this.props;
        const secondsRemaining = this.calcSeconds(time);
        const minutesRemaining = this.calcMinutes(time);
        return (
            <div className="time-display">
                <div className="time-box">{`${minutesRemaining}:${secondsRemaining}`}</div>
            </div>
        );
    }

    private calcMinutes(milSecondsRemaining: number) {
        return this.format(Math.floor(milSecondsRemaining / 60000));
    }

    private calcSeconds(milSecondsRemaining: number) {
        return this.format(Math.floor((milSecondsRemaining % 60000) / 1000));
    }

    private format(numberToFormat: number): string {
        var str = "" + numberToFormat;
        var pad = "00";
        return pad.substring(0, pad.length - str.length) + str;
    }
}

export default TimeDisplay;