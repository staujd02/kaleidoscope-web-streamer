import React from 'react';
import Input from '@material-ui/core/Input';

const configProps = {
    id: "duration",
    name: "duration",
    type: "number" 
}

const SourceDuration: React.FunctionComponent<SourceDurationProps> = ({ duration, handleChange }) => (
    <Input {...configProps} onChange={handleChange} endAdornment={'Seconds'} value={duration} />
)

export default SourceDuration;