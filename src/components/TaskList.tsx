import React, { useState } from 'react';
import { observer } from 'mobx-react';
import TaskStore from '../stores/TaskStore';
import TaskComponent from './TaskComponent';
import Modal from './Modal';
import ModalInputForm from './ModalInputForm';
import { Task as TaskType } from '../types/TaskTypes';
import '../styles/taskList.scss';

const TaskList: React.FC = observer(() => {
  const store = TaskStore;
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddTask = (title: string) => {
    store.addTask(title);
    setModalOpen(false);
  };

  const handleDeleteTask = (taskId: string) => {
    store.deleteTask(taskId);
  };

  return (
    <div className="tasks">
      <h2 className="tasks__title">Tasks</h2>
      <ul className="tasks__list">
        {store.tasks.map((task: TaskType) => (
          <li key={task.id} className="tasks__item">
            <TaskComponent task={task} onDelete={handleDeleteTask} />
          </li>
        ))}
      </ul>
      <button className="tasks__button" onClick={() => setModalOpen(true)}>
        Add Task
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <ModalInputForm onSubmit={handleAddTask} buttonLabel="Add Task" />
      </Modal>
    </div>
  );
});

export default TaskList;
