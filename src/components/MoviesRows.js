import React from 'react'
import PropTypes from 'prop-types'
import { useFetchMovies } from '../hooks/useFetchMovies'

const base_url = 'https://image.tmdb.org/t/p/original'

export const MoviesRows = ({ title, fetchURL }) => {
	const movies = useFetchMovies(fetchURL)
	console.log(movies)
	return (
		<div>
			<h2>{title}</h2>
			<div>
				{movies.map(({ id, poster_path, title, name }) => (
					<li key={id}>
						<h2>{title}</h2>
						<img src={`${base_url}${poster_path}`} alt={name} />
					</li>
				))
				}
			</div>
		</div>
	)
}

MoviesRows.propTypes = {

}

