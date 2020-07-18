import React from 'react';
import { useFetchMovies } from '../hooks/useFetchMovies';
import { requests } from '../helpers/requestsEndPoints';
import { truncate } from '../helpers/stringActions';

const baseUrl = 'https://image.tmdb.org/t/p/original';

export const Banner = () => {
	const { name, url } = requests[0]
	const movies = useFetchMovies(url)
	const movie = movies[Math.floor(Math.random() * movies.length)]
	const image = `"${baseUrl}${movie?.backdrop_path}"`

	if (movies.length === 0) {
		return (<h1>Loading...</h1>)
	}
	return (
		<header
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url(${image})`,
				backgroundPosition: 'center center'
			}}
			className="banner"
		>
			<div className="bannerContents">
				<h1 className="bannerTitle" >
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className="bannerButtons">
					<button className="bannerButton" >Play</button>
					<button className="bannerButton" >My list</button>
				</div>
				<h1 className="bannerDescription">{truncate(movie?.overview, 350)}</h1>
			</div>
			<div className="bannerFadeBottom"></div>
		</header>
	)
}
