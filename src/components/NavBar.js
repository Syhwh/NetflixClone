import React from 'react'
import netflixLogo from '../assets/Netflix_Logo.png'
import avatar from '../assets/netflixAvatar.png'
import { useScrollListener } from '../hooks/useScrollListener'
import { SearchBar } from './SearchBar'

export const NavBar = ({handleOnchage, handleOnsubmit, search}) => {
	const show = useScrollListener()
	return (
		<div className={`nav ${show && 'navBlack'}`}>
			<img className="logo" src={netflixLogo} alt="netflixLogo" />
			<div className="secondaryNavigation">
				<SearchBar/>
				<img className="avatar" src={avatar} alt="avatar" />
			</div>
		</div>
	)
}
