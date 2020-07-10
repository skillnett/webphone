import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';
import './styles/index.scss';
import 'simplebar/dist/simplebar.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store/configureStore';
import * as serviceWorker from './serviceWorker';

const initialState = window.initialReduxState;
const store = configureStore(history, initialState);

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    rootElement
);

serviceWorker.unregister();