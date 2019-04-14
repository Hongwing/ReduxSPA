import React, { Component } from 'react';
import Preview from '../components/Home/Preview';
import { connect } from 'react-redux';

class Detail extends Component {
    render() {
        console.info(this.props)
        const { id } = this.props.match.params

        return (
            <div>
                <h2 className="page-title">
                    Detail
                </h2>
                <Preview {...this.props.list[id]} />
            </div>
        );
    }
}

export default connect(
    (state) => ({
        list: state.home.list.articleList,
    })
)(Detail);