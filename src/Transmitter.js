import React, { Component } from 'react';
import { Button, Popup, Input, Segment, Ref } from 'semantic-ui-react';
import store from './store';

import 'semantic-ui-css/components/button.min.css';
import 'semantic-ui-css/components/popup.min.css';
import 'semantic-ui-css/components/input.min.css';
import 'semantic-ui-css/components/icon.min.css';
import 'semantic-ui-css/components/segment.min.css';

class Transmitter extends Component {
    handleSubmit = (event) => {
        if (event.key === 'Enter') {
            store.dispatch({
                type: 'ADD_MESSAGE',
                text: event.target.value
            });

            event.target.value = '';

            this.forceUpdate();

            setTimeout(() => {
                store.dispatch({
                    type: 'ADD_MESSAGE'
                });
                this.forceUpdate()
            }, 3000)
        }
    };

    handleRef = node => {
        node.children[0].style.background = 'black';
        node.children[0].style.color = 'chartreuse';
        node.children[0].style.width = '100%';
    };

    render() {
        const messages = store.getState().messages;

        return (
            <Popup
                trigger={
                    <Button
                        inverted
                        icon='rss'
                        content='COMMNET'
                        style={{
                            pointerEvents: 'auto',
                            opacity: 0.8,
                            gridRow: 4,
                            color: 'chartreuse'
                        }}
                    />
                }
                content={
                    <Segment inverted>
                        <Segment inverted>
                            {messages.map((msg, i) => {
                                if (i % 2 !== 0) {
                                    return (
                                        <Segment key={'f' + i} inverted style={{color: 'chartreuse'}}>{'.....' + msg.id + '.....'}</Segment>
                                    )
                                }

                                return (
                                    <Segment key={i} inverted style={{color: 'chartreuse'}}>{msg.text}</Segment>
                                )
                            })}
                        </Segment>
                        <Ref innerRef={this.handleRef}>
                            <Input
                                type='text'
                                inverted
                                placeholder='ENTER MESSAGE'
                                style={{
                                    opacity: 0.8,
                                    color: 'chartreuse',
                                    width: '100%'
                                }}
                                onKeyPress={this.handleSubmit}
                            />
                        </Ref>
                    </Segment>
                }
                on='click'
                inverted
                style={{
                    pointerEvents: 'auto',
                    opacity: 0.8
                }}
            />
        )
    }
}

export default Transmitter;
