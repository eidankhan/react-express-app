import { useEffect, useState } from "react";
import "./App.css";
import { Employees } from "./components/Employees";

function App() {
  const BASE_URL = "http://localhost:2900/api/employees";
  
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetchAllEmployees();
  }, []);
  const fetchAllEmployees = async () => {
    const response = await fetch(BASE_URL, {
      method: "GET",
    });

    const data = await response.json();
    console.log("Data:" + data.length);
    setEmployees(data);
  };

  
  return (
    <div className="container my-5">
      <Employees employees={employees}/>
    </div>
  );
}

export default App;