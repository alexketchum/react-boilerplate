import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './components/App/App';

import './styles/reset.css';
import './styles/index.css';

WebFont.load({
    google: {
        families: ['Open Sans:300,400,700']
    }
});

ReactDOM.render(
    <App />,
    document.querySelector('.app')
);
