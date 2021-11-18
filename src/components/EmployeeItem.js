import React from "react";

export const EmployeeItem = (props) => {
  const { employee } = props;
  return (
    <div className="card">
      <div className="card-header d-flex flex-row-reverse">
      <i class="fas fa-user-edit fs-5 text-success"></i>
      <i class="fas fa-trash fs-5 px-3 text-danger"></i>
      </div>
      <div className="card-body">
        <h5 className="card-title">{employee.name}</h5>
        <p className="card-text"> {employee.position} </p>
      </div>
    </div>
  );
};