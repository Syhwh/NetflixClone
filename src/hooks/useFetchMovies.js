import { useState, useEffect } from 'react'
import { fetchMovies } from '../helpers/fetchMovies'


export const useFetchMovies = (fetchURL) => {
	const [movies, setMovies] = useState([])
	useEffect(() => {
		fetchMovies(fetchURL)
			.then((movies) => setMovies(movies))
			.catch(err => console.warn(err))
	}, [fetchURL])
	return movies
}
