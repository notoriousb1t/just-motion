import * as React from 'react';
import { style } from 'typestyle';

const navigationClass = style({ 
    height: 50,
    left: 0,    
    position: 'fixed',    
    right: 0,
    top: 0
});

const navigationListClass = style({
    padding: 0
});

const navigationItemClass = style({
    display: 'inline-block',
    padding: '.25rem 1.2rem',
    '&:first-child': {
        paddingLeft: '1.5rem'
    }
});

const navigationItems = [
    {
        key: 0,
        displayText: 'Home'
    },
    {
        key: 1,
        displayText: 'Open'
    }
];

export class NavigationComponent extends React.Component<{}, {}> {

    public render() {
        return (<div className={navigationClass}>
            <ul className={navigationListClass}>
                {navigationItems.map((item) => 
                    <li key={item.key} className={navigationItemClass}>
                        {item.displayText}
                    </li>
                )}
            </ul>
        </div>);
    }
}
