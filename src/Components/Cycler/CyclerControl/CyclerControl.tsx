import React from 'react';
import './CyclerControl.css';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import { PlayBackMode } from '../../../enumerations';

class CyclerControl extends React.Component<CyclerControlProps, CyclerControlState> {

    render(){
        const { onSkip, onPlayBack, playBackMode } = this.props;
        return (
            <div className='cycler-controls'>
                <IconButton id="skip-control" onClick={onSkip} aria-label="skip">
                    <SvgIcon>
                        <path fill="none" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path><path fill="none" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
                    </SvgIcon>
                </IconButton>
                <IconButton id="playback-control" onClick={onPlayBack} aria-label={playBackMode}>
                    {playBackMode === PlayBackMode.Play && 
                    <SvgIcon>
                        <path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30 c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15 C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z" />
                        <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30 S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z" />
                    </SvgIcon>}
                    {playBackMode === PlayBackMode.Pause &&
                        <SvgIcon>
                            <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30 S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z" />
                            <path d="M33,46h8V14h-8V46z M35,16h4v28h-4V16z" />
                            <path d="M19,46h8V14h-8V46z M21,16h4v28h-4V16z" />
                        </SvgIcon>}
                </IconButton>
            </div>);
    }

}

export default CyclerControl;