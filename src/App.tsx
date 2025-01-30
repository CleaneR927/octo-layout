import React from 'react';
import TaskList from './components/TaskList';
import './styles/app.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1 className="app__title">Task Manager</h1>
      <TaskList />
    </div>
  );
};

export default App;

