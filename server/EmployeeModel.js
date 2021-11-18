const mongoose = require("mongoose");


const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    salary:{
        type: Number,
    },
    position:{
        type: String,
    }
});

module.exports = mongoose.model("employees", employeeSchema);