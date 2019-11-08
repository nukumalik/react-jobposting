import React, { Component } from 'react'

const Lookingfor = props => {
	return (
		<div className="card mb-5 border-0 shadow">
			<div className="card-body">
				<form onSubmit={props.submitted}>
					<div className="row">
						<div className="col-12 col-md-4 mb-sm-3 mb-md-0">
							<input type="search" onChange={props.name} className="form-control" placeholder="Cari berdasarkan lowongan" />
						</div>
						<div className="col-12 col-md-4 mb-sm-3 mb-md-0">
							<input type="search" onChange={props.companies} className="form-control" placeholder="Cari berdasarkan perusahaan" />
						</div>
						<div className="col-12 col-md-3 mb-sm-3 mb-md-0">
							<select name="orderby" onChange={props.orderBy} defaultValue="" className="form-control">
								<option value="">Urut Berdasarkan</option>
								<option value="updated_at">Lowongan Terbaru</option>
								<option value="nztoa">Lowongan A-Z</option>
								<option value="natoz">Lowongan Z-A </option>
								<option value="cztoa">Kategori A-Z </option>
								<option value="catoz">Kategori Z-A </option>
								{/* <option value='updated_at'>Latest</option>
									<option value='jobs'>Name</option>
									<option value='companies'>Company</option> */}
							</select>
						</div>
						<div className="col-12 col-md-1">
							<button className="btn btn-primary w-100">
								<i className="fas fa-search" />
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Lookingfor
