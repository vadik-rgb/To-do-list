import logo from './logo.svg';
import './App.css';
import ToDoItem from './ToDoItem/ToDoitem';
import todosData from './todosData';
import { Component } from 'react';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      todoItems : todosData
    }
  }

  handleChange = id => {
    const index = this.state.todoItems.map(item => item.id).indexOf(id);
    this.setState(state => {
      let {todoItems} = state;
      todoItems[index].completed = true;
      return todoItems;
    })
  }
  render() {
    const {todoItems} = this.state;
    const activeTasks = todoItems.filter(task => task.completed === false);
    const completedTasks = todoItems.filter(task => task.completed === true);
    const finalTasks = [...activeTasks,...completedTasks].map(item => {
      return(
        <ToDoItem
        key={item.id}
        description={item.description}
        completed={item.completed}
        handleChange={() => {this.handleChange(item.id)}}
        />
      )
    })
    
    return (
      <div className="App">
        <div className = 'title'>
          <h1 className = 'todo'>TO-DO LIST</h1>
        </div>
        <h2 className = 'tasks'>Tasks</h2>
        {finalTasks}
      </div>
    );
  }
  
}

export default App;
