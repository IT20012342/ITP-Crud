import React, { Component } from 'react';
import AdminExpensesTable from '../../../modules/AdminPageModules/Expenses/AdminExpensesTable/AdminExpensesTable';
import { Link } from 'react-router-dom';
import NavBar from './AdminNavBar';

export default class AdminExpensesPage extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: '#000',
          paddingLeft: '20px',
        }}
      >
        <NavBar />
        <Link
          to="/addExpense"
          class="btn btn-outline-danger"
          role="button"
          aria-pressed="true"
          style={{ margin: '20px', fontSize: '20px' }}
        >
          Add New Expense
        </Link>
        <AdminExpensesTable />
        <div style={{ paddingTop: '30px' }}></div>
      </div>
    );
  }
}
