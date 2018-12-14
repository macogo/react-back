import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from '@/store/store.js'
import registerServiceWorker from './registerServiceWorker';

import "antd/dist/antd.css";
import './theme/index.scss';

// routes
const routes = [
    ...require('@/pages/home/router').default,
    ...require('@/pages/list/router').default
]

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <BrowserRouter>
                    {renderRoutes(routes)}
                </BrowserRouter>
            </AppContainer>
        </Provider>,
        document.getElementById('root'),
    )
}
render();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
registerServiceWorker();
