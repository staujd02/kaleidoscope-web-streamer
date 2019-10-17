import React from 'react';
import StreamDetails from './StreamDetails/StreamDetails';
import StreamListCard from './StreamListCard/StreamListCard';
import StreamPreview from './StreamPreview/StreamPreview';
import ConfigurationHeader from '../Headers/ConfigurationHeader';
import './Configuration.scss';

export default class Configuration extends React.Component<ConfigurationProps> {
    render() {
        return (
            <ConfigurationHeader>
                <StreamListCard sourceList={this.props.sourceRepo.streams} />
                <StreamDetails />
                <StreamPreview />
            </ConfigurationHeader>
        );
    }

}