import axios from 'axios'

const URI = 'http://3.86.104.243:8001/api/v1/jobs/'

export const allJob = (name, companies, orderby, page) => {
	return {
		type: 'ALL_JOB',
		payload:
			name || companies || orderby || page
				? axios.get(
						URI +
							`?name=${name}&company=${companies}&orderby=${orderby}&page=${page}`,
				  )
				: axios.get(URI),
	}
}

export const getJob = id => {
	return {
		type: 'GET_JOB',
		id,
		payload: axios.get(URI + id),
	}
}

export const addJob = data => {
	return {
		type: 'ADD_JOB',
		payload: axios.post(URI, data),
	}
}

export const updateJob = (id, data) => {
	return {
		type: 'UPDATE_JOB',
		id,
		payload: axios.patch(URI + id, data),
	}
}

export const deleteJob = id => {
	return {
		type: 'DELETE_JOB',
		id,
		payload: axios.delete(URI + id),
	}
}
