import axios from 'axios';
import React, { Component } from 'react';

export default class Editcx extends Component {
	constructor(props) {
		super(props);
		this.state = {
			remarks: '',
			isConverted: null,
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
					isConverted: res.data.isConverted,
				});
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});

		console.log(this.state.isConverted);
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

	handleSubmit = (event) => {
		event.preventDefault();
		const updatedCx = {
			remarks: this.state.remarks,
			isConverted: this.state.isConverted,
		};

		axios
			.put(
				'https://secure-dusk-73088.herokuapp.com/api/customer/' +
					this.props.match.params.id,
				updatedCx
			)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		return (
			<div
				className='input-group'
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-around',
				}}>
				<div>
					<span className='input-group-text'>
						Remarks
					</span>
					<textarea
						className='form-control'
						aria-label='Remarks'
						onChange={this.onRemarksChange}></textarea>
				</div>
				<div>
					<button
						type='button'
						className='btn btn-primary'
						onClick={this.onToggle}>
						Convert
					</button>
				</div>
				<button
					type='button'
					className='btn btn-primary'
					onClick={this.handleSubmit}
					style={{ borderRadius: '5px' }}>
					Submit
				</button>
			</div>
		);
	}
}
