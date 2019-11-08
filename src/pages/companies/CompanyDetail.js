import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'

// Action
import { getCompany } from '../../redux/action/company'

const CompanyDetail = props => {
	useEffect(() => {
		props.dispatch(getCompany(props.match.params.id))
	}, [])

	if (!localStorage.getItem('Authorization')) {
		props.history.push('/users/login')
	}

	return props.company.isLoading && props.company.data ? (
		<p>Loading...</p>
	) : (
		!props.company.isLoading &&
			props.company.data.map((v, i) => (
				<Fragment key={i.toString() + new Date().getTime().toString()}>
					<div
						className="jumbotron jumbotron-fluid"
						style={{
							marginTop: '-25px',
							minHeight: '400px',
							backgroundImage: 'url("http://www.juegofriv10.com/wp-content/uploads/2018/05/50-Beautiful-and-Minimalist-Presentation-Backgrounds-040.jpg")'
						}}
					>
						<div className="container">
							<div className="row">
								<div className="col-12 col-lg-8">
									<h1
										className="display-4"
										style={{
											fontSize: '60px',
											fontWeight: 'bold'
										}}
									>
										{v.name}
									</h1>
									<small>
										<i className="fas fa-map-marker-alt" /> {v.location}
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
							<div className="col-12 col-lg-12 text-justify">
								<div className="card shadow border-0">
									<div className="card-body p-5">
										<p style={{ lineHeight: '1.8', fontSize: '16px', letterSpacing: '1.8px' }}>{v.description}</p>
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
	company: state.company
})

export default connect(mapStateToProps)(CompanyDetail)
