import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'

// Action
import { getJob, updateJob } from '../../redux/action/job'
import { allCategory } from '../../redux/action/category'
import { allCompany } from '../../redux/action/company'

const JobUpdate = props => {
	const [name, setName] = useState('')
	const [id_category, setCategory] = useState(0)
	const [location, setLocation] = useState('')
	const [salary, setSalary] = useState('')
	const [description, setDescription] = useState('')
	const [id_company, setCompany] = useState('')
	const [companies, setCompanies] = useState()
	const [categories, setCategories] = useState()

	if (!localStorage.getItem('Authorization')) {
		props.history.push('/users/login')
	}

	const getData = async () => {
		await props.dispatch(getJob(props.match.params.id))
	}

	const getCompanies = async () => {
		const result = await props.dispatch(allCompany())
		setCompanies(result.value.data.data)
	}

	const getCategories = async () => {
		const result = await props.dispatch(allCategory())
		setCategories(result.value.data)
	}

	useEffect(() => {
		getData()
		getCompanies()
		getCategories()
	}, [])

	console.log({ name, id_category, location, salary, description, id_company })
	console.log(companies)
	console.log(categories)

	return (
		<div className="container mt-5 mp-5">
			<div className="card shadow-sm border-0">
				<div className="card-body">
					<form
						onSubmit={e => {
							e.preventDefault()
							props.dispatch(updateJob(props.match.params.id, { name, id_category, location, salary, description, id_company }))
							setTimeout(() => {
								props.history.push('/')
							}, 500)
						}}
					>
						{props.job.isLoading && !props.job.data && <p>Loading...</p>}
						{!props.job.isLoading &&
							props.job.data.map((v, i) => (
								<Fragment>
									<div className="form-group">
										<label>Name</label>
										<input
											type="text"
											className="form-control"
											name="name"
											defaultValue={v.jobs}
											onChange={e => {
												setName(e.target.value || v.jobs)
											}}
										/>
									</div>
									<div className="form-group">
										<label>Category</label>
										<select
											name="id_category"
											className="form-control"
											defaultValue={!categories ? '' : categories.filter(i => (i.name === v.categories ? i.id : 0))}
											onChange={e => setCategory(e.target.value)}
										>
											{!categories
												? ''
												: categories.map((v, i) => (
														<Fragment key={i.toString()}>
															<option value={v.id}>{v.name}</option>
														</Fragment>
												  ))}
										</select>
									</div>
									<div className="form-group">
										<label>Location</label>
										<input type="text" className="form-control" name="location" defaultValue={v.location} onChange={e => setLocation(e.target.value || v.location)} />
									</div>
									<div className="form-group">
										<label>Salary</label>
										<input type="text" className="form-control" name="salary" defaultValue={v.salary} onChange={e => setSalary(e.target.value || v.salary)} />
									</div>
									<div className="form-group">
										<label>Description</label>
										<textarea className="form-control" name="description" defaultValue={v.description} onChange={e => setDescription(e.target.value || v.description)}></textarea>
									</div>
									<div className="form-group">
										<label>Company</label>
										<select
											name="id_company"
											className="form-control"
											defaultValue={!companies ? '' : companies.filter(i => (i.name === v.companies ? i.id : ''))}
											onChange={e => setCompany(e.target.value)}
										>
											<option value="">Select company</option>
											{!companies
												? ''
												: companies.map((v, i) => (
														<Fragment key={i.toString()}>
															<option value={v.id}>{v.name}</option>
														</Fragment>
												  ))}
										</select>
									</div>
								</Fragment>
							))}
						<button type="submit" className="btn btn-primary w-100">
							Update Vacancy
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	job: state.job,
	company: state.company,
	category: state.category
})

export default connect(mapStateToProps)(JobUpdate)
