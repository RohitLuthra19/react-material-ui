/**
 * Base libraries
 */
import React from 'react';

class Dashboard extends React.Component {

    render() {

        const { styleFromProps } = this.props;
        const contentStyle = { ...styleFromProps, transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' };
        
        if (this.props.open) {
            contentStyle.marginLeft = 256;
        }

        return (
            <div style={contentStyle}><h1>We are located at Chandigarh</h1></div>
        );
    }
}

export default Dashboard;
