import React from 'react';
import store from './store';
import Fullscreen from 'cesium/Source/Core/Fullscreen';

import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/components/button.min.css';
import 'semantic-ui-css/components/icon.min.css';

const FullscreenButton = () => {
    const handleClick = () => {
        Fullscreen.requestFullscreen();
        store.dispatch({
            type: 'CLICK'
        })
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            gridRow: 4,
            gridColumn: 4,
        }}>
            <Button
                onClick={handleClick}
                color='black'
                icon='maximize'
                style={{
                    opacity: 0.8,
                    pointerEvents: 'auto',
                    height: '1.75rem',
                    width: '1rem'
                }}
            />
        </div>
    )
};

export default FullscreenButton;
