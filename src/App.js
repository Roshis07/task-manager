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
  return (
    <div class="wrapper">
      <div class="container">
        <div class="row">
          <h1 class="col text-center my-5">Task Manager</h1>
        </div>
        <TaskForm activeTasks={activeTasks} setActiveTasks={setActiveTasks} />
        <div class="row mt-5 g-2">
          <ActiveTaskList tasks={activeTasks} taskSwitcher={taskSwitcher} />
          <CompletedTaskList tasks={activeTasks} taskSwitcher={taskSwitcher} />
        </div>
      </div>
    </div>
  );
};

export default App;
