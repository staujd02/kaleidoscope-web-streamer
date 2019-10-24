import React from 'react';
import './CyclerControl.scss';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import { PlayBackMode } from '../../../enumerations';

class CyclerControl extends React.Component<CyclerControlProps, CyclerControlState> {

    render() {
        const { onSkip, onPlayBack, onMenuOpen, playBackMode } = this.props;
        return (
            <div className='cycler-controls'>
                <IconButton id="skip-control" onClick={onSkip} aria-label="skip">
                    <SvgIcon xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                        <path d="M12 36l17-12-17-12v24zm20-24v24h4V12h-4z" />
                    </SvgIcon>
                </IconButton>
                <IconButton id="playback-control" onClick={onPlayBack} aria-label={playBackMode}>
                    {playBackMode === PlayBackMode.Play &&
                        <SvgIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                        </SvgIcon>}
                    {playBackMode === PlayBackMode.Pause &&
                        <SvgIcon xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                            <path d="M18 32h4V16h-4v16zm6-28C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm2-8h4V16h-4v16z" />
                        </SvgIcon>}
                </IconButton>
                <IconButton id="menu-control" onClick={onMenuOpen} aria-label="open menu">
                    <SvgIcon xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                        <path d="M28,0C12.561,0,0,12.561,0,28s12.561,28,28,28s28-12.561,28-28S43.439,0,28,0z M28,54C13.663,54,2,42.336,2,28
                            S13.663,2,28,2s26,11.664,26,26S42.337,54,28,54z"/>
                        <path d="M40,16H16c-0.553,0-1,0.448-1,1s0.447,1,1,1h24c0.553,0,1-0.448,1-1S40.553,16,40,16z"/>
                        <path d="M40,27H16c-0.553,0-1,0.448-1,1s0.447,1,1,1h24c0.553,0,1-0.448,1-1S40.553,27,40,27z"/>
                        <path d="M40,38H16c-0.553,0-1,0.448-1,1s0.447,1,1,1h24c0.553,0,1-0.448,1-1S40.553,38,40,38z"/>
                    </SvgIcon>
                </IconButton>
            </div>);
    }
}

export default CyclerControl;