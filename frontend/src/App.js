import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './hocs/Layout';
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';

import store from './store';

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/activate/:uid/:token' component={Activate} />
            </Layout>
        </Router>
    </Provider>
);

export default App;