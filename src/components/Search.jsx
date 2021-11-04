import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Search extends Component {
	constructor() {
		super();
		this.state = {
			phone: '',
			name: '',
			address: '',
			custPhone: '',
			pin: '',
			id: '',
			loading: false,
		};
	}

	onPhoneChange = (event) => {
		this.setState({
			phone: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		console.log(this.state.phone);
		this.setState({
			loading: true,
		});

		axios
			.get(
				'https://secure-dusk-73088.herokuapp.com/api/customer/getbyphone/' +
					this.state.phone
			)
			.then((res) => {
				console.log(res.data);
				this.setState({
					name: res.data.name,
					custPhone: res.data.phone,
					address: res.data.address,
					pin: res.data.pin,
					id: res.data._id,
					loading: false,
				});
			})
			.catch((err) => {
				console.log(err);
			});

		this.setState({
			phone: '',
		});
	};

	render() {
		return (
			<div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						marginTop: '10px',
					}}>
					<div
						className='card'
						style={{ maxWidth: '20rem' }}>
						<div className='card-body'>
							<h5 className='card-title'>
								Search for a Customer
							</h5>
							<form
								onSubmit={this.handleSubmit}
								className='form-control form-control-sm'>
								<div className='form-group'>
									<label>Phone: </label>
									<input
										type='text'
										required
										className='form-control'
										onChange={this.onPhoneChange}
										value={this.state.phone}
									/>
								</div>
								<div
									className='form-group'
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}>
									<input
										type='submit'
										className='btn btn-primary'
										value='Search'
										style={{
											marginTop: '5px',
										}}
									/>
								</div>
							</form>
						</div>
					</div>
				</div>

				<table className='table'>
					<thead>
						<tr>
							<th scope='col'>Name</th>
							<th scope='col'>Phone</th>
							<th scope='col'>Address</th>
							<th scope='col'>PIN</th>
						</tr>
					</thead>
					{this.state.loading ? (
						<p>Loading....</p>
					) : (
						<tbody>
							<tr>
								<td>{this.state.name}</td>
								<td>{this.state.custPhone}</td>
								<td>{this.state.address}</td>
								<td>{this.state.pin}</td>
								<td>
									{this.state.loading ? null : (
										<Link
											to={
												'/edit/' + this.state.id
											}>
											edit
										</Link>
									)}
								</td>
							</tr>
						</tbody>
					)}
				</table>
			</div>
		);
	}
}
