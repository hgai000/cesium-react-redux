import React from 'react';
import { Progress } from 'semantic-ui-react';

import 'semantic-ui-css/components/progress.min.css';

const Timeline = () => (
    <Progress
        color='black'
        progress
        className='bar'
        percent={100}
        active
        style={{
            opacity: 0.8,
            pointerEvents: 'auto',
            gridRow: 4,
            gridColumn: '2 / 4',
            marginBottom: 0,
            alignSelf: 'end'
        }}
    />
);

export default Timeline;
