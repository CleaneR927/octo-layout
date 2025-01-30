import React from 'react';
import { observer } from 'mobx-react';
import { SubTask } from '../types/TaskTypes';
import { IoIosTrash, IoIosCheckmark } from 'react-icons/io';
import '../styles/subTaskComponent.scss';
import clsx from 'clsx';

interface SubTaskComponentProps {
  subTask: SubTask;
  onDelete: (taskId: string) => void;
  onToggleCheck: () => void;
}

const SubTaskComponent: React.FC<SubTaskComponentProps> = observer(
  ({ subTask, onDelete, onToggleCheck }) => {
    return (
      <div className="sub-task">
        <label className="sub-task__checkbox">
          <input
            type="checkbox"
            checked={subTask.isChecked}
            onChange={() => onToggleCheck()}
          />
          <span className="checkmark">
            <IoIosCheckmark />
          </span>
        </label>
        <h4
          className={clsx(
            'sub-task__title',
            subTask.isChecked && 'sub-task__title--active'
          )}
        >
          {subTask.title}
        </h4>
        <IoIosTrash
          className="sub-task__button--delete"
          onClick={() => onDelete(subTask.id)}
        >
          Удалить подзадачу
        </IoIosTrash>
      </div>
    );
  }
);

export default SubTaskComponent;
