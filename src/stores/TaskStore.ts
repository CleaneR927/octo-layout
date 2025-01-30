import { makeAutoObservable } from 'mobx';
import Task from './Task';
import { Task as TaskType, SubTask as SubTaskType } from '../types/TaskTypes';
import SubTask from './SubTask';

class TaskStore {
  tasks: TaskType[] = [];

  constructor() {
    makeAutoObservable(this);
    this.loadTasks();
  }

  loadTasks() {
    const tasksFromStorage = localStorage.getItem('tasks');
    if (tasksFromStorage) {
      const parsedTasks = JSON.parse(tasksFromStorage);
      this.tasks = parsedTasks.map((taskData: TaskType) => {
        return new Task(
          taskData.title,
          taskData.id,
          taskData.isChecked,
          taskData.subTasks.map((subTaskData: SubTaskType) => {
            return new SubTask(
              subTaskData.title,
              subTaskData.id,
              subTaskData.isChecked
            );
          })
        );
      });
    }
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  addTask(title: string) {
    const newTask = new Task(title);
    this.tasks.push(newTask);
    this.saveTasks();
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }
}

export default new TaskStore();
