import React, { Component } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';

export default class AdminExpensesTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: [],
    };
  }

  componentDidMount() {
    this.retrieveExpenses();
  }

  retrieveExpenses() {
    axios.get('/expenses').then((res) => {
      if (res.data.success) {
        //console.log(res.data);
        this.setState({
          expenses: res.data.existingExpenses,
          init: 1,
        });

        console.log(this.state.expenses);
      }
    });
  }

  onDelete = (id) => {
    if (window.confirm('Do you want to delete this Expense?')) {
      axios.delete(`/expense/delete/${id}`).then((res) => {
        alert('Expense Deleted Successfully');
        this.retrieveExpenses();
      });
    }
  };

  filterData(expenses, searchKey) {
    const result = expenses.filter(
      (expense) =>
        expense.date.includes(searchKey) ||
        expense.topic.toLowerCase().includes(searchKey) ||
        expense.category.toLowerCase().includes(searchKey)
    );

    this.setState({ expenses: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get('/expenses').then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingExpenses, searchKey);
      }
    });
  };

  render() {
    return (
      <div style={{ marginRight: '20px', width: '1700px' }}>
        <div className="container" className="p-3 mb-2 bg-danger text-white">
          <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
              <h4>All Expenses</h4>
            </div>
            <div className="col-lg-3 mt-2 ">
              <input
                style={{
                  backgroundColor: '#373737',
                  outline: 'none',
                  borderColor: 'red',
                  borderRadius: '20px',
                  color: 'white',
                }}
                className="form-control"
                type="search"
                placeholder="Search Expenses"
                name="searchQuery"
                onChange={this.handleSearchArea}
              ></input>
            </div>
          </div>
        </div>

        <table class="table table-dark" style={{ marginTop: '30px' }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Topic</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
              <th scope="col">Category</th>
              <th scope="col">Description</th>
              <th scope="col">Bank Account Number</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.expenses.map((expenses, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a
                    href={`/expense/${expenses._id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    {expenses.topic}
                  </a>
                </td>
                <td>{expenses.amount}</td>
                <td>{expenses.date}</td>
                <td>{expenses.category}</td>
                <td>{expenses.description}</td>
                <td>{expenses.bankAccountNumber}</td>
                <td>{expenses.email}</td>
                <td>{expenses.phoneNumber}</td>
                <td>
                  <a className="btn btn-warning" href={`/editE/${expenses._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(expenses._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
