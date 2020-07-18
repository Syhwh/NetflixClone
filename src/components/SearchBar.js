import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { SearchUrlContext } from '../helpers/searchUrlContext';
import { searchEndpoint } from '../helpers/requestsEndPoints';

export const SearchBar = () => {
	const history = useHistory()
	const [search, setSearch] = useState('')
	const {setUrl} = useContext(SearchUrlContext)

	const handleOnchage = (e) => {
		setSearch(e.target.value)
	}

	const handleOnsubmit = (e) => {
		e.preventDefault()
		setUrl(`${searchEndpoint.search}${search}`)
		setSearch('')
		history.push('/results')
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
