const express = require("express");
const router = express.Router();

const Employee = require("./EmployeeModel");

router.get("/employees", async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
});


router.post("/employees", async (req, res) => {
    const {name, salary, position} = req.body;
    const employee = await Employee({
        name,
        salary,
        position,
    });
    employee.save();
    res.json(employee);
    // const savedEmployee = await employee.save();
    // res.json(savedEmployee);
})


/*
const generateUniqeId = () => {
    return Math.floor(Math.random()*10000) 
}

let employees = [
    {
        "id": generateUniqeId(),
        "name": "Eidan Khan",
        "salary": 55000,
        "position": "Software Design Engineer"
    },
    {
        "id": generateUniqeId(),
        "name": "Amir Hyder",
        "salary": 65000,
        "position": "Java App Consultant"
    }
];

router.get('/employees', (req, res) => {
    
    res.json(employees);
})

router.post("/employees", (req, res) => {
    const {name, salary, position} = req.body;
    const employee = {
        "id": generateUniqeId(),
        "name": name,
        "salary": salary,
        "position": position,
    }
    employees.push(employee);
    res.json(employee);
})

router.delete("/employees/:id", (req, res) => {
    employees = employees.filter( (item) => { return item.id != req.params.id});
    res.send("Deleted employee with id:"+req.params.id);
})

router.put("/employees/:id", (req, res) => {
    const {name, salary, position} = req.body;
    const id = req.params.id;
    let employee = employees.find(obj => obj.id == id);
    if(employee){
        employee.name = name;
        employee.salary = salary;
        employee.position = position;
    }
    
    res.send(employee)
    
})

*/
module.exports = router;