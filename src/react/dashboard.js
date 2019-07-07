import React, { Component } from "react"

export default class Dashboard extends Component {
	constructor (props) {
		super (props)
		this.state = {
			text: 'Dashboard: react app'
		}
	}

	render () {
		return (
				<h1 style={ style.wrapper }>{ this.state.text }</h1>
		)
	}
}

const style = {
	wrapper: {
		backgroundColor: 'lightgreen',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		paddingTop: '140px'
	}
}
