import React from "react";
import TaskForm from "./component/TaskForm";
import ActiveTaskList from "./component/ActiveTaskList";
import CompletedTaskList from "./component/CompletedTaskList";

const App = () => {
  const [activeTasks, setActiveTasks] = React.useState({});

  // switch task type from active to completed or completed to active
  const taskSwitcher = (id) => {
    setActiveTasks({
      ...activeTasks,
      [id]: {
        ...activeTasks[id],
        taskType:
          activeTasks[id].taskType === "completed" ? "active" : "completed",
      },
    });
  };

  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete the task?")) {
      const { [id]: _, ...reaminingTasks } = activeTasks;
      setActiveTasks(reaminingTasks);
    }
  };
  return (
    <div class="wrapper">
      <div class="container">
        <div class="row">
          <h1 class="col text-center my-5">Task Manager</h1>
        </div>
        <TaskForm activeTasks={activeTasks} setActiveTasks={setActiveTasks} />
        <div class="row mt-5 g-2">
          <ActiveTaskList
            tasks={activeTasks}
            taskSwitcher={taskSwitcher}
            deleteTask={deleteTask}
          />
          <CompletedTaskList
            tasks={activeTasks}
            taskSwitcher={taskSwitcher}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
