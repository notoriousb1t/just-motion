import { setupPage, normalize } from 'typestyle/csx';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as c from './components';

// import global styles
import './styles/global';

setupPage('#root');

ReactDOM.render(<c.Navigation></c.Navigation>, document.getElementById('root'));
