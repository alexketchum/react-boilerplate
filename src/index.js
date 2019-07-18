import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './components/App/App';

import 'normalize.css';
import './index.css';

WebFont.load({
    google: {
        families: ['Open Sans:300,400,700']
    }
});

ReactDOM.render(
    <App />,
    document.querySelector('.app')
);
