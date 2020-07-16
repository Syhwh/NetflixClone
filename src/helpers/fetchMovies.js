import { requestUrl } from '../helpers/axios'

export const fetchMovies = async (fetchURL) => {
	const { data } = await requestUrl.get(fetchURL)
	return (data.results)
}