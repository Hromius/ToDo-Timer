import React from 'react';
import ReactDOM from 'react-dom';
import NewTaskForm from './components/NewTaskForm.js';
import TaskList from './components/TaskList.js';
import propTypes from 'prop-types';
import Footer from './components/Footer.js';
export default class App extends React.Component {
  
  maxID = 50

  state = {
    taskLists: []
  }

  createTodoItem(label){
    return {
      label,
      done: false,
      hide: true,
      id : this.maxID++,
    } 
  }

  deliteItem = (id)=>{
    this.setState( (state) => {
    let index = state.taskLists.findIndex((el) => el.id === id);
    
    let newArr = [
      ...state.taskLists.slice(0,index),
      ...state.taskLists.slice(index + 1) ];

    return { taskLists : newArr }
    })
  }


  changeElement =(id, text ) =>{

  this.setState( (state) => {

  let index = state.taskLists.findIndex((el) => el.id === id);

  let oldItem = state.taskLists[index]
  
  let newIndex = {...oldItem, label: text }
  
  let newArr =[
  ...state.taskLists.slice(0,index),
     newIndex,
  ...state.taskLists.slice(index + 1)
  ]
  return { taskLists : newArr }
  })
  }

  addItem = (text)=>{
    let newItem = this.createTodoItem(text)
    
    this.setState( (state) => {
    const newArr = [
    ...state.taskLists.slice(), newItem
    ]
    return { taskLists : newArr }
    })
  }

  onToggleDone = (id) => {
    this.setState((state) =>{
    let index = state.taskLists.findIndex((el) => el.id === id);

    let oldItem = state.taskLists[index]
    let newItem = {...oldItem, done: !oldItem.done }
    const newArr = [
      ...state.taskLists.slice(0,index),
      newItem,
      ...state.taskLists.slice(index + 1) ];
      
     return{
      taskLists : newArr
      
     } 
    }) 
  }
  onToggleHide = (id) => {
    this.setState((state) =>{
      let index = state.taskLists.findIndex((el) => el.id === id);
  
      let oldItem = state.taskLists[index]
      let newItem = {...oldItem, hide: !oldItem.hide }
      const newArr = [
        ...state.taskLists.slice(0,index),
        newItem,
        ...state.taskLists.slice(index + 1) ];
        
       return{
        taskLists : newArr
        
       } 
      }) 
  }

  clearCompleted = () =>{

    this.setState( (state) => {
    let newArr = state.taskLists.filter(el => !el.done)
    return {
    taskLists : newArr
    }
    })
  }

  filters = (param) =>{

    this.setState( (state) => {

    if (param === 'ALL') {
      state.parametr = "ALL"
      
    } else if (param === 'Active'){
      state.parametr = 'Active'
      
    } else if (param === 'Completed'){
      state.parametr = 'Completed'
      
    }
    return{parametr: state.parametr }
    })
    }

  render(){

    const { taskLists } = this.state;
    const itemsLeft = taskLists.filter((element) => !element.done).length;
    
    return ( 
      <section className="todoapp">
        <NewTaskForm onItemAdded = {this.addItem}/>
        <section className="main">
        <TaskList 
         tasks = {taskLists}
         parametr ={this.state.parametr}
         delited = {this.deliteItem }
         onToggleDone = {this.onToggleDone}
         onToggleHide = {this.onToggleHide}
         changeElement = {this.changeElement}
         showComplited = {this.showComplited}
         
        />
        </section>
        <Footer
        left = {itemsLeft}
        clearCompleted = {this.clearCompleted}
        showComplited = {this.showComplited}
        filters = {this.filters}/>
      </section>
      )
  }
}

App.propTypes ={
  taskLists: propTypes.arrayOf(propTypes.object)
 }

ReactDOM.render(
    <App/> ,
  document.getElementById('root')
);

