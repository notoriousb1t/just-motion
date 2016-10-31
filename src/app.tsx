import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as GoldenLayout from 'golden-layout';

import * as $ from 'jquery';

const global = window as any;
global.$ = $
global.React = React;
global.ReactDOM = ReactDOM;

import * as c from './components';
import { convertPascalToHyphenated, minimize, unsuffix } from './utils';

// import global styles
import './styles/global';
import './styles/golden-layout-base-theme';
import './styles/golden-layout-dark-theme';

// configure golden layout
const layoutConfig = {
  content: [
    {
      type: 'row',
      content: [
        {
          type: 'react-component',
          component: 'source-editor',
          props: { label: 'A' }
        },
        {
          type: 'column',
          content: [
            {
              type: 'react-component',
              component: 'source-editor',
              props: { label: 'B' }
            },
            {
              type: 'react-component',
              component: 'source-editor',
              props: { label: 'C' }
            }
          ]
        }
      ]
    }
  ]
};

const $container = document.getElementById('contents');
const myLayout = new GoldenLayout(layoutConfig, $container);
for (const componentName in c) {
  const matches = /^(.+)Component$/.exec(componentName);
  if (matches) {
    const goldenName = convertPascalToHyphenated(minimize(unsuffix(componentName, 'Component')));
    console.log(goldenName);
    myLayout.registerComponent(goldenName, c[componentName]);
  }
}

// initialize golden layout
setTimeout(() => myLayout.init());

// resize on window change
$(window).resize(() => myLayout.updateSize());

// render navigation components
const $navigation = document.getElementById('navigation');
ReactDOM.render(<c.NavigationComponent></c.NavigationComponent>, $navigation);
