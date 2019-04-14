import { combineReducers } from 'redux';

import list from '../components/Home/PreviewListRedux';

import * as listAction from '../components/Home/PreviewListRedux';

export {
    listAction,
};


export default combineReducers({
    list,
})
