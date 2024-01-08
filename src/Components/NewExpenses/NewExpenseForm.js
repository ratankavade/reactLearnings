import React, {useState} from 'react'
import './NewExpenseForm.css'

export default function NewExpenseForm(props) {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    function onAddExpenseSubmit(event){
        event.preventDefault();
        const expense = {
            id: Math.random(),
            name: enteredName,
            amount: enteredAmount,
            date: enteredDate
        }

        props.onSaveExpenseData(expense);
        
        setEnteredName('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <div className='form_card'>
            <form>
                <div className="row">
                    <div className="col">
                        <input type="text" value={enteredName} onChange={nameChangeHandler} className="form-control" placeholder="Expense Name" />
                    </div>
                    <div className="col">
                        <input type="number" value={enteredAmount} onChange={amountChangeHandler} className="form-control" placeholder="Expense Amount" />
                    </div>
                    <div className="col">
                        <input type="date" value={enteredDate} onChange={dateChangeHandler} className="form-control" placeholder="Expense Date" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button type="submit" onClick={onAddExpenseSubmit} className="btn btn-primary mt-3" style={{float:"right"}}>Add New Expense</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
