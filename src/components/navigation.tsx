import * as React from 'react';
import { style } from 'typestyle';

const navigationClass = style({ 
    height: 50,
    left: 0,    
    position: 'fixed',    
    right: 0,
    top: 0
});

const navigationItemClass = style({
    display: 'inline-block',
    padding: '0.75rem 0.5rem'
});

const navigationItems = [
    {
        displayText: 'Home'
    },
    {
        displayText: 'Playground'
    }
];

export class Navigation extends React.Component<{}, {}> {

    public render() {
        return (<div className={navigationClass}>
            <ul>
                {navigationItems.map((item) => 
                    <li className={navigationItemClass}>
                        {item.displayText}
                    </li>
                )}
            </ul>
        </div>);
    }
}
