import axios from 'axios'

const URI = 'https://jobfindout.online/api/v1/categories/'

export const allCategory = () => {
	return {
		type: 'ALL_CATEGORY',
		payload: axios.get(URI),
	}
}

export const getCategory = id => {
	return {
		type: 'GET_CATEGORY',
		payload: axios.get(URI + id),
	}
}

export const addCategory = data => {
	return {
		type: 'ADD_CATEGORY',
		payload: axios.post(URI, data),
	}
}

export const updateCategory = (id, data) => {
	return {
		type: 'UPDATE_CATEGORY',
		payload: axios.patch(URI + id, data),
	}
}

export const deleteCategory = id => {
	return {
		type: 'DELETE_CATEGORY',
		payload: axios.delete(URI + id),
	}
}
