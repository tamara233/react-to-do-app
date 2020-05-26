import React from "react"
import toDoList from "./toDoList"
import ToDoItem from "./Components/ToDoItem"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todostate: toDoList,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevstate =>{
      const updatedState = prevstate.todostate.map(item =>{
        if(item.id == id){
          item.completed = !item.completed
        }
        return item
      })
      return {
        todostate: updatedState
      }
    })
  }
  render(){
    const toDos = this.state.todostate.map(item => {      
     return <ToDoItem
      key={item.id} 
      task={item.toDo} 
      complete={item.completed} 
      id={item.id} 
      change={this.handleChange} />
    })
    
    return(
      <div>
        {toDos}
      </div>
    )
  }
}

export default App

