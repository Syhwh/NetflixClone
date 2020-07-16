import { useEffect, useState } from "react"

export const useScrollListener = () => {
	const [state, setState] = useState(false)
	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 100 ? setState(true) : setState(false)
		})
		return () => {
			window.removeEventListener('scroll')
		}
	}, [])
return state
}