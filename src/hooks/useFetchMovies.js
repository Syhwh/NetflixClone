import { useState, useEffect } from 'react'
import { requestUrl } from '../helpers/axios'

export const useFetchMovies = (fetchURL) => {
	const [movies, setMovies] = useState([])

	useEffect(() => {
		async function fetchMovies() {
			const { data } = await requestUrl.get(fetchURL)
			setMovies(data.results)
		}
		fetchMovies()

	}, [fetchURL])
	return movies
}
