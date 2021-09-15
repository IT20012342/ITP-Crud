import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const initialState = {
  topic: '',
  amount: '',
  date: '',
  category: '',
  description: '',
  bankAccountNumber: '',
  email: '',
  phoneNumber: '',
  topicError: '',
  amountError: '',
  dateError: '',
  categoryError: '',
  emailError: '',
  phoneNumberError: '',
};

export default class AddExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  // Track and update the state when changing the content
  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  Changedate = (e) => {
    this.setState({
      date: e,
    });
  };

  // Validations for the Add Expense Form
  validate = () => {
    let topicError = '';
    let amountError = '';
    let dateError = '';
    let categoryError = '';
    let emailError = '';
    let phoneNumberError = '';

    if (!this.state?.topic) {
      topicError = '* Topic is required';
    }

    if (!this.state?.amount) {
      amountError = '* Amount is required';
    }

    if (!this.state?.date) {
      dateError = '* Date is required';
    }

    if (!this.state?.category) {
      categoryError = '* Category is required';
    }

    if (!this.state.email?.includes('@')) {
      emailError = '* Invalid Email';
    }

    if (!(this.state?.phoneNumber.length <= 10)) {
      phoneNumberError = '* Invalid Phone Number';
    }

    if (
      emailError ||
      topicError ||
      amountError ||
      dateError ||
      categoryError ||
      phoneNumberError
    ) {
      this.setState({
        emailError,
        topicError,
        amountError,
        dateError,
        categoryError,
        phoneNumberError,
      });
      return false;
    }

    return true;
  };

  onSubmit = (e) => {
    e.preventDefault();

    const isValid = this.validate();

    const {
      topic,
      amount,
      date,
      category,
      description,
      bankAccountNumber,
      email,
      phoneNumber,
    } = this.state;

    const data = {
      topic: topic,
      amount: amount,
      date: date,
      category: category,
      description: description,
      bankAccountNumber: bankAccountNumber,
      email: email,
      phoneNumber: phoneNumber,
    };

    if (isValid) {
      axios.post('/expense/save', data).then((res) => {
        if (res.data.success) {
          this.setState({
            topic: '',
            amount: '',
            date: '',
            category: '',
            description: '',
            bankAccountNumber: '',
            email: '',
            phoneNumber: '',
          });
          alert('Expense Added Successfully!');
        }
      });

      //Clear the errror messages in the form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <div>
        <h1
          className="h3 mb-3 font-weight-normal"
          style={{ textAlign: 'center', paddingTop: '20px' }}
        >
          Add New Expense
        </h1>
        <div
          className="container"
          style={{
            paddingLeft: '50px',
            paddingRight: '50px',
            paddingBottom: '30px',
          }}
        >
          <form
            className="needs-validation"
            className="col-md-8 mt-4 mx-auto"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              width: '1100px',
              paddingLeft: '70px',
              paddingRight: '70px',
              marginRight: '30px',
              paddingTop: '50px',
              paddingBottom: '20px',
            }}
          >
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '10px', fontSize: '20px' }}>
                Topic
              </label>
              <input
                type="text"
                className="form-control"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  borderColor: 'red',
                  borderBottomWidth: 4,
                  borderTopWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  color: '#fff',
                  width: '960px',
                }}
                name="topic"
                placeholder="Enter Topic"
                value={this.state.topic}
                onChange={this.handleInputChange}
              />
              <br />
              <div style={{ color: 'red' }}>{this.state.topicError}</div>
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '10px', fontSize: '20px' }}>
                Amount
              </label>
              <input
                type="text"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  borderColor: 'red',
                  borderBottomWidth: 4,
                  borderTopWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  color: '#fff',
                  width: '960px',
                }}
                className="form-control"
                name="amount"
                placeholder="Enter Amount"
                value={this.state.amount}
                onChange={this.handleInputChange}
              />
              <br />
              <div style={{ color: 'red' }}>{this.state.amountError}</div>
            </div>

            <div
              className="form-group"
              style={{ marginBottom: '15px', fontSize: '20px' }}
            >
              <label style={{ marginBottom: '10px', fontSize: '20px' }}>
                Date
              </label>
              <DatePicker
                style={{ maxWidth: '650px' }}
                className="form-control"
                selected={this.state.date}
                placeholderText="Select Date"
                showPopperArrow={false}
                onChange={this.Changedate}
              />
              <br />
              <div style={{ color: 'red' }}>{this.state.dateError}</div>
            </div>

            <br />
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '10px', fontSize: '20px' }}>
                Category
              </label>
              <br />
              <select
                name="category"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  borderColor: 'red',
                  borderBottomWidth: 4,
                  borderTopWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  color: '#fff',
                  width: '960px',
                }}
                value={this.state.category}
                onChange={this.handleInputChange}
              >
                <option id="0" style={{ backgroundColor: '#000' }}>
                  Electricity Bills
                </option>
                <option id="1" style={{ backgroundColor: '#000' }}>
                  Internet and Telephone Bills
                </option>
                <option id="2" style={{ backgroundColor: '#000' }}>
                  Maintainance Costs
                </option>
                <option id="3" style={{ backgroundColor: '#000' }}>
                  Employee Costs
                </option>
                <option id="1" style={{ backgroundColor: '#000' }}>
                  Inventory Costs
                </option>
              </select>
              <br />
              <div style={{ color: 'red' }}>{this.state.categoryError}</div>
            </div>

            <br />
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '10px', fontSize: '20px' }}>
                Description
              </label>
              <input
                type="text"
                className="form-control"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  borderColor: 'red',
                  borderBottomWidth: 4,
                  borderTopWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  color: '#fff',
                  width: '960px',
                }}
                name="description"
                placeholder="Enter Description"
                value={this.state.description}
                onChange={this.handleInputChange}
              />
            </div>

            <br />
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '10px', fontSize: '20px' }}>
                Bank Account Number
              </label>
              <input
                type="text"
                className="form-control"
                name="bankAccountNumber"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  borderColor: 'red',
                  borderBottomWidth: 4,
                  borderTopWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  color: '#fff',
                  width: '960px',
                }}
                placeholder="Enter Bank Account Number"
                value={this.state.bankAccountNumber}
                onChange={this.handleInputChange}
              />
            </div>

            <br />
            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '10px', fontSize: '20px' }}>
                Email
              </label>
              <input
                type="text"
                className="form-control"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  borderColor: 'red',
                  borderBottomWidth: 4,
                  borderTopWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  color: '#fff',
                  width: '960px',
                }}
                name="email"
                placeholder="Enter Email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
              <br />
              <div style={{ color: 'red' }}>{this.state.emailError}</div>
            </div>

            <div className="form-group" style={{ marginBottom: '15px' }}>
              <label style={{ marginBottom: '10px', fontSize: '20px' }}>
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  borderColor: 'red',
                  borderBottomWidth: 4,
                  borderTopWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  color: '#fff',
                  width: '960px',
                }}
                name="phoneNumber"
                placeholder="Enter Phone Number"
                value={this.state.phoneNumber}
                onChange={this.handleInputChange}
              />
              <br />
              <div style={{ color: 'red' }}>{this.state.phoneNumberError}</div>
            </div>

            <Link
              class="btn btn-outline-danger"
              role="button"
              aria-pressed="true"
              style={{ margin: '30px', fontSize: '22px' }}
              onClick={this.onSubmit}
            >
              Add New Expense
            </Link>
          </form>
          <div style={{ paddingTop: '50px' }}></div>
        </div>
      </div>
    );
  }
}
