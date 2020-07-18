import React, { useContext } from 'react';
import { Banner } from '../components/Banner';
import { NavBar } from '../components/NavBar';
import { SearchUrlContext } from '../helpers/searchUrlContext'
import { MoviesRows } from './MoviesRows';

export const SearchResults = () => {

	const { setUrl, url } = useContext(SearchUrlContext)
	console.log(url)
	return (
		<div className="main">
			<NavBar />
			<Banner />
			<div className="results">
			<MoviesRows title={'Results'} fetchURL={url} isLarge />
			</div>
		</div>
	)
}
