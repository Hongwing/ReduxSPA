import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Preview from './Preview';

import './Preview.css';

export default class PreviewList extends Component {

    componentDidMount() {
        this.props.loadArticles();
    }

    render() {

        const { loading, error, articleList } = this.props;

        if (error) {
            return <p>Oops, Something Wrong !</p>
        }

        if (loading) {
            return <p>Loading......</p>
        }

        return (
            <div className="nf-list">
                {articleList && articleList.map((item, idx) => (
                    <Link to={`/detail/${idx}`} key={`${idx}-${item.id}`}>
                        <Preview {...item} />
                    </Link>
                ))}
            </div>
        );

    }
}