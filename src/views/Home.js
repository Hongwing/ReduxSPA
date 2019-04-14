import React, { Component } from 'react';
import { connect } from 'react-redux';
import PreviewList from '../components/Home/PreviewList';
import { bindActionCreators } from 'redux';

import { listAction } from './HomeRedux';

import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <h2 className="page-title">Home</h2>

                <PreviewList {...this.props.list} {...this.props.listAction} />
            </div>
        );
    }
}

export default connect(
    (state) => ({
        list: state.home.list,
    }),
    (dispatch) => ({
        listAction: bindActionCreators(listAction, dispatch)
    })
)(Home);