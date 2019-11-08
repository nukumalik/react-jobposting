import React, { useState, Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = props => {
	const [isLogin, setLogin] = useState(false)

	useEffect(() => {
		if (localStorage.getItem('Authorization')) {
			setLogin(true)
		}
	})

	return (
		<nav className="navbar navbar-expand-lg fixed-top shadow-sm navbar-dark bg-primary">
			<div className="container">
				<Link to="/" className="navbar-brand">
					JOBFINDOUT
				</Link>
				<button className="navbar-toggler" data-toggle="collapse" data-target="#NavbarMenu" aria-controls="NavbarMenu">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="NavbarMenu">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								Home
							</Link>
						</li>

						{!isLogin && (
							<Fragment>
								<li className="nav-item">
									<Link to="/users/login" className="btn btn-outline-light ml-md-4">
										Login
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/users/register" className="btn btn-light ml-md-2">
										Register
									</Link>
								</li>
							</Fragment>
						)}
						{isLogin && (
							<Fragment>
								<li className="nav-item">
									<Link className="nav-link" to="/jobs/add">
										Add Job
									</Link>
								</li>
								<li className="nav-item dropdown">
									<Link to="#" className="nav-link dropdown-toggle" id="companyDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" axia-expanded="false">
										Company
									</Link>
									<div className="dropdown-menu" aria-labelledby="companyDropdown">
										<Link className="dropdown-item" to="/companies">
											List of Companies
										</Link>
										<Link className="dropdown-item" to="/companies/add">
											Add Companies
										</Link>
									</div>
								</li>
								<li className="nav-item">
									<Link
										to="/"
										className="btn btn-light ml-md-4"
										onClick={async () => {
											await localStorage.removeItem('Authorization')
											setLogin(false)
										}}
									>
										Logout
									</Link>
								</li>
							</Fragment>
						)}
					</ul>
				</div>
			</div>
		</nav>
	)
}

const mapStateToProps = state => ({
	user: state.user
})

export default connect(mapStateToProps)(Navbar)
