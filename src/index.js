import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'cesium/Source/Widgets/widgets.css';

import buildModuleUrl from 'cesium/Source/Core/buildModuleUrl';
buildModuleUrl.setBaseUrl('./cesium/');

render(<App />, document.getElementById('root'));
registerServiceWorker();
