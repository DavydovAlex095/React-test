import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';
import store from './store/store'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

console.log('store is: ',store.getState());

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'));
