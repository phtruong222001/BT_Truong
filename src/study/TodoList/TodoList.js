import React from 'react';
import PropTypes from 'prop-types';

Todolist.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

Todolist.defaultProps = {
    todos:[],
    onTodoClick: null,
};



function Todolist(props) {
    const {todos, onTodoClick} = props;  

    const click = (todo) =>{
        if(onTodoClick){
            onTodoClick(todo);
        }

    }

    return (
        <>
            <ul>
                {todos.map(todo => ( 
                    <li key={todo.id}
                        onClick={() => click(todo)}
                    >
                        {todo.title}
                    </li>
                 ) )}
            </ul>
        </>
    )
}


export default Todolist;
