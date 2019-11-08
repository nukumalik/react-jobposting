import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'

// Action
import { getCompany, updateCompany } from '../../redux/action/company'

const CompanyUpdate = props => {
	const [name, setName] = useState('')
	const [location, setLocation] = useState('')
	const [logo, setSalary] = useState('')
	const [description, setDescription] = useState('')

	if (!localStorage.getItem('Authorization')) {
		props.history.push('/users/login')
	}

	const getData = async () => {
		await props.dispatch(getCompany(props.match.params.id))
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div className="container mt-5 mp-5">
			<div className="card shadow-sm border-0">
				<div className="card-body">
					<form
						onSubmit={e => {
							e.preventDefault()
							props.dispatch(updateCompany(props.match.params.id, { name, location, logo, description }))
							setTimeout(() => {
								props.history.push('/companies')
							}, 500)
						}}
					>
						{props.company.isLoading && !props.company.data && <p>Loading...</p>}
						{!props.company.isLoading &&
							props.company.data.map((v, i) => (
								<Fragment>
									<div className="form-group">
										<label>Name</label>
										<input
											type="text"
											className="form-control"
											name="name"
											defaultValue={v.name}
											onChange={e => {
												setName(e.target.value || v.name)
											}}
										/>
									</div>
									<div className="form-group">
										<label>Location</label>
										<input type="text" className="form-control" name="location" defaultValue={v.location} onChange={e => setLocation(e.target.value || v.location)} />
									</div>
									<div className="form-group">
										<label>Logo</label>
										<input type="text" className="form-control" name="salary" defaultValue={v.logo} onChange={e => setSalary(e.target.value || v.logo)} />
									</div>
									<div className="form-group">
										<label>Description</label>
										<textarea className="form-control" name="description" defaultValue={v.description} onChange={e => setDescription(e.target.value || v.description)}></textarea>
									</div>
								</Fragment>
							))}
						<button type="submit" className="btn btn-primary w-100">
							Update Company
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

export default connect(mapStateToProps)(CompanyUpdate)
