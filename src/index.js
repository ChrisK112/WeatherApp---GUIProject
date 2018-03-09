// import 'promise-polyfill';
// import 'isomorphic-fetch';
import Router from 'preact-router';
import { h, render, Component } from 'preact';

import Iphone from './components/iphone';
import Ipad from './components/ipad';
import IphoneSettings from './components/iphonesettings';

import './style';

let root;

class Main extends Component {

	constructor(props) {

		super(props);

		this.state.settings = {
			location: 'London',
			temperature_units: 'C',
			geocode: null,
			currentError: null,
			girl_model : 'rain',
			background : 'pexels-photo-1.jpg',
			text_colour : 'white'
		};

        // preload
        this.preload(
        '/assets/girl/cold.png',
        '/assets/girl/hot.png',
        '/assets/girl/mild.png',
        '/assets/girl/rain.png'
        );

	}

    preload = function() {
        let images = [];
        for (var i = 0; i < arguments.length; i++ ) {
            images[i] = new Image();
            images[i].src = arguments[i];
            console.log('preloading ' + arguments[i]);
        }
    }

	render() {
		return (
            <Router>
                <Iphone path="/" settings={ this.state.settings } />
                <Ipad path="/tablet" settings={ this.state.settings } />
                <IphoneSettings path="/iphonesettings" settings={ this.state.settings } />
            </Router>
		);
	}

}

function init() {
	//let App = require('./components/app').default;
	//root = render(<App />, document.body, root);
	root = render(<Main />, document.body, root);

}

// register ServiceWorker via OfflinePlugin, for prod only:
if (process.env.NODE_ENV==='production') {
	require('./pwa');
}

// in development, set up HMR:
if (module.hot) {
	require('preact/devtools');   // turn this on if you want to enable React DevTools!
	module.hot.accept('./components/app', () => requestAnimationFrame(init) );
}

init();
