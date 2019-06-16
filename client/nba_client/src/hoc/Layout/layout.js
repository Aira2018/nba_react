import React, { Component } from 'react';
import './layout.css';

class layout extends Component {
    render() {
        return (
            <div>
                <h2>Header</h2>
                {this.props.children}
                <h3>footer</h3>
            </div>
        );
    }
}

export default layout;