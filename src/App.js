import React from "react";
import TaskForm from "./component/TaskForm";
import ActiveTaskList from "./component/ActiveTaskList";
import CompletedTaskList from "./component/CompletedTaskList";

const App = () => {
  const [activeTasks, setActiveTasks] = React.useState([]);
  const [completedTasks, setCompletedTasks] = React.useState([]);
  console.log(activeTasks);

  return (
    <div class="wrapper">
      <div class="container">
        <div class="row">
          <h1 class="col text-center my-5">Task Manager</h1>
        </div>
        <TaskForm activeTasks={activeTasks} setActiveTasks={setActiveTasks} />
        <div class="row mt-5 g-2">
          <ActiveTaskList activeTasks={activeTasks} />
          <CompletedTaskList completedTasks={completedTasks} />
        </div>
      </div>
    </div>
  );
};

export default App;
