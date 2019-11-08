import axios from 'axios'

const URI = 'http://localhost:5000/api/v1/users/'

export const allUser = () => {
	return {
		type: 'ALL_USER',
		payload: axios.get(URI)
	}
}

export const loginUser = data => {
	return {
		type: 'LOGIN_USER',
		payload: axios.post(URI + 'login', data)
	}
}

export const registerUser = data => {
	return {
		type: 'REGISTER_USER',
		payload: axios.post(URI + 'register', data)
	}
}

export const updateUser = (id, data) => {
	return {
		type: 'UPDATE_USER',
		payload: axios.patch(URI + id, data)
	}
}

export const deleteUser = id => {
	return {
		type: 'DELETE_USER',
		payload: axios.delete(URI + id)
	}
}
