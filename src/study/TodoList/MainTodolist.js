import { useState } from "react/cjs/react.development";
import Todolist from "./TodoList";


function MainTodoList() {

    const [todoList,setTodoList] = useState([
          {id:1, title:" Truong1"},
          {id:2, title:" Truong2"},
          {id:3, title:" Truong3"},
      ]);
  
      console.log("sad", todoList)
      
      const click =(todo) =>{
        console.log(todo)
        const index = todoList.findIndex( x => x.id === todo.id );
        console.log("index", index)
        if(index < 0) {return;} 
        const newTodoList = [...todoList];
        newTodoList.splice(index ,1);
        console.log(newTodoList)
        setTodoList(newTodoList);
      }
        return(
            <div>
                 <Todolist todos={todoList} onTodoClick={click} />
            </div>)
}
export default MainTodoList