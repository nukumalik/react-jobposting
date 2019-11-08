import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'

// Action
import { addCompany } from '../../redux/action/company'

const CompanyAdd = props => {
	const [name, setName] = useState('')
	const [location, setLocation] = useState('')
	const [logo, setLogo] = useState('')
	const [description, setDescription] = useState('')

	if (!localStorage.getItem('Authorization')) {
		props.history.push('/users/login')
	}

	return (
		<div className="container mt-5 mp-5">
			<div className="card shadow-sm border-0">
				<div className="card-body">
					<form
						onSubmit={e => {
							e.preventDefault()
							props.dispatch(addCompany({ name, location, logo, description }))
							setTimeout(() => {
								props.history.push('/companies')
							}, 500)
						}}
					>
						<div className="form-group">
							<label>Name</label>
							<input type="text" className="form-control" name="name" onChange={e => setName(e.target.value)} />
						</div>
						<div className="form-group">
							<label>Location</label>
							<input type="text" className="form-control" name="location" onChange={e => setLocation(e.target.value)} />
						</div>
						<div className="form-group">
							<label>Logo</label>
							<input type="text" className="form-control" name="name" onChange={e => setLogo(e.target.value)} />
						</div>
						<div className="form-group">
							<label>Description</label>
							<textarea className="form-control" name="description" onChange={e => setDescription(e.target.value)}></textarea>
						</div>
						<button type="submit" className="btn btn-primary w-100">
							Add a Company
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	company: state.company
})

export default connect(mapStateToProps)(CompanyAdd)
