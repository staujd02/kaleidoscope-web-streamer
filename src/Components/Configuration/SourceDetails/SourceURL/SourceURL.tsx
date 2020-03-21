
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Shocker from '../../../Workarounds/Shocker';

const configProps = {
    name: 'source',
    className: "beefy",
    label: "URL",
    type: "url",
    helperText: "Must be embeddable"
}

const SourceURL: React.FunctionComponent<SourceURLProps> = ({ handleChange, shock, url }: SourceURLProps) => (
    <TextField {...configProps} onChange={handleChange} {...Shocker.shocker(shock, url)} />
);

export default SourceURL;