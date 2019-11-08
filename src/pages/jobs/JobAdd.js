import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'

// Action
import { addJob } from '../../redux/action/job'
import { allCategory } from '../../redux/action/category'
import { allCompany } from '../../redux/action/company'

const JobAdd = props => {
	const [name, setName] = useState('')
	const [id_category, setCategory] = useState(0)
	const [location, setLocation] = useState('')
	const [salary, setSalary] = useState('')
	const [description, setDescription] = useState('')
	const [id_company, setCompany] = useState('')
	const [companies, setCompanies] = useState()
	const [categories, setCategories] = useState()

	const getCompanies = async () => {
		const result = await props.dispatch(allCompany())
		setCompanies(result.value.data.data)
	}

	const getCategories = async () => {
		const result = await props.dispatch(allCategory())
		setCategories(result.value.data)
	}

	if (!localStorage.getItem('Authorization')) {
		props.history.push('/users/login')
	}

	useEffect(() => {
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
							props.dispatch(addJob({ name, id_category, location, salary, description, id_company }))
							setTimeout(() => {
								props.history.push('/')
							}, 500)
						}}
					>
						<div className="form-group">
							<label>Name</label>
							<input type="text" className="form-control" name="name" onChange={e => setName(e.target.value)} />
						</div>
						<div className="form-group">
							<label>Category</label>
							<select name="id_category" className="form-control" defaultValue="" onChange={e => setCategory(e.target.value)}>
								<option value="">Select category</option>
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
							<input type="text" className="form-control" name="location" onChange={e => setLocation(e.target.value)} />
						</div>
						<div className="form-group">
							<label>Salary</label>
							<input type="text" className="form-control" name="name" onChange={e => setSalary(e.target.value)} />
						</div>
						<div className="form-group">
							<label>Description</label>
							<textarea className="form-control" name="description" onChange={e => setDescription(e.target.value)}></textarea>
						</div>
						<div className="form-group">
							<label>Company</label>
							<select name="id_company" className="form-control" defaultValue="" onChange={e => setCompany(e.target.value)}>
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
						<button type="submit" className="btn btn-primary w-100">
							Add a Vacancy
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	company: state.company,
	category: state.category
})

export default connect(mapStateToProps)(JobAdd)
