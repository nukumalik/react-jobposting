import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'

// Action
import { allJob, deleteJob } from '../../redux/action/job'
import { allCompany } from '../../redux/action/company'
import { allCategory } from '../../redux/action/category'

// Partial Component
import JobItem from './partial/JobItem'
import Lookingfor from './partial/Lookingfor'

const JobList = props => {
	const [isLogin, setLogin] = useState(false)
	const [name, setName] = useState('')
	const [companies, setCompanies] = useState('')
	const [orderBy, setOrderBy] = useState('')

	useEffect(() => {
		if (localStorage.getItem('Authorization')) {
			setLogin(true)
		}

		props.dispatch(allJob())
		props.dispatch(allCompany())
		props.dispatch(allCategory())
	}, [])

	console.log(name)
	console.log(companies)
	console.log(orderBy)

	return (
		<div className="container mt-5 pb-5">
			<Lookingfor
				submitted={e => {
					e.preventDefault()
					props.dispatch(allJob(name, companies, orderBy))
				}}
				name={e => {
					setName(e.target.value)

					if (name.length > 1) {
						props.dispatch(allJob(name, companies || '', orderBy || 'updated_at'))
					}
				}}
				companies={e => {
					setCompanies(e.target.value)

					if (companies.length > 1) {
						props.dispatch(allJob(name || '', companies, orderBy || 'updated_at'))
					}
				}}
				orderBy={e => {
					setOrderBy(e.target.value)

					if (orderBy) {
						props.dispatch(allJob(name || '', companies || '', orderBy))
					}
				}}
			/>
			{props.job.isLoading && !props.job.data && <p>Loading...</p>}
			{!props.job.isLoading &&
				props.job.data.map((v, i) => (
					<Fragment key={i.toString() + new Date().getTime().toString()}>
						<JobItem
							name={v.jobs}
							logo={v.logo}
							company={v.companies}
							category={v.categories}
							location={v.location}
							salary={localStorage.getItem('Authorization') ? v.salary : 'Login to see salary'}
							description={v.description}
							link="#"
							clicked={() => props.history.push('/jobs/' + v.id)}
							goEdit={
								isLogin ? (
									<button type="button" className="btn btn-primary w-100" onClick={() => props.history.push('/jobs/edit/' + v.id)}>
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
											props.dispatch(deleteJob(v.id))
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
			<div className="row">
				<div className="col-6">
					{!props.job.isLoading && props.job.pageLink.hasPrev && (
						<button type="button" onClick={() => props.dispatch(allJob(name || '', companies || '', orderBy || '', props.job.pagination.page - 1))} className="btn btn-primary btn-lg">
							Prev
						</button>
					)}
				</div>
				<div className="col-6 text-right">
					{!props.job.isLoading && props.job.pageLink.hasNext && (
						<button type="button" onClick={() => props.dispatch(allJob(name || '', companies || '', orderBy || '', props.job.pagination.page + 1))} className="btn btn-primary btn-lg">
							Next
						</button>
					)}
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

export default connect(mapStateToProps)(JobList)
