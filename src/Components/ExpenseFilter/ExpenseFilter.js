import React from 'react'
import './ExpenseFilter.css'

export default function ExpenseFilter(props) {
    
    function onSelectYear(event){
        props.onSelectedFilter(event.target.value)
    }

    return (
        <div className='col-md-12 mb-3' style={{float:"right"}}>
            <div className="col-md-3" style={{float:"right"}}>
                <select value={props.selectedYear} onChange={onSelectYear} className="form-control" >
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                </select>
            </div>
        </div>
    )
}
