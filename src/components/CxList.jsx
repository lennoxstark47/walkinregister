import axios from 'axios';
import React, { Component } from 'react';

export default class CxList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			customers: [],
		};
	}

	componentDidMount() {
		axios
			.get(
				'https://secure-dusk-73088.herokuapp.com/api/customer/list'
			)
			.then((res) => {
				console.log(res.data);
				this.setState({
					customers: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	customerList() {
		return this.state.customers.map((customer) => {
			return (
				<tr>
					<td>{customer.name}</td>
					<td>{customer.phone}</td>
					<td>{customer.address}</td>
					<td>{customer.pin}</td>
				</tr>
			);
		});
	}

	render() {
		return (
			<div>
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'>Name</th>
							<th scope='col'>Phone</th>
							<th scope='col'>Address</th>
							<th scope='col'>PIN</th>
						</tr>
					</thead>
					<tbody>{this.customerList()}</tbody>
				</table>
			</div>
		);
	}
}
