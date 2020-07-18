export const stateReducer = (state = [], action) => {
	console.log(action)
	switch (action.type) {
		case 'url':
			return [action.payload]
		default:
			return state
	}
}