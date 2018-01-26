import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Viewer from "cesium/Source/Widgets/Viewer/Viewer";

const containerStyle = {
    display: 'grid',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden'
};

class App extends Component {
    componentDidMount() {
        this.viewer = new Viewer(this.cesiumContainer);
    }

    render() {
        return (
            <div
                id="cesiumContainer"
                ref={ el => this.cesiumContainer = el }
                style={containerStyle}
            />
        );
    }
}

export default hot(module)(App);
