
//getting API for showing all the data
export const getEmployees = () => fetch("http://localhost:8000/api/employees").then(res => res.json())

//getting API for inserting the data
export const createEmployee = (data) => fetch("http://localhost:8000/api/employees", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})

//getting API for updating specific data
export const updateEmployee = (data, id) => fetch(`http://localhost:8000/api/employees/${id}`, {
  method: "PATCH",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})

//getting API for deleting specific data
export const deleteEmployee = (id) => fetch(`http://localhost:8000/api/employees/${id}`, {
  method: "DELETE",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
})

//getting API for getting specific data
export const getEmployee = (id) => fetch(`http://localhost:8000/api/employees/${id}`).then(res => res.json())

//getting API for login user
export const loginUser = (data) => fetch("http://localhost:8000/api/login", {
  method: "POST",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  body: JSON.stringify(data)
})

//getting API for registering user
export const registerUser = (data) => fetch("http://localhost:8000/api/register", {
  method: "POST",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  body: JSON.stringify(data)
})