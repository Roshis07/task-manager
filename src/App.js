import React from "react";
import TaskForm from "./component/TaskForm";

const App = () => {
  const [activeTasks, setActiveTasks] = React.useState([]);
  console.log(activeTasks);

  return (
    <div class="wrapper">
      <div class="container">
        <div class="row">
          <h1 class="col text-center my-5">Task Manager</h1>
        </div>
        <TaskForm activeTasks={activeTasks} setActiveTasks={setActiveTasks} />
      </div>
    </div>
  );
};

export default App;
