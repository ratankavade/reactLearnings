import React, {useState} from 'react'
import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate'
import ExpenseName from './ExpenseName'
import ExpenseAmount from './ExpenseAmount'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter'
import NoExpenseText from './NoExpenseText'

export default function ExpenseItems(props) {
  const [selectedYear, setSelectedYear] = useState('2020');

  function selectedFilterHandler(selectedFilter){
    setSelectedYear(selectedFilter);
    console.log(selectedYear)
    
  }

  const fiteredExpense = props.items.filter((exp) => {
    return new Date(exp.date).getFullYear().toString() === selectedYear;
  })
  
  return (
    <div className='col-md-12'>
      <ExpenseFilter selectedYear={selectedYear} onSelectedFilter={selectedFilterHandler}/>
      {fiteredExpense.length === 0 ? (<NoExpenseText />) : (fiteredExpense.map((item, i) => {
        return <div key={i} className='cards mb-3'>
        <ExpenseDate date={new Date(item.date)}/>
        <ExpenseName name={item.name}/>
        <ExpenseAmount amount={item.amount}/>
      </div>
      }))}
      
    </div>
    
  )
}
