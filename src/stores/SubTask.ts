import { makeAutoObservable } from 'mobx';
import { SubTask as SubTaskType } from '../types/TaskTypes';
import { v4 as uuidv4 } from 'uuid';

class SubTask implements SubTaskType {
  id: string;
  title: string;
  isChecked: boolean;

  constructor(
    title: string,
    id: string = uuidv4(),
    isChecked: boolean = false
  ) {
    this.title = title;
    this.id = id;
    this.isChecked = isChecked;
    makeAutoObservable(this);
  }

  toggleCheck() {
    this.isChecked = !this.isChecked;
  }
}

export default SubTask;
