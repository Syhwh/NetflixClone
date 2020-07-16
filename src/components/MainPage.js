import React from 'react';
import { MoviesRows } from './MoviesRows';
import { requests } from '../helpers/requestsEndPoints';

export const MainPage = () => {

	return (
		<div>
			<MoviesRows title={'Trending Now'} fetchURL={requests.fetchTrending} isLarge />
			 <MoviesRows title={'Originals'} fetchURL={requests.fetchNetflixOriginals} />
			{/*<MoviesRows title={'Top rated'} fetchURL={requests.fetchTopRated} />
			<MoviesRows title={'Action Movies '} fetchURL={requests.fetchActionMovies} />
			<MoviesRows title={'Comedy Movies'} fetchURL={requests.fetchComedyMovies} />
			<MoviesRows title={'Horror Movies'} fetchURL={requests.fetchHorrorMovies} />
			<MoviesRows title={'Romance Movies'} fetchURL={requests.fetchRomanceMovies} />
			<MoviesRows title={'Documentaries'} fetchURL={requests.fetchDocumentaries} /> */}
		</div>
	);
}


