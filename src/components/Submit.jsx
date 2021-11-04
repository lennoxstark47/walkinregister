import axios from 'axios';
import React, { Component } from 'react';

export default class Submit extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			phone: '',
			address: '',
			pin: '',
			success: false,
		};
	}

	onNameChange = (event) => {
		this.setState({
			name: event.target.value,
		});
	};

	onPhoneChange = (event) => {
		this.setState({
			phone: event.target.value,
		});
	};

	onAddressChange = (event) => {
		this.setState({
			address: event.target.value,
		});
	};

	onPinChange = (event) => {
		this.setState({
			pin: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const newCustomer = {
			name: this.state.name,
			address: this.state.address,
			phone: this.state.phone,
			pin: this.state.pin,
		};
		console.log(newCustomer);

		axios
			.post(
				'https://secure-dusk-73088.herokuapp.com/api/customer/add',
				newCustomer
			)
			.then((res) => {
				if (res) {
					window.location = '/success';
				} else {
					window.location = '/fail';
				}
			})
			.catch((err) => {
				console.log(err);
			});

		this.setState({
			name: '',
			phone: '',
			address: '',
			pin: '',
		});
	};

	render() {
		return (
			<div>
				<h3>Create new Customer</h3>
				<form
					onSubmit={this.handleSubmit}
					className='form-control form-control-sm'>
					<div className='form-group'>
						<label>Name: </label>
						<input
							type='text'
							required
							className='form-control'
							onChange={this.onNameChange}
							value={this.state.name}
						/>
						<label>Phone: </label>
						<input
							type='text'
							required
							className='form-control'
							onChange={this.onPhoneChange}
							value={this.state.phone}
						/>
						<label>Address: </label>
						<input
							type='text'
							required
							className='form-control'
							onChange={this.onAddressChange}
							value={this.state.address}
						/>
						<label>PIN: </label>
						<input
							type='text'
							required
							className='form-control'
							onChange={this.onPinChange}
							value={this.state.pin}
						/>
					</div>
					<div className='form-group'>
						<input
							type='submit'
							className='btn btn-primary'
							value='Create Customer'
						/>
					</div>
				</form>
			</div>
		);
	}
}
