import React from 'react';
export default class NewTaskForm extends React.Component{
state = {
  label: ''
}
onLabelChange = (event) => {

  this.setState({
   label: event.target.value 
  })
}

onSubmit =(event) =>{
  event.preventDefault();
  this.props.onItemAdded(this.state.label)
  this.setState({
    label: ''
  })
}

render(){
return (
  <header className="header">
      <h1>todos</h1>
      <form 
      className="form"
      onSubmit={this.onSubmit}>
      <input type="text"
      className="new-todo"
      onChange={this.onLabelChange}
      placeholder="What needs to be done?"
      value= {this.state.label}
      autoFocus/>
      <button
      className="form_button"> 
        ADD 
      </button>
      </form>
      </header>
      
    )
    }
  }

  