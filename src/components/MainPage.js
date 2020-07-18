import React, { useReducer } from 'react';
import { MoviesRows } from './MoviesRows';
import { requests } from '../helpers/requestsEndPoints';
import { Banner } from '../components/Banner';
import { NavBar } from '../components/NavBar';
import { stateReducer } from '../reducers/stateReducer';

export const MainPage = () => {
	return (
		<div className="main">
			<NavBar />
			<Banner />
			<div>
				{requests.map(({ name, url, large }) => <MoviesRows title={name} fetchURL={url} isLarge={large} />)}
			</div>
		</div>
	);
}
