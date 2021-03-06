import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Viewer from "cesium/Source/Widgets/Viewer/Viewer";

import { Grid } from 'semantic-ui-react';
import FullscreenButton from './FullscreenButton';
import Timeline from './Timeline';
import Animation from './Animation';
import Transmitter from './Transmitter';

const containerStyle = {
    display: 'grid',
    width: '100vw',
    height: '100vh'
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

        this.forceUpdate();
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
                        gridTemplateRows: '1fr 1fr 1fr 1fr',
                        gridTemplateColumns: '1fr 1fr 1fr 1fr',
                        top: 0,
                        minHeight: '100%',
                        minWidth: '100%',
                        maxHeight: '100%',
                        maxWidth: '100%',
                        position: 'absolute',
                        pointerEvents: 'none',
                        zIndex: 10
                    }}
                >
                    <Grid style={{
                        display: 'grid',
                        gridRow: '2 / 4',
                        gridColumn: 1,
                        gridTemplateRows: '1fr 1fr 1fr 1fr'
                    }}>
                        <Transmitter/>
                    </Grid>
                    <Grid style={{
                        display: 'grid',
                        gridRow: 4,
                        gridColumn: '1 / 5',
                        gridTemplateColumns: 'minmax(175px, 175px) 1fr minmax(min-content,min-content)',
                        gridTemplateAreas: `
                            'animation timeline fullscreen-button'
                        `
                    }}>
                        <Animation />
                        <Timeline />
                        <FullscreenButton cesiumContainer={this.cesiumContainer}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default hot(module)(App);
