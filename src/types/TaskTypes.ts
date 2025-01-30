export interface Task {
  id: string;
  title: string;
  isChecked: boolean;
  subTasks: SubTask[];
  toggleCheck: () => void;
  addSubTask: (title: string) => void;
  removeSubTask: (subTaskId: string) => void;
  checkAllSubTasks: () => void;
}

export interface SubTask {
  id: string;
  title: string;
  isChecked: boolean;
  toggleCheck: () => void;
}
