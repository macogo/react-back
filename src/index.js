import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/';
import './theme/index.scss';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from '@/store/store.js'
import registerServiceWorker from './registerServiceWorker';
import "antd/dist/antd.css";

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>,
        document.getElementById('root'),
    )
}
render(Route);

//webpack hot moudle replacement api
if (module.hot) {
    module.hot.accept('./router/', () => {
        render(Route);
    })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
registerServiceWorker();
