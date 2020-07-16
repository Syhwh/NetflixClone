import React, { useState } from 'react';
import { requestUrl } from '../helpers/axios';
import { requests } from '../helpers/requestsEndPoints';

export const SearchBar = () => {

	const [search, setSearch] = useState('')

	const handleOnchage = (e) => {
		setSearch(e.target.value)
	}

	const handleOnsubmit = (e) => {
		e.preventDefault()

		const fetchSearch = async () => {
			const { data } = await requestUrl.get(`${requests.search}${search}`)
			return (data.results)
		}
	fetchSearch()
	setSearch('')
}

return (
	<div className="searchInput">
		<form onSubmit={handleOnsubmit}>
			<input
				placeholder="Search..."
				value={search}
				onChange={handleOnchage}
			/>
		</form>
	</div>
)
}
