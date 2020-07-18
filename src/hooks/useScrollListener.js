import { useEffect, useState } from "react"

export const useScrollListener = () => {
	const [state, setState] = useState(false)
	const scrollListener = () => {

		window.scrollY > 100 ? setState(true) : setState(false)
	}

	useEffect(() => {
		window.addEventListener('scroll', scrollListener )
		return () => {
			window.removeEventListener('scroll',scrollListener)
		}
	}, [])
	return state
}