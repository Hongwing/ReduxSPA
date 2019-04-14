import React from 'react';
import { IndexRoute } from 'react-router';
import { Route, HashRouter } from 'react-router-dom';


import Home from '../views/Home';
import Detail from '../views/Detail';
import NavFooter from '../layouts/NavFooter';

const routes = (
    <HashRouter>

        {/* <Route path="/" component={NavFooter}>
            <IndexRoute component={Home} />
            <Route path="/detail" component={Detail} />
        </Route> */}

        <NavFooter>
            <Route exact path="/" component={Home} />
            <Route path="/detail/:id" component={Detail} />
        </NavFooter>

    </HashRouter>
)

export default routes;