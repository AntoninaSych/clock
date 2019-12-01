import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

ReactDOM.render(<App />, document.getElementById('clock'));
var ghpages = require('gh-pages');

ghpages.publish('dist', function(err) {});

