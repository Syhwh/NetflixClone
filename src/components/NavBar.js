import React from 'react'

import avatar from '../assets/netflixAvatar.png'
import { useScrollListener } from '../hooks/useScrollListener'
import { SearchBar } from './SearchBar'
import { Logo } from './Logo'
import './navBar.css'

export const NavBar = ({ home }) => {
	const show = useScrollListener()
	return (

		<div className={`nav ${show && 'navBlack'}`}>
			<Logo/>
			<div className="secondaryNavigation">
				{
					home ? <a href="/main" className="loginButton">LOGIN</a> : <>
						<SearchBar />
						<img className="avatar" src={avatar} alt="avatar" />
					</>
				}
			</div>
		</div>
	)
}
