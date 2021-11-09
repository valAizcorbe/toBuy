import React from 'react';
import Todo from '../todo/index'

const List = ({todos}) => {

    console.log(todos)
    return(
        <div>
            <ul>
            {todos.map(todo => (
                <Todo 
                text={todo.text}
                completed={todo.completed}/>
                ))}
            </ul>
           
        </div>
    )
}

export default List;