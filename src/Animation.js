import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';

import 'semantic-ui-css/components/segment.min.css';
import 'semantic-ui-css/components/icon.min.css';

const Animation = () => (
    <Segment
        circular
        inverted
        style={{
            opacity: 0.8,
            pointerEvents:'auto',
            gridRow: '4 / 5',
            gridColumn: '1 / 2',
            marginBottom: '-50%',
            marginTop: '35%',
            overflow: 'hidden'
        }}
    >
        1x
        <br />
        {new Date().toISOString().slice(0, 10)}
        <br />
        {new Date().getHours()} : {new Date().getMinutes()} : {new Date().getSeconds()}
        <br />
        <Icon name='backward' /><Icon name='pause' /><Icon name='forward' />
    </Segment>
);

export default Animation;
