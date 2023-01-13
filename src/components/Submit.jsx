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
				'https://walkinregister-api.onrender.com/api/customer/add',
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
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<div
					className='card border-dark mb-4'
					style={{
						maxWidth: '50rem',
						marginTop: '5px',
					}}>
					<div className='card-header'>
						Create new customer
					</div>
					<form
						onSubmit={this.handleSubmit}
						className='form-control form-control-sm'
						style={{ padding: '50px' }}>
						<div
							className='form-group'
							style={{ width: '300px' }}>
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
						<div
							className='form-group'
							style={{
								marginTop: '10px',
								marginLeft: '30%',
							}}>
							<input
								type='submit'
								className='btn btn-primary'
								value='Create Customer'
							/>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
