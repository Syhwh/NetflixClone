import axios from 'axios'

export const requestUrl = axios.create({
	baseURL: 'https://api.themoviedb.org/3'
})

