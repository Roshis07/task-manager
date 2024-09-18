import React from "react";

const CompletedTaskList = ({ tasks, taskSwitcher, deleteTask }) => {
  return (
    <div class="col-md">
      <h2 class="text-center">Completed Tasks</h2>
      <hr />
      <table class="table table-striped table-hover">
        <tbody id="bad-list">
          {Object.entries(tasks)
            .filter(([_, item]) => item.taskType === "completed")
            .map(([key, item]) => (
              <tr key={key}>
                <td>{item.taskName}</td>
                <td>{item.taskTime} hr(s)</td>

                <td class="text-end">
                  <button
                    onClick={() => taskSwitcher(key)}
                    class="btn btn-warning mx-2"
                  >
                    <i class="fa-solid fa-left-long"></i>
                  </button>
                  <button
                    onClick={() => deleteTask(key)}
                    class="btn btn-danger"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompletedTaskList;
