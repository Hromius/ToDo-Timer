import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Timer from './Timer';
export default class Task extends React.Component{

state = {text : this.props.label } 

changeElement = (event) => {
  this.setState({
   text: event.target.value
  })
}

onSubmits =(event) =>{
  event.preventDefault();
  this.props.onChanges(this.props.id , this.state.text)
  this.props.onToggleHide() 
}



render() {

  let label = this.props.label
  let done = this.props.done
  let hide = this.props.hide
  let parametr = this.props.parametr
  let onToggleDone = this.props.onToggleDone
  let date = formatDistanceToNow(new Date(),{includeSeconds: true})
  let change = "new-todo "
  let classNamesLabel = "description "
  let classNamesElement

  
  if(parametr === 'ALL'){
    classNamesElement += "view "
  } else if (parametr === 'Completed' && !done ){
    classNamesElement = "view hide"
    
  } else if (parametr === 'Active' && done){
    classNamesElement = "view hide"
  }

  if (done){ 
    classNamesLabel += 'completed'
  }
  if (hide){
    change += " hide"
  } else { classNamesLabel += " hide"}
  return (
      <div className= {classNamesElement}>
        <input className="toggle" type="checkbox"
        onClick = { onToggleDone }
        />
        <label>
          <span className= {classNamesLabel}> 
          {label}
          <Timer/>
          </span>
          <form 
            className="form"
            onSubmit={this.onSubmits}>

          <input type="text"
            className= {change}
            onChange={this.changeElement}
            placeholder="What needs to change?"
            value={this.state.text}
            autoFocus/>
          </form>
          <span className="created">{date}</span>
          
        </label>

        <button className="icon icon-edit"
        onClick={this.onSubmits }
        >
        </button>
        
        <button className="icon icon-destroy"
          onClick={this.props.delited}>
        </button>

        
      </div>   
)

}

}

