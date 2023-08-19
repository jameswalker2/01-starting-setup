import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [visible, setVisible] = useState(false);

  const formshow = () => {
    setVisible(true);
  }

  const formhide = () => {
    setVisible(false);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setVisible(false);
  };

  return (
    <div className='new-expense'>
      {!visible && <button onClick={formshow}>Add New Expense</button>}
      {visible && <ExpenseForm 
      onSaveExpenseData={saveExpenseDataHandler}
      onCancelButton={formhide}
      />}
    </div>
  );
};

export default NewExpense;
