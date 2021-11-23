import axios from 'axios';
import React, { Component } from 'react';
import Switch from '@mui/material/Switch';

export default class Editcx extends Component {
	constructor(props) {
		super(props);
		this.state = {
			remarks: '',
			isConverted: null,
			name: '',
			phone: '',
			address: '',
			pin: '',
		};
	}

	componentDidMount() {
		axios
			.get(
				'https://secure-dusk-73088.herokuapp.com/api/customer/' +
					this.props.match.params.id
			)
			.then((res) => {
				this.setState({
					remarks: res.data.remarks,
					isConverted: res.data.isConverted,
					name: res.data.name,
					phone: res.data.phone,
					address: res.data.address,
					pin: res.data.pin,
				});
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});

		console.log(this.state.isConverted);
		console.log(this.state.name);
	}

	onRemarksChange = (event) => {
		this.setState({
			remarks: event.target.value,
		});
	};

	onToggle = (event) => {
		if (this.state.isConverted) {
			this.setState({ isConverted: false });
		} else {
			this.setState({ isConverted: true });
		}
	};

	onNameChange = (event) => {
		this.setState({
			name: event.target.value,
		});
	};

	onAddressChange = (event) => {
		this.setState({
			address: event.target.value,
		});
	};

	onPhoneChange = (event) => {
		this.setState({
			phone: event.target.value,
		});
	};

	onPinChange = (event) => {
		this.setState({
			pin: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const updatedCx = {
			remarks: this.state.remarks,
			isConverted: this.state.isConverted,
			name: this.state.name,
			address: this.state.address,
			phone: this.state.phone,
			pin: this.state.pin,
		};

		axios
			.put(
				'https://secure-dusk-73088.herokuapp.com/api/customer/' +
					this.props.match.params.id,
				updatedCx
			)
			.then((res) => {
				if (!res) {
					console.log('error');
				} else {
					window.location = '/success';
				}
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
				}}>
				<div
					className='card'
					style={{
						width: '20rem',
						height: '30rem',
						marginTop: '10px',
					}}>
					<div className='card-body'>
						<div
							className='input-group'
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								marginTop: '30px',
								height: '250px',
							}}>
							<div
								style={{
									width: '80%',
								}}>
								<div className='card-title'>
									<h5>{this.state.name}</h5>
								</div>
								<input
									className='form-control'
									value={this.state.name}
									onChange={this.onNameChange}
								/>
								<input
									style={{ marginTop: '3px' }}
									className='form-control'
									value={this.state.phone}
									onChange={this.onPhoneChange}
								/>
								<input
									style={{ marginTop: '3px' }}
									className='form-control'
									value={this.state.address}
									onChange={this.onAddressChange}
								/>
								<input
									style={{ marginTop: '3px' }}
									className='form-control'
									value={this.state.pin}
									onChange={this.onPinChange}
								/>
								<h6 className='card-subtitle mb-2 text-muted'>
									Remarks
								</h6>
								<textarea
									value={this.state.remarks}
									className='form-control'
									aria-label='Remarks'
									onChange={this.onRemarksChange}
									style={{
										height: '150px',
									}}></textarea>
							</div>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									marginTop: '5px',
								}}>
								<div
									style={{ marginLeft: '5px' }}>
									{/* <button
										type='button'
										className='btn btn-primary'
										onClick={this.onToggle}>
										Convert
									</button> */}
									<span>Convert</span>
									<Switch
										checked={
											this.state.isConverted
										}
										onChange={this.onToggle}
										inputProps={{
											'aria-label': 'controlled',
										}}
									/>
								</div>
								<div
									style={{ marginLeft: '10px' }}>
									<button
										type='button'
										className='btn btn-primary'
										onClick={this.handleSubmit}
										style={{
											borderRadius: '5px',
										}}>
										Submit
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
