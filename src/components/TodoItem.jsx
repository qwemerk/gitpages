import React from 'react';
import "../static/styles.css";
function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <div className='todo-row'>
            <span className='todo-span'>
            <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            />
            <span >{todo.title}</span>
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
        </div>
    );
}

export default TodoItem;
