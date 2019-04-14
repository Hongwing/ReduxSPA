import ReactDOM from 'react-dom';
import React from 'react';
import routes from './router';

import configureStore from './redux/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
        {routes}
    </Provider>
), document.getElementById('root'));
