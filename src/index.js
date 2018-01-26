import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'cesium/Source/Widgets/widgets.css';
import 'semantic-ui-css/components/site.min.css';
import 'semantic-ui-css/components/reset.min.css';

import buildModuleUrl from 'cesium/Source/Core/buildModuleUrl';
buildModuleUrl.setBaseUrl('./cesium/');

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
