import React, { Component } from 'react';
import AdminNavBar from './AdminNavBar';
import EditExpenseForm from '../../../modules/AdminPageModules/Expenses/EditExpenseForm/EditExpenseForm';

export default class EditExpense extends Component {
  render() {
    return (
      <div className="editPageStyle" style={{ paddingLeft: '250px' }}>
        <AdminNavBar />
        <EditExpenseForm />
      </div>
    );
  }
}
