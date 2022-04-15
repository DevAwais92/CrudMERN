import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { createEmployee } from './APIs'
import Navbar from './Navbar'

const CreateEmployee = () => {

    const history = useHistory();


    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = async (data) => {

        const res = await createEmployee(data);        

        if (res.status === 201) {
            alert("data saved")
            history.push("/home");
        } else {
            alert("data not saved")
        }
    };


    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="mt-3">
                    <h3>Create Employee Record</h3>
                    <form method="POST" onSubmit={handleSubmit(submitHandler)}>
                        <div className="form-group">
                            <label htmlFor="task">Name</label>
                            <input type="text" name="task" id="task" className="form-control"  {...register("name", {
                                required: "Required",
                            })} />
                            {errors.task && errors.name.name}
                        </div>
                        <div className="form-group">
                            <label htmlFor="details">Job</label>
                            <input type="text" name="details" id="details" className="form-control"  {...register("job", {
                                required: "Required"
                            })} />
                            {errors.details && errors.job.job}
                        </div>
                        <div className="form-group">
                            <label htmlFor="details">Level</label>
                            <input type="text" name="details" id="details" className="form-control"  {...register("level", {
                                required: "Required"
                            })} />
                            {errors.details && errors.level.level}
                        </div>
                        <div className="form-group">
                            <label htmlFor="details">Salary</label>
                            <input type="text" name="details" id="details" className="form-control"  {...register("salary", {
                                required: "Required"
                            })} />
                            {errors.details && errors.salary.salary}
                        </div>
                        <div className="form-group">
                            <label htmlFor="details">Department</label>
                            <input type="text" name="details" id="details" className="form-control"  {...register("department", {
                                required: "Required"
                            })} />
                            {errors.details && errors.department.department}
                        </div>
                        <div className="form-group mt-3">
                            <button type="submit" name="submit" id="submit" className="btn btn-success" >Create Record</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateEmployee