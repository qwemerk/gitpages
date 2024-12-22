// src/App.jsx
import React, { useState } from 'react';
import "../static/styles.css";
import TodoList from '../components/TodoList';
function App() {




  const [todos, setTodos] = useState([
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Read a book', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');


  const [filter, setFilter] = useState('all');
  
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  
  const filteredTodos = (todos) => {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'incomplete':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
      );
  };

  

  const addTodo = (e) => {
      e.preventDefault();
      if (!newTodo) return;
      const newTodoItem = {
        id: Date.now(),
        title: newTodo,
        completed: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    };

    const deleteTodo = (id) => {
      setTodos(todos.filter((filteredTodos) => todo.id !== id));
  };  
  




  return (
      <div className='main-div'>
      <h1>My To-Do List</h1>
      <form onSubmit={addTodo} className='input-row'>
      <input
      className='task-input'
      type="text"
      value={newTodo}
      onChange={(e) => setNewTodo(e.target.value)}
      placeholder="Add new task..."
      />
      
      <button type="submit">Add</button>
      </form>
      <div className='options-div'>
      <button onClick={() => handleFilterChange('all')}>Все</button>
          <button onClick={() => handleFilterChange('completed')}>Выполненные</button>
          <button onClick={() => handleFilterChange('incomplete')}>Невыполненные</button>
        </div>
      <TodoList todos={filteredTodos(todos)} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
  );



   
}


export default App;
 
