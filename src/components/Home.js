import React from 'react'
import { NavBar } from './NavBar'
import './Home.css'
export const Home = () => {
	return (
		<div className="home">
			<NavBar home />
			<div className="container">
				<h1 className="cardTitle">
					Unlimited movies, TV shows, and more.
					</h1>
				<h2 className="cardSubtitle">
					Watch anywhere. Cancel anytime.
					</h2>
			</div>
			<div className="layout"></div>
		</div>

	)
}
