import React from 'react'
import { Link } from 'react-router-dom'

const JobItem = props => {
	return (
		<div className="card shadow-sm border-0 mb-3">
			<div className="card-body">
				<div className="row">
					<div className="col-sm-12 col-md-8">
						<h3 style={{ fontSize: '24px', fontWeight: 'bold', cursor: 'pointer' }} onClick={props.clicked}>
							{props.name}
						</h3>
						<Link to={props.link}>{props.company}</Link>
						<br />
						<small>
							<i className="fas fa-briefcase" />
							&nbsp;&nbsp;{props.category}
							&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
							<i className="fas fa-map-marker-alt" />
							&nbsp;&nbsp;{props.location}
							&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
							<i className="fas fa-money-bill-wave" />
							&nbsp;&nbsp;{props.salary}
						</small>
						<p style={{ maxHeight: '110px', overflow: 'hidden', textOverflow: 'ellipsis', lineHeight: '1.8' }}>{props.description}</p>
					</div>
					<div className="col-sm-12 col-md-4">
						<img
							onClick={props.clicked}
							src={props.logo}
							alt={props.name}
							style={{
								maxWidth: '70%',
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%, -50%)',
								cursor: 'pointer'
							}}
						/>
					</div>
					<div className="col-sm-12 col-md-12">
						<div className="row">
							<div className="col-sm-12 col-md-6">{props.goEdit}</div>
							<div className="col-sm-12 col-md-6">{props.goDelete}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default JobItem
