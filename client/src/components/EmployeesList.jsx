import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getEmployees } from './APIs'
import axios from 'axios'
import Navbar from './Navbar'

const TodoList = () => {

    let [items, setItems] = useState([]);

    useEffect(() => {

        const fetchItems = async () => {
            const getEmployeesData = await getEmployees()
            setItems(getEmployeesData)

        }
        fetchItems()
    }, [])


    const deleteHandler = async (id) => {
        try {
            if (window.confirm('Are you sure you want to delete')) {
                await axios.delete(`http://localhost:8000/api/employees/${id}`);
                items = items.filter(employee => employee._id !== id);
                setItems(items)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="mt-3">
                        <h3>Employees Record</h3>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        Job
                                    </th>
                                    <th>
                                        Salary
                                    </th>
                                    <th>
                                        Level
                                    </th>
                                    <th>
                                        Department
                                    </th>
                                    <th>
                                        Hiring
                                    </th>
                                    <th>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    items.map((employee) => {
                                        return (
                                            <tr key={employee._id}>
                                                <td>
                                                    {employee.name}
                                                </td>
                                                <td>
                                                    {employee.job}
                                                </td>
                                                <td>
                                                    {employee.salary}
                                                </td>
                                                <td>
                                                    {employee.level}
                                                </td>
                                                <td>
                                                    {employee.department}
                                                </td>
                                                <td>
                                                    {employee.createdAt.substring(0, 10)}
                                                </td>
                                                <td>
                                                    <Link className="btn btn-success m-1" to={`/edit/${employee._id}`}>Edit</Link>
                                                    <Link className="btn btn-danger" onClick={() => deleteHandler(employee._id)}>Delete</Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TodoList
