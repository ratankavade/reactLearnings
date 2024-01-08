import React, {useState} from 'react'
import ExpenseItems from './ExpenseItems';
import NewExpenseForm from '../NewExpenses/NewExpenseForm'
import Card from '../UIComponents/Card';
import './Expenses.css'

const INITIAL_EXPENSE_ITEMS = [{id: 1, name: "School Donation", date: '2020-05-28', amount: "$ 200"},
    {id: 2, name: "Scooty", date: '2021-10-15', amount: "$ 50"},
    {id: 3, name: "New Flat Purchase", date: '2022-01-30', amount: "$ 1000"},
    {id: 4, name: "Extended Parking", date: '2023-07-23', amount: "$ 175"}];

export default function Expenses(props) {
    const [expensItemData, setNewExpenseItemData] = useState(INITIAL_EXPENSE_ITEMS);

    function saveExpenseDataHandler(enteredData){
        // const newAddedData = {
        //     ...enteredData
        // }        
        // setNewExpenseItemData([newAddedData, ...expensItemData])
        setNewExpenseItemData((previousExpenseItem)=>{
            return [enteredData, ...previousExpenseItem];
        })
    }

    return (
        <div className='py-3'>
            <h2>{props.heading}</h2>
            <Card >
                <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
                <ExpenseItems items={expensItemData}/>
            </Card>
        </div>
    )
  }
