import React from 'react';
import Task from './Task.js';
import propTypes from 'prop-types';


function TaskList({
  tasks, parametr, delited, onToggleDone, onToggleHide, changeElement, showComplited,
}) {
  return (

    <ul className="todo-list">

      { tasks.map((item) => (
        <li key={item.id}>
          <Task
            label={item.label}
            id={item.id}
            parametr={parametr}
            done={item.done}
            hide={item.hide}
            delited={() => delited(item.id)}
            onToggleDone={() => onToggleDone(item.id)}
            onToggleHide={() => onToggleHide(item.id)}
            onChanges={changeElement}
            showComplited={showComplited}
          />
        </li>
      ))}
    </ul>

  );
}

TaskList.defaultProps = {

  parametr: 'ALL',
  tasks: [],
  delited: () => {},
  onToggleDone: () => {},
  onToggleHide: () => {},
  changeElement: () => {},
  showComplited: () => {},
};

TaskList.propTypes = {
  tasks: propTypes.arrayOf(propTypes.object),
  parametr: propTypes.string,
  delited: propTypes.func,
  onToggleDone: propTypes.func,
  onToggleHide: propTypes.func,
  changeElement: propTypes.func,
  showComplited: propTypes.func,
};

export default TaskList;