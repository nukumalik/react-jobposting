import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'

// Action
import { getJob, allJob } from '../../redux/action/job'
import { allCompany } from '../../redux/action/company'

const JobDetail = props => {
	useEffect(() => {
		// props.dispatch(getJob(props.match.params.id))
		props.dispatch(allJob())
		props.dispatch(allCompany())
	}, [])

	console.log(props.job)

	return props.job.isLoading && props.job.data ? (
		<p>Loading...</p>
	) : (
		!props.job.isLoading &&
			props.job.data
				.filter(i => i.id === props.match.params.id)
				.map((v, i) => (
					<Fragment key={i.toString() + new Date().getTime().toString()}>
						<div
							className="jumbotron jumbotron-fluid"
							style={{
								marginTop: '-25px',
								minHeight: '400px',
								backgroundImage: 'url("http://www.juegofriv10.com/wp-content/uploads/2018/05/50-Beautiful-and-Minimalist-Presentation-Backgrounds-040.jpg")',
							}}>
							<div className="container">
								<div className="row">
									<div className="col-12 col-lg-8">
										<h1
											className="display-4"
											style={{
												fontSize: '60px',
												fontWeight: 'bold',
											}}>
											{v.jobs}
										</h1>
										<p>
											<i className="fas fa-building" /> {v.companies}
										</p>
										<small>
											<i className="fas fa-map-marker-alt" /> {v.location}
											&nbsp;&nbsp;|&nbsp;&nbsp;
											<i className="fas fa-briefcase" /> {v.categories}
											&nbsp;&nbsp;|&nbsp;&nbsp;
											<i className="fas fa-money-bill-wave" /> {localStorage.getItem('Authorization') ? v.salary : 'Login to see salary'}
										</small>
									</div>
									<div className="col-12 col-lg-4">
										<img src={v.logo} width="300px" />
									</div>
								</div>
							</div>
						</div>
						<div className="container" style={{ marginTop: '-150px' }}>
							<div className="row">
								<div className="col-12 col-lg-8 text-justify">
									<div className="card shadow border-0">
										<div className="card-body p-5">
											<p style={{ lineHeight: '1.8', fontSize: '16px', letterSpacing: '1.8px' }}>{v.description}</p>
										</div>
									</div>
								</div>
								<div className="col-12 col-lg-4">
									<div className="card shadow border-0">
										<div className="card-body p-5">
											<h4 className="text-center">Tentang {v.companies}</h4>
											<hr />
											<p
												className=""
												style={{
													lineHeight: '1.8',
													fontSize: '14px',
													letterSpacing: '1.8px',
												}}>
												{props.company.data
													.filter(i => i.name === v.companies)
													.map((value, index) => (
														<Fragment key={index.toString()}>{value.description}</Fragment>
													))}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Fragment>
				))
	)
}

const mapStateToProps = state => ({
	job: state.job,
	user: state.user,
	company: state.company,
})

export default connect(mapStateToProps)(JobDetail)
