import React, { Component } from 'react';

import './Preview.css';

export default class Preview extends Component {
    render() {
        return (
            <article className="nf-article">
                <h1 className="title">{this.props.title}</h1>
                <p className="desc">{this.props.description}</p>
                <span className="date">{this.props.date}</span>
            </article>
        )
    }
}