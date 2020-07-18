import React, { createContext, useState } from "react";


export const SearchUrlContext = createContext(null);

export const URLProvider = ({ children }) => {

	const [url, setUrl] = useState('');
	const urlContext = { setUrl, url }

	return <SearchUrlContext.Provider value={urlContext}>{children}</SearchUrlContext.Provider>;
}


