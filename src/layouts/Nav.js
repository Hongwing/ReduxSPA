import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './layout.css';

export default class Nav extends Component {
    render() {
        return (
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                {/* <li>
                    <Link to="/detail">
                        Detail
                    </Link>
                </li> */}
            </ul>
        )
    }
}