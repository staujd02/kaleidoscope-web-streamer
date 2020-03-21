import React from 'react';
import TextField from '@material-ui/core/TextField';
import Shocker from '../../../Workarounds/Shocker';

const configProps = {
    name: 'title',
    label: "Source Name",
    type: "text"
}

const SourceTitle: React.FunctionComponent<SourceTitleProps> = ({ handleChange, shock, title }: SourceTitleProps) => (
    <TextField {...configProps} onChange={handleChange} {...Shocker.shocker(shock, title)} />
);

export default SourceTitle;

