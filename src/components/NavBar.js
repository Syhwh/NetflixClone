import React from 'react'
import netflixLogo from '../assets/Netflix_Logo.png'
import avatar from '../assets/netflixAvatar.png'
import { useScrollListener } from '../hooks/useScrollListener'

export const NavBar = () => {
	const show = useScrollListener()
	return (
		<div className={`nav ${show && 'navBlack'}`}>
			<img className="logo" src={netflixLogo} alt="netflixLogo" />
			<img className="avatar" src={avatar} alt="avatar" />
		</div>
	)
}
