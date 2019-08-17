import React from 'react';

class Curtain extends React.Component<CurtainProps, CurtainState> {
    render(){
        const { open } = this.props;
        return open ? this.props.children : null;
    }
}

export default Curtain;