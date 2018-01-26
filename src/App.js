import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Viewer from "cesium/Source/Widgets/Viewer/Viewer";

import { Grid } from 'semantic-ui-react';
import FullscreenButton from './FullscreenButton';
import Timeline from './Timeline';
import Animation from './Animation';

const containerStyle = {
    display: 'grid',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden'
};

class App extends Component {
    componentDidMount() {
        this.viewer = new Viewer(this.cesiumContainer, {
            animation : false,
            baseLayerPicker : false,
            fullscreenButton : false,
            geocoder : false,
            homeButton : false,
            infoBox : false,
            sceneModePicker : false,
            selectionIndicator : false,
            timeline : false,
            navigationHelpButton : false,
            scene3DOnly : true,
        });
    }

    render() {
        window.viewer = this.viewer;

        return (
            <div
                id="cesiumContainer"
                ref={ el => this.cesiumContainer = el }
                style={containerStyle}
            >
                <Grid
                    style={{
                        display: 'grid',
                        gridTemplateRows: '1fr 1fr 1fr minmax(175px, 175px)',
                        gridTemplateColumns: 'minmax(175px, 175px) 1fr 1fr minmax(min-content,min-content)',
                        top: 0,
                        minHeight: '100%',
                        minWidth: '100%',
                        maxHeight: '100%',
                        maxWidth: '100%',
                        position: 'absolute',
                        pointerEvents: 'none',
                        zIndex: 10,
                        overflow: 'hidden'
                    }}
                >
                    <Animation />
                    <Timeline />
                    <FullscreenButton />
                </Grid>
            </div>
        );
    }
}

export default hot(module)(App);
