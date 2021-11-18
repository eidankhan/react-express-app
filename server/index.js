const express = require('express');
const employeeRoutes = require("./employee")
const cors = require('cors');

const app = express();
const port = process.env.PORT || 2900;

app.use(cors());
app.use(express.json());
app.listen(port, () => { console.log(`App started at port: ${port}`)});

// Printing all the available routes for book
//console.log('Routes:'+bookRoutes.stack.filter(r=> r.route).map(r=>r.route.path));

app.use("/api", employeeRoutes)