import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Home from './dashboard.js';

function domElementGetter() {
	return document.getElementById("userDashboard")
}

const reactLifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: Home,
	domElementGetter,
})

export const bootstrap = [
	reactLifecycles.bootstrap,
]

export const mount = [
	reactLifecycles.mount,
]

export const unmount = [
	reactLifecycles.unmount,
]
