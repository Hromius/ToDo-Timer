import React from 'react';

export default class changeElement extends React.Component{

    state = {label :this.props.label } 

    changeElement = (event) => {
      this.setState({
       label: event.target.value
      })
    }
    
    onSubmits =(event) =>{
      const { label } = this.state;
      event.preventDefault();
      this.props.onChanges(label)
      
    }

    render() {
        return (
        <form 
      className="form"
      onSubmit={this.onSubmits}
      >
          <input type="text"
        className="new-todo"
        
        onChange={this.changeElement}
        placeholder="What needs to change?"
        value={this.state.label}
        
        autoFocus/>
        </form>

        )


    }







}