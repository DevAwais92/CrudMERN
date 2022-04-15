import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { getEmployee, updateEmployee } from './APIs'
import Navbar from './Navbar'

const EditTodo = () => {

    const history = useHistory();
    const match = useRouteMatch();


    const [employee, setEmployee] = useState([])

    const { register, handleSubmit, formState: { errors } } = useForm();


    useEffect(() => {
        const fetchEmployee = async () => {
            const res = await getEmployee(match.params.id)
            setEmployee(res)

            if (res.status === 201) {
                alert("data saved")
                history.push("/home");
            }
        }
        fetchEmployee()
    }, [history, match.params.id])

    const onSubmit = async (data) => {
        await updateEmployee(data, match.params.id)
        history.push("/home")
    };
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="mt-3">
                    <h3>Edit Employee Record</h3>
                    <form method="POST" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="task">Name</label>
                            <input type="text" name="task" id="task" className="form-control" defaultValue={employee.name}  {...register("name", {
                                required: "Required",
                            })} />
                            {errors.task && errors.name.name}
                        </div>
                        <div className="form-group">
                            <label htmlFor="details">Job</label>
                            <input type="text" name="details" id="details" className="form-control" defaultValue={employee.job}  {...register("job", {
                                required: "Required"
                            })} />
                            {errors.details && errors.job.job}
                        </div>
                        <div className="form-group">
                            <label htmlFor="details">Level</label>
                            <input type="text" name="details" id="details" className="form-control" defaultValue={employee.level} {...register("level", {
                                required: "Required"
                            })} />
                            {errors.details && errors.level.level}
                        </div>
                        <div className="form-group">
                            <label htmlFor="details">Salary</label>
                            <input type="text" name="details" id="details" className="form-control" defaultValue={employee.salary} {...register("salary", {
                                required: "Required"
                            })} />
                            {errors.details && errors.salary.salary}
                        </div>
                        <div className="form-group">
                            <label htmlFor="details">Department</label>
                            <input type="text" name="details" id="details" className="form-control" defaultValue={employee.department} {...register("department", {
                                required: "Required"
                            })} />
                            {errors.details && errors.department.department}
                        </div>
                        <div className="form-group mt-3">
                            <button type="submit" name="submit" id="submit" className="btn btn-success" >Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditTodo
