import React from 'react'
import PropTypes from 'prop-types'


// hienj ra 1 list 
function Usestate2(props) {
    const {todos , onTodoClick} = props;

    return (
        <>
            
            <ul>
                {todos.map(todo => (
                    <li key ={todo.id} > {todo.title} </li>
                ))}
            </ul>
        </>
    )
}

Usestate2.propTypes = {
    todos: PropTypes.array,
    onTodoClick : PropTypes.func,
}

Usestate2.defaultProps = {
    todos:[],
    onTodoClick: null,
}


export default Usestate2
