
const API_KEY = process.env.REACT_APP_API_KEY
export const requests = [
	{
		name: 'Trending Now',
		url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
		large: true
	},
	{
		name: 'Originals',
		url: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	},
	{
		name: 'Top rated',
		url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	},
	{
		name: 'Action Movies',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	},
	{
		name: 'Comedy Movies',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	},
	{
		name: 'Horror Movies',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	},
	{
		name: 'Romance Movies',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	},
	{
		name: 'Documentaries',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
	},

]

export const searchEndpoint= {
	search:`/search/multi?api_key=${API_KEY}&query=`
}
