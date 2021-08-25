import React from 'react';
import { useState } from 'react/cjs/react.development';
import Usefrom from './useFrom';

function Mainstatevalue() {
    
    const [todoList,setTodoList] = useState([
        {id:1, title:" Truong1"},
        {id:2, title:" Truong2"},
        {id:3, title:" Truong3"},
    ]); 

    const handleTodoFormSubmit = (formValues) => {
            console.log('form sumit', formValues);
            const newTodo = {
                id:todoList.length +1,
                ...formValues,
            };
            const newTodoList = [...todoList]
            newTodoList.push(newTodo);
            setTodoList(newTodoList);
            console.log('New List', newTodoList);
    }

    return (
        <>  <ul>
                {todoList.map(todo => ( 
                    <li key={todo.id} > ID: {todo.id} :
                        {todo.title}
                    </li>
                ) )}
            </ul>
             <Usefrom Submit ={handleTodoFormSubmit} /> {/* khi useform sumbit nó sẽ gọi cái hàm handtodoform */}
        </>
    )
}


export default Mainstatevalue;
