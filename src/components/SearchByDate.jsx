import axios from 'axios';
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';

export default class SearchByDate extends Component {
	constructor() {
		super();
		this.state = {
			min: new Date(),
			max: new Date(),
			custArray: [],
			loading: false,
		};
	}

	onMinChange = (date) => {
		this.setState({
			min: date,
		});
	};

	onMaxChange = (date) => {
		this.setState({
			max: date,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ loading: true });
		const dateRange = {
			min: this.state.min,
			max: this.state.max,
		};

		axios
			.post(
				'https://secure-dusk-73088.herokuapp.com/api/customer/getByDate',
				dateRange
			)
			.then((res) => {
				console.log(res.data);
				this.setState({
					custArray: res.data,
					loading: false,
				});
			})
			.catch((err) => {
				console.log(err);
			});
		this.setState({
			min: new Date(),
			max: new Date(),
		});
	};

	customerList(props) {
		return this.state.custArray.map((customer) => {
			return (
				<tr key={customer._id}>
					<td>
						{customer.createdAt.substring(0, 10)}
					</td>
					<td>{customer.name}</td>
					<td>{customer.phone}</td>
					<td>{customer.address}</td>
					<td>{customer.pin}</td>
					<td>{customer.remarks}</td>
					{customer.isConverted ? (
						<td>Converted</td>
					) : (
						<td>Not-Converted</td>
					)}
					<td>
						<Link to={'/edit/' + customer._id}>
							edit
						</Link>
					</td>
				</tr>
			);
		});
	}

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
						className='card text-center'
						style={{ width: '18rem' }}>
						<div className='card-body'>
							<h5 className='card-title'>
								Search Customers By Date Range
							</h5>
							<div style={{ padding: '5px' }}>
								<DatePicker
									selected={this.state.min}
									dateFormat='yyyy/MM/dd'
									onChange={this.onMinChange}
								/>
								to
								<DatePicker
									selected={this.state.max}
									dateFormat='yyyy/MM/dd'
									onChange={this.onMaxChange}
								/>
							</div>
							<button
								type='button'
								className='btn btn-primary'
								onClick={this.handleSubmit}>
								Search
							</button>
						</div>
					</div>
				</div>
				{/* <div>
					<table className='table'>
						<thead>
							<tr>
								<th scope='col'>Date</th>
								<th scope='col'>Name</th>
								<th scope='col'>Phone</th>
								<th scope='col'>Address</th>
								<th scope='col'>PIN</th>
								<th scope='col'>Remarks</th>
								<th scope='col'>Converted</th>
							</tr>
						</thead>
						<tbody>{this.customerList()}</tbody>
					</table>
				</div> */}
				<div>
					{this.state.loading ? (
						<p>Loading Data....</p>
					) : (
						<table className='table'>
							<thead>
								<tr>
									<th scope='col'>Date</th>
									<th scope='col'>Name</th>
									<th scope='col'>Phone</th>
									<th scope='col'>Address</th>
									<th scope='col'>PIN</th>
									<th scope='col'>Remarks</th>
									<th scope='col'>Converted</th>
								</tr>
							</thead>
							<tbody>{this.customerList()}</tbody>
						</table>
					)}
				</div>
			</div>
		);
	}
}
