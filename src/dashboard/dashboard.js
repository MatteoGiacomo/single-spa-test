import React, { Component } from "react"
import { navigateToUrl } from 'single-spa'

export default class Dashboard extends Component {
	constructor (props) {
		super (props)
		this.state = {
			text: 'Dashboard: dashboard app'
		}

		this.redirect = this.redirect.bind(this)
	}

	redirect () {
		navigateToUrl('/')
	}

	render () {
		return (
			<div id='dashboard'>
				<div style={ style.wrapper }>
					<h1 >
						{ this.state.text }
					</h1>
					<span
						style={ style.button }
						onClick={this.redirect}
					>
						home
					</span>
				</div>
			</div>
		)
	}
}

const style = {
	wrapper: {
		backgroundColor: 'lightgreen',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingTop: '140px'
	},
	button: {
		textAlign: 'center',
		backgroundColor: 'antiquewhite',
		borderRadius: '8px',
		padding: '15px 25px',
		marginTop: '20px',
		textTransform: 'uppercase',
		width: '100%',
		maxWidth: '200px',
		cursor: 'pointer'
}
}
