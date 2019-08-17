import React from 'react';
import './CyclerControl.css';

class CyclerControl extends React.Component<CyclerControlProps, CyclerControlState> {

    render(){
        const { onSkip } = this.props;
        return (
            <div className='cycler-controls'>
                <button id="skip-control" onClick={onSkip}>Skip</button>
            </div>);
    }

}

export default CyclerControl;