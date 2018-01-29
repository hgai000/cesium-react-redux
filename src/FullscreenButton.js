import React from 'react';
import store from './store';
import Fullscreen from 'cesium/Source/Core/Fullscreen';

import { Button, Ref } from 'semantic-ui-react';
import 'semantic-ui-css/components/button.min.css';
import 'semantic-ui-css/components/icon.min.css';

const FullscreenButton = (props) => {
    const handleClick = () => {
        Fullscreen.requestFullscreen(props.cesiumContainer);
        store.dispatch({
            type: 'CLICK'
        })
    };

    const handleRef = node => {
        console.log(node);
        //node.children[0].style.
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'end',
            gridArea: 'fullscreen-button'
        }}>
            <Ref innerRef={handleRef}>
                <Button
                    onClick={handleClick}
                    color='black'
                    icon='maximize'
                    style={{
                        opacity: 0.8,
                        pointerEvents: 'auto',
                        margin: 0,
                        padding: 5
                    }}
                />
            </Ref>
        </div>
    )
};

export default FullscreenButton;
