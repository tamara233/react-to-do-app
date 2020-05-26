import React from "react";
  
const ToDoItem = (props) =>{
   let completedStyle = {
       fontStyle: "italic",
       color: "grey",
       textDecoration: "line-through",
   }
    return (
    <div className="todo-item">
        <input 
            type ="checkbox" 
            onChange={() => props.change(props.id) } 
            checked={props.complete}            
            />
        <label style={props.complete ? completedStyle : null} >{props.task} </label>
       
    </div>
    )
}


export default ToDoItem;