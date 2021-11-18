import React from "react";
import { EmployeeItem } from "./EmployeeItem";

export const Employees = (props) => {
  const { employees } = props;

  return (
    <div className="container my-2">
      {employees.length <= 0 ? (
        <h3 className="text-muted"> You don't have employees, Hire some  </h3>
      ) : (
        <div className="row">
          <h2 className="text-muted"> Our Employees</h2>
          {employees.map((item) => {
            return (
              <div className="col-md-4 my-2" key={item.id}>
                <EmployeeItem employee={item} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};