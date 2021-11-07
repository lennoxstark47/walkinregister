import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CxList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			customers: [],
		};
	}

	componentDidMount() {
		this.setState({ loading: true });
		axios
			.get(
				'https://iekccxregister.herokuapp.com/api/customer/list'
			)
			.then((res) => {
				console.log(res.data);
				this.setState({
					customers: res.data,
					loading: false,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	customerList(props) {
		return this.state.customers.map((customer) => {
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
		);
	}
}
