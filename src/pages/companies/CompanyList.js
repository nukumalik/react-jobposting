import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'

// Action
import { allJob } from '../../redux/action/job'
import { allCompany, deleteCompany } from '../../redux/action/company'
import { allCategory } from '../../redux/action/category'

// Partial Component
import CompanyItem from './partial/CompanyItem'

const JobList = props => {
	const [isLogin, setLogin] = useState(false)

	if (!localStorage.getItem('Authorization')) {
		props.history.push('/users/login')
	}

	useEffect(() => {
		if (localStorage.getItem('Authorization')) {
			setLogin(true)
		}

		props.dispatch(allJob())
		props.dispatch(allCompany())
		props.dispatch(allCategory())
	}, [])

	return (
		<div className="container mt-5 mp-5">
			{props.company.isLoading && !props.company.data && <p>Loading...</p>}
			{!props.company.isLoading &&
				props.company.data.map((v, i) => (
					<Fragment key={i.toString() + new Date().getTime().toString()}>
						<CompanyItem
							name={v.name}
							logo={v.logo}
							location={v.location}
							description={v.description}
							clicked={() => props.history.push('/companies/' + v.id)}
							goEdit={
								isLogin ? (
									<button type="button" className="btn btn-primary w-100" onClick={() => props.history.push('/companies/edit/' + v.id)}>
										Edit
									</button>
								) : (
									''
								)
							}
							goDelete={
								isLogin ? (
									<button
										type="button"
										className="btn btn-primary w-100"
										onClick={() => {
											props.dispatch(deleteCompany(v.id))
											setTimeout(() => {
												props.history.push('/')
											}, 500)
										}}
									>
										Delete
									</button>
								) : (
									''
								)
							}
						/>
					</Fragment>
				))}
		</div>
	)
}

const mapStateToProps = state => ({
	job: state.job,
	company: state.company,
	category: state.category
})

export default connect(mapStateToProps)(JobList)
