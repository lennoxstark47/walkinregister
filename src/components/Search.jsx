import axios from 'axios';
import React, { Component } from 'react';

export default class Search extends Component {
	constructor() {
		super();
		this.state = {
			phone: '',
			name: '',
			address: '',
			custPhone: '',
			pin: '',
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
				<h3>Search for a Customer</h3>
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
					<div className='form-group'>
						<input
							type='submit'
							className='btn btn-primary'
							value='Search Customer'
						/>
					</div>
				</form>
				{/* <p>Name : {this.state.name}</p>
				<p>Phone : {this.state.custPhone}</p>
				<p>Address : {this.state.address}</p>
				<p>PIN : {this.state.pin}</p> */}
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'>Name</th>
							<th scope='col'>Phone</th>
							<th scope='col'>Address</th>
							<th scope='col'>PIN</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{this.state.name}</td>
							<td>{this.state.custPhone}</td>
							<td>{this.state.address}</td>
							<td>{this.state.pin}</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
