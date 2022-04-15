import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { loginUser } from './APIs'


const Login = () => {

    const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = async (data) => {

        const res = await loginUser(data);

        if (res.status === 201) {
            alert("Logged in successfully")
            history.push("/home");
        } else {
            alert("Invalid credentials or user not found")
        }
    };


    return (
        <div>
            <div className="container">
                <div className="mt-3">
                    <h3>Login</h3>
                    <form method="POST" onSubmit={handleSubmit(submitHandler)}>
                        <div className="form-group">
                            <label htmlFor="task">Email</label>
                            <input type="email" name="email" id="email" className="form-control"  {...register("email", {
                                required: "Required",
                            })} />
                            {errors.task && errors.email.email}
                        </div>
                        <div className="form-group">
                            <label htmlFor="details">Password</label>
                            <input type="password" name="password" id="password" className="form-control"  {...register("password", {
                                required: "Required"
                            })} />
                            {errors.password && errors.password.password}
                        </div>
                        <div className="form-group mt-3">
                            <button type="submit" name="submit" id="submit" className="btn btn-success" >Login</button>
                            <Link to="/register" className="m-3 text-success" >Register</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login