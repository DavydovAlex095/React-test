import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';
import store from './store/store'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'));
