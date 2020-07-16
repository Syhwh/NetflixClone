import React from 'react'
import PropTypes from 'prop-types'
import { useFetchMovies } from '../hooks/useFetchMovies'


const base_url = 'https://image.tmdb.org/t/p/original'

export const MoviesRows = ({ title, fetchURL, isLarge }) => {
	const movies = useFetchMovies(fetchURL)
	return (
		<div className='rowContainer'>
			<h2>{title}</h2>
			<div className='postersContainer' >
				{
					movies.map(({ id, poster_path, name, backdrop_path }) => (
						<img
							key={id}
							className={`rowPoster ${isLarge && 'largePoster'}`}
							src={`${base_url}${isLarge ? poster_path : backdrop_path}`}
							alt={name}
						/>
					))
				}
			</div>
		</div>
	)
}

MoviesRows.propTypes = {
	title: PropTypes.string,
	fetchURL: PropTypes.string,
	isLarge: PropTypes.bool
}

