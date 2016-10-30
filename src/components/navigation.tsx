import * as React from 'react';
import { colors } from '../styles';
import { style } from 'typestyle';
import { just } from 'just-animate';

const className = style({
    backgroundColor: colors.primaryBg,
    color: colors.primaryColor
});

export class Navigation extends React.Component<{}, {}> {
    public onClick(): void {
        just.animate({
            mixins: 'bounceIn',                        
            targets: 'h1',     
            to: '2s'
        });
    }
    public render() {
        return (<div className={className}>
            <h1 onClick={this.onClick}>Test</h1>
        </div>);
    }
}
