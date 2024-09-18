import TaskForm from "./component/TaskForm";

const App = () => {
  return (
    <div class="wrapper">
      <div class="container">
        <div class="row">
          <h1 class="col text-center my-5">Task Manager</h1>
        </div>
        <TaskForm />
      </div>
    </div>
  );
};

export default App;
