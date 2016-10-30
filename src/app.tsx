import { setupPage, normalize } from 'typestyle/csx';
import { initGlobalStyles } from './styles';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as c from './components';

normalize();
initGlobalStyles();
setupPage('#root');

ReactDOM.render(<c.Navigation></c.Navigation>, document.getElementById('root'));