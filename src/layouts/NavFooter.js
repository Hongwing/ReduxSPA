import React, { Component } from 'react';
import './layout.css';

import Nav from './Nav';

export default class NavFooter extends Component {
    render() {
        return (
            <div className="nf-layout">
                <div className="nf-nav">
                    <Nav />
                </div>
                <div className="nf-main">
                    {this.props.children}
                </div>
            </div>
        )
    }
}