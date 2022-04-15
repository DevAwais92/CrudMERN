const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    job: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    level: {
        type: Number,
        default: 1
    },
    department: {
        type: String,
        required: true,
    }
}, { timestamps: true })

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    }
}, { timestamps: true })

const employeeDB = mongoose.model("employee", employeeSchema);
const userDB = mongoose.model("user", userSchema);

module.exports = { userDB, employeeDB };