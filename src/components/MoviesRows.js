import React, { useState } from 'react'
import PropTypes from 'prop-types'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'
import { useFetchMovies } from '../hooks/useFetchMovies'


const base_url = 'https://image.tmdb.org/t/p/original'
const opts = {
	height: '390',
	width: '100%',
	playerVars: {
		controls: 0,
		rel: 0,
		showinfo: 0,
		autoplay: 1,
	},
};




export const MoviesRows = ({ title, fetchURL, isLarge }) => {
	const [trailerUrl, setTrailerUrl] = useState('')
	const movies = useFetchMovies(fetchURL)

	const handleClick = (name) => {
		if (trailerUrl) {
			setTrailerUrl('')
		} else {
			movieTrailer(name || '')
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search)
					setTrailerUrl(urlParams.get('v'))
				})
				.catch(err => console.warn(err))
		}
	}

	return (
		<div className='rowContainer'>
			<h2>{title}</h2>
			<div className='postersContainer' >
				{
					movies.map(({ id, poster_path, name, original_name, title, backdrop_path }) => (
						<img
							onClick={() => handleClick(name || original_name || title)}
							key={id}
							className={`rowPoster ${isLarge && 'largePoster'}`}
							src={`${base_url}${isLarge ? poster_path : backdrop_path}`}
							alt={name}
						/>
					))
				}
			</div>
			{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
		</div>
	)
}

MoviesRows.propTypes = {
	title: PropTypes.string,
	fetchURL: PropTypes.string,
	isLarge: PropTypes.bool
}

