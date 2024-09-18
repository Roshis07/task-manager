import React from "react";

const CompletedTaskList = ({ completedTasks }) => {
  return (
    <div class="col-md">
      <h2 class="text-center">Completed Tasks</h2>
      <hr />
      <table class="table table-striped table-hover">
        <tbody id="bad-list">
          {Object.entries(completedTasks).map(([key, item]) => (
            <tr key={key}>
              <td>{item.taskName}</td>
              <td>{item.taskTime} hr(s)</td>

              <td class="text-end">
                <button class="btn btn-warning">
                  <i class="fa-solid fa-left-long"></i>
                </button>
                <button class="btn btn-danger">
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
