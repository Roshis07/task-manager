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

    event.target.reset();
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
            placeholder="Enter a task"
            class="form-control task-input"
            required
          />
        </div>

        <div class="col-md-3">
          <input
            type="number"
            name="tasktime"
            min="1"
            max="168"
            placeholder="Enter no. of hrs"
            class="form-control hrs-input"
            required
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
