import React from 'react';


let Footer = ({left, filters , clearCompleted}) => {
    return ( <footer className="footer">
    <span className="todo-count">{left} items left</span>
    <ul className="filters">
          <li>
            <button className="selected"
            onClick={()=> {
              filters("ALL")}}
            >
              All</button>
          </li>
          <li>
            <button
            
            onClick={()=> {
              
              filters('Active')}}>
              Active
            </button>
          </li>

          <li>
            <button
            onClick={()=> {
              
              filters('Completed')}}
            >
              Completed
            </button>
          </li>
    </ul>
    
    <button 
    
    onClick={clearCompleted}
    className="clear-completed">Clear completed
    
    </button>
  </footer>
    )
  }

  
  export default Footer;  