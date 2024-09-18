import React from "react";
import { randomStrGenerator } from "../helpers/utils";

const TaskForm = ({ activeTasks, setActiveTasks }) => {
  const taskFormSubmitHandler = (event) => {
    event.preventDefault();
    setActiveTasks({
      ...activeTasks,
      [randomStrGenerator(10)]: {
        taskName: event.target.taskname.value,
        taskTime: event.target.tasktime.value,
        taskType: "active",
      },
    });
  };
  return (
    <form
      onSubmit={taskFormSubmitHandler}
      className="border p-3 rounded shadow-lg"
    >
      <div class="row my-2 g-2">
        <div class="col-md-6">
          <input
            type="text"
            name="taskname"
            class="form-control task-input"
            required
            placeholder="Enter a task"
          />
        </div>

        <div class="col-md-3">
          <input
            type="number"
            name="tasktime"
            class="form-control hrs-input"
            min="1"
            max="168"
            required
            placeholder="Enter no. of hrs"
          />
        </div>

        <div class="col-md-3 text-center">
          <button class="btn btn-primary" type="submit" id="form-btn">
            <i class="fa-solid fa-plus"></i>Add New Task
          </button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
