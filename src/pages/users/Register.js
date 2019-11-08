import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// Action
import { registerUser } from '../../redux/action/user'

const Register = props => {
	const [name, setName] = useState('')
	const [username, setUsername] = useState('')
	const [gender, setGender] = useState('')
	const [born, setBorn] = useState()
	const [address, setAddress] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [submitted, setSubmitted] = useState(false)
	const [error, setError] = useState('')

	const handleSubmit = async e => {
		e.preventDefault()
		setSubmitted(true)
		await props.dispatch(registerUser({ name, username, gender, born, address, email, password }))
		setTimeout(() => {
			props.history.push('/users/login')
		}, 500)
	}

	return (
		<div
			className="container pb-5"
			style={{
				paddingTop: '100px'
			}}
		>
			<div className="card w-50 m-auto shadow" style={{ backgroundColor: '#fff' }}>
				<div className="card-body">
					<form
						onSubmit={async e => {
							e.preventDefault()
							setSubmitted(e.target.value)
							await props.dispatch(registerUser({ name, username, gender, born, address, email, password }))
							setTimeout(() => {
								props.history.push('/users/login')
							}, 500)
						}}
					>
						<div className={'form-group' + (submitted && !name ? ' has-error' : '')}>
							<label>Name</label>
							<input type="text" name="name" onChange={e => setName(e.target.value)} className="form-control" placeholder="Masukan nama lengkap" />
							{submitted && !name && (
								<div className="help-block text-danger">
									<small>Name must be filled</small>
								</div>
							)}
						</div>
						<div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
							<label>Username</label>
							<input type="text" name="username" onChange={e => setUsername(e.target.value)} className="form-control" placeholder="Masukan username" />
							{submitted && !username && (
								<div className="help-block text-danger">
									<small>Username must be filled</small>
								</div>
							)}
						</div>
						<div className={'form-group' + (submitted && !born ? ' has-error' : '')}>
							<label>Born</label>
							<input type="date" name="born" onChange={e => setBorn(e.target.value)} className="form-control" />
							{submitted && !born && (
								<div className="help-block text-danger">
									<small>Select born date</small>
								</div>
							)}
						</div>
						<div className={'form-group' + (submitted && !gender ? ' has-error' : '')}>
							<label>Gender</label>
							<select name="gender" onChange={e => setGender(e.target.value)} className="form-control">
								<option value="l">Laki-laki</option>
								<option value="p">Perempuan</option>
							</select>
							{submitted && !gender && (
								<div className="help-block text-danger">
									<small>Select your gender</small>
								</div>
							)}
						</div>
						<div className={'form-group' + (submitted && !address ? ' has-error' : '')}>
							<label>Address</label>
							<textarea name="address" onChange={e => setAddress(e.target.value)} className="form-control"></textarea>
							{submitted && !address && (
								<div className="help-block text-danger">
									<small>Address must be filled</small>
								</div>
							)}
						</div>
						<div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
							<label>Email</label>
							<input type="email" name="email" onChange={e => setEmail(e.target.value)} className="form-control" aria-describedby="emailHelp" placeholder="Masukan alamat email" />
							{submitted && !email && (
								<div className="help-block text-danger">
									<small>Email must be filled</small>
								</div>
							)}
						</div>
						<div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
							<label>Password</label>
							<input type="password" name="password" onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Masukan kata sandi" />
							{submitted && !password && (
								<div className="help-block text-danger">
									<small>Password must be filled</small>
								</div>
							)}
						</div>
						<button type="submit" className="btn btn-success w-100">
							Register
						</button>
					</form>
					<hr />
					<div className="text-center">
						<small>
							Are you already registered? Please <Link to="/users/login">Login</Link>
						</small>
					</div>
				</div>
				{error && <div className="alert alert-danger">{error}</div>}
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	user: state.user
})

export default connect(mapStateToProps)(Register)
