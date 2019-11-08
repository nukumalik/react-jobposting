const initState = {
	isLoading: false,
	isError: false,
	token: '',
	data: []
}

const user = (state = initState, action) => {
	switch (action.type) {
		case 'ALL_USER_PENDING':
			return {
				isLoading: true
			}
		case 'ALL_USER_PENDING':
			return {
				isLoading: false,
				isError: true
			}
		case 'ALL_USER_FULFILLED':
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload.data.data
			}
		case 'LOGIN_USER_PENDING':
			return {
				isLoading: true
			}
		case 'LOGIN_USER_PENDING':
			return {
				isLoading: false,
				isError: true
			}
		case 'LOGIN_USER_FULFILLED':
			return {
				...state,
				isLoading: false,
				isError: false,
				token: action.payload.data.token
			}
		case 'REGISTER_USER_PENDING':
			return {
				isLoading: true
			}
		case 'REGISTER_USER_PENDING':
			return {
				isLoading: false,
				isError: true
			}
		case 'REGISTER_USER_FULFILLED':
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload.data.data
			}
		case 'UPDATE_USER_PENDING':
			return {
				isLoading: true
			}
		case 'UPDATE_USER_PENDING':
			return {
				isLoading: false,
				isError: true
			}
		case 'UPDATE_USER_FULFILLED':
			return {
				...state,
				isLoading: false,
				isError: false,
				data: state.data.filter(i => (i.id === action.payload.data.data[0].id ? action.payload.data.data : i))
			}
		case 'DELETE_USER_PENDING':
			return {
				isLoading: true
			}
		case 'DELETE_USER_PENDING':
			return {
				isLoading: false,
				isError: true
			}
		case 'DELETE_USER_FULFILLED':
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

export default user
