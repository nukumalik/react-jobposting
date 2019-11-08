import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// Action
import { loginUser } from '../../redux/action/user'

const Login = props => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	if (localStorage.getItem('Authorization')) {
		props.history.push('/')
	}

	return (
		<div className="container mt-5 pt-5">
			<div className="card shadow-sm border-0 w-50 m-auto">
				<div className="card-body">
					<form
						onSubmit={async e => {
							e.preventDefault()
							const result = await props.dispatch(loginUser({ email, password }))
							const { token } = result.value.data
							await localStorage.setItem('Authorization', token)
							props.history.push('/')
						}}
					>
						<div className="form-group">
							<label>Email</label>
							<input type="text" name="email" className="form-control" onChange={e => setEmail(e.target.value)} />
						</div>
						<div className="form-group">
							<label>Password</label>
							<input type="password" name="password" className="form-control" onChange={e => setPassword(e.target.value)} />
						</div>
						<button type="submit" className="btn btn-primary w-100">
							Login
						</button>
						<hr />
						<div className="text-center">
							<small>
								Are you not registered yet? Please <Link to="/users/register">Register</Link>
							</small>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	user: state.user
})

export default connect(mapStateToProps)(Login)
