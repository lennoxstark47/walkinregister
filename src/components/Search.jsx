import axios from 'axios';
import React, { Component } from 'react';

export default class Search extends Component {
	constructor() {
		super();
		this.state = {
			phone: '',
		};
	}

	onPhoneChange = (event) => {
		this.setState({
			phone: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const searchPhone = this.state.phone;

		console.log(this.state.phone);

		axios
			.get(
				'http://localhost:5000/api/customer/getbyphone',
				searchPhone
			)
			.then((res) => {
				console.log(res);
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
			</div>
		);
	}
}
