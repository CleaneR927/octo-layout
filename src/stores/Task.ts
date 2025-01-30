import { makeAutoObservable } from 'mobx';
import { Task as TaskType, SubTask as SubTaskType } from '../types/TaskTypes';
import { v4 as uuidv4 } from 'uuid';
import SubTask from './SubTask';
import TaskStore from './TaskStore';

class Task implements TaskType {
  id: string;
  title: string;
  isChecked: boolean;
  subTasks: SubTaskType[] = [];

  constructor(
    title: string,
    id: string = uuidv4(),
    isChecked: boolean = false,
    subTasks: SubTaskType[] = []
  ) {
    this.id = id;
    this.title = title;
    this.isChecked = isChecked;
    this.subTasks = subTasks.map(
      (sub) => new SubTask(sub.title, sub.id, sub.isChecked)
    );
    makeAutoObservable(this); // Делает все свойства экземпляра класса наблюдаемыми, что позволяет автоматически обновлять пользовательский интерфейс при изменении значений свойств
  }

  toggleCheck() {
    this.isChecked = !this.isChecked;
    this.subTasks.forEach((subTask) => (subTask.isChecked = this.isChecked));
    TaskStore.saveTasks();
  }

  addSubTask(title: string) {
    const newSubTask = new SubTask(title);
    this.subTasks.push(newSubTask);
    this.checkAllSubTasks();
    TaskStore.saveTasks();
  }

  removeSubTask(subTaskId: string) {
    this.subTasks = this.subTasks.filter((subTask) => subTask.id !== subTaskId);
    this.checkAllSubTasks();
    TaskStore.saveTasks();
  }

  checkAllSubTasks() {
    this.isChecked =
      this.subTasks.length > 0 &&
      this.subTasks.every((subTask) => subTask.isChecked);
    TaskStore.saveTasks();
  }
}

export default Task;
