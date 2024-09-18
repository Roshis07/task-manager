import React from "react";

const ActiveTaskList = ({ activeTasks }) => {
  return (
    <div class="col-md">
      <h2 class="text-center">Active Tasks</h2>
      <hr />
      <table class="table table-striped table-hover">
        <tbody id="task-list">
          {activeTasks.map((item, i) => (
            <tr key={i.id}>
              <td>{i + 1}</td>
              <td>{item.task}</td>
              <td>{item.hr} hr(s)</td>

              <td class="text-end">
                <button class="btn btn-danger">
                  <i class="fa-solid fa-trash"></i>
                </button>
                <button class="btn btn-success">
                  <i class="fa-solid fa-right-long"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveTaskList;
