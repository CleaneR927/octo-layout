import React, { useState } from 'react';
import { observer } from 'mobx-react';
import Task from '../stores/Task';
import Modal from './Modal';
import ModalInputForm from './ModalInputForm';
import SubTaskComponent from './SubTaskComponent';
import { IoIosAddCircle, IoIosCheckmark, IoIosTrash } from 'react-icons/io';
import clsx from 'clsx';
import '../styles/taskComponent.scss';

interface TaskComponentProps {
  task: Task;
  onDelete: (taskId: string) => void;
}

const TaskComponent: React.FC<TaskComponentProps> = observer(
  ({ task, onDelete }) => {
    const [isSubTaskModalOpen, setSubTaskModalOpen] = useState(false);

    const handleToggleCheck = () => {
      task.toggleCheck();
      // task.checkAllSubTasks();
    };

    const handleDelete = () => {
      onDelete(task.id);
    };

    const handleAddSubTask = (title: string) => {
      task.addSubTask(title);
      setSubTaskModalOpen(false);
    };

    return (
      <div
        className={clsx('task', task.subTasks.length === 0 && 'no-sub-tasks')}
      >
        <label className="task__checkbox">
          <input
            type="checkbox"
            checked={task.isChecked}
            onChange={handleToggleCheck}
          />
          <span className="checkmark">
            <IoIosCheckmark />
          </span>
        </label>
        <h3
          className={clsx(
            'task__title',
            task.isChecked && 'task__title--active'
          )}
        >
          {task.title}
        </h3>
        <div className="task__button">
          <IoIosAddCircle
            className="task__button--add"
            onClick={() => setSubTaskModalOpen(true)}
          >
            Добавить подзадачу
          </IoIosAddCircle>
          <IoIosTrash className="task__button--delete" onClick={handleDelete}>
            Удалить
          </IoIosTrash>
        </div>

        <Modal
          isOpen={isSubTaskModalOpen}
          onClose={() => setSubTaskModalOpen(false)}
        >
          <ModalInputForm
            onSubmit={handleAddSubTask}
            buttonLabel="Add Subtask"
          />
        </Modal>

        <div
          className={clsx(
            'task__sub-tasks',
            task.subTasks.length > 0 && 'has-sub-tasks'
          )}
        >
          {task.subTasks.map((subTask) => (
            <SubTaskComponent
              key={subTask.id}
              subTask={subTask}
              onDelete={(id) => task.removeSubTask(id)}
              onToggleCheck={() => {
                subTask.toggleCheck();
                task.checkAllSubTasks();
              }}
            />
          ))}
        </div>
      </div>
    );
  }
);

export default TaskComponent;
