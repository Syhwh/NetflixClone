import axios from 'axios'

export const requestUrl = axios.create({
	baseURL: 'https://api.themoviedb.org/3'
})

// export const getGif = async (category) => {
// 	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=hDxC9YcnUkUYGCKUyEfwEsK07idmOjQf`
// 	const resp = await fetch(url)
// 	const { data } = await resp.json()
// 	const gifs = data.map((image) => {
// 		return {
// 			id: image.id,
// 			title: image.title,
// 			url: image.images.downsized_medium.url
// 		}
// 	})
// 	return gifs
// }