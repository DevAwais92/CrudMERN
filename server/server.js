const express = require('express');
const app = express();
const route = express.Router();
const cors = require('cors');
const mongoose = require('mongoose');

const { employeeDB, userDB } = require('./schema')

const morgan = require('morgan');

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(express.urlencoded({ extended: false }));


mongoose.connect("mongodb://developerawais:developerawais@lovieaurorastoredb-shard-00-00.yotnr.mongodb.net:27017,lovieaurorastoredb-shard-00-01.yotnr.mongodb.net:27017,lovieaurorastoredb-shard-00-02.yotnr.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-d080ig-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

mongoose.connection.once("open", () => {
    console.log(`mongoDB connected`);
})

app.use(express.json())
app.use(route)

//multer middlewares
app.use(morgan('dev'))

//REST APIs


// api to get all todos

route.post("/api/login", async (req, res) => {

    try {
        const {
            email,
            password
        } = req.body;

        const userExist = await userDB.findOne({
            email
        });

        if (!userExist) {
            res.status(401).send('user does not exist');
        } 

        if (userExist && password === userExist.password) {
            res.status(201).json(userExist);
        }

    } catch (error) {
        res.status(401).json(error);
    }

})

// api to insert todo

route.post("/api/register", async (req, res) => {

    try {

        const {
            name,
            email,
            password
        } = req.body;

        const userExist = await userDB.findOne({
            email
        });

        if (userExist) {
            res.status(401).send('user already exists');
        } else {

            const user = await userDB.create({
                name,
                email,
                password
            });
    
            if (user) {
                res.status(201).json(user)
            };

        }


    } catch (error) {
        res.status(401).json(error);
    }

})


// api to insert todo

route.post("/api/employees", async (req, res) => {

    try {

        const { name, job, level, salary, department } = req.body;

        const resp = await employeeDB.create({ name, job, salary, department, level })

        if (resp) {
            res.status(201).json({ message: "employee registered" })
        }

    } catch (error) {
        res.status(401).json(error);
    }

})

// api to get all todos

route.get("/api/employees", async (req, res) => {

    try {

        const result = await employeeDB.find({})
        res.status(201).json(result)

    } catch (error) {
        res.status(401).json(error);
    }

})

// api to get specific todo

route.get("/api/employees/:id", async (req, res) => {

    try {

        const id = req.params.id;
        const result = await employeeDB.findById(id)
        res.status(201).json(result)

    } catch (error) {
        res.status(401).json(error);
    }

})

//api to update specific todo

route.patch("/api/employees/:id", async (req, res) => {

    try {
        const { name, job, department, salary, level } = req.body;
        const id = req.params.id;
        const result = await employeeDB.findByIdAndUpdate(id, { name, job, department, salary, level });
        res.status(201).json(result)

    } catch (error) {
        res.status(401).json(error);
    }

})

//api to delete specific todo

route.delete("/api/employees/:id", async (req, res) => {

    try {

        const id = req.params.id;
        const result = await employeeDB.findByIdAndDelete(id);

        if (result) {
            res.status(201).json({ message: " employee deleted" })
        }


    } catch (error) {
        res.status(401).json(error);
    }

})

const PORT = process.env.PORT || 8000

//Server Listener
app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
})




