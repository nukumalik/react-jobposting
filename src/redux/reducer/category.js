const initState = {
	isLoading: false,
	isError: false,
	data: []
}

const category = (state = initState, action) => {
	switch (action.type) {
		case 'ALL_CATEGORY_PENDING':
			return {
				...state,
				isLoading: true
			}
		case 'ALL_CATEGORY_REJECTED':
			return {
				...state,
				isLoading: false,
				isError: true
			}
		case 'ALL_CATEGORY_FULFILLED':
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload.data.data
			}
		case 'GET_CATEGORY_PENDING':
			return {
				...state,
				isLoading: true
			}
		case 'GET_CATEGORY_REJECTED':
			return {
				...state,
				isLoading: false,
				isError: true
			}
		case 'GET_CATEGORY_FULFILLED':
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload.data.data
			}
		case 'ADD_CATEGORY_PENDING':
			return {
				...state,
				isLoading: true
			}
		case 'ADD_CATEGORY_REJECTED':
			return {
				...state,
				isLoading: false,
				isError: true
			}
		case 'ADD_CATEGORY_FULFILLED':
			return {
				...state,
				isLoading: false,
				isError: false,
				data: [...state.data, action.payload.data.data]
			}
		case 'UPDATE_CATEGORY_PENDING':
			return {
				...state,
				isLoading: true
			}
		case 'UPDATE_CATEGORY_REJECTED':
			return {
				...state,
				isLoading: false,
				isError: true
			}
		case 'UPDATE_CATEGORY_FULFILLED':
			return {
				...state,
				isLoading: false,
				isError: false,
				data: state.data.filter(i => (i.id === action.payload.data.data[0].id ? action.payload.data.data : i))
			}
		case 'DELETE_CATEGORY_PENDING':
			return {
				...state,
				isLoading: true
			}
		case 'DELETE_CATEGORY_REJECTED':
			return {
				...state,
				isLoading: false,
				isError: true
			}
		case 'DELETE_CATEGORY_FULFILLED':
			return {
				...state,
				isLoading: false,
				isError: false,
				data: state.data.map(i => i.id !== action.payload.data.data[0].id)
			}
		default:
			return state
	}
}

export default category
