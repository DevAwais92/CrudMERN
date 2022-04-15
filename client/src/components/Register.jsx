import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { registerUser } from './APIs'


const Register = () => {

    const history = useHistory();


    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = async (data) => {

        const res = await registerUser(data);

        if (res.status === 201) {
            alert("registered successfully")
            history.push("/home");
        } else {
            alert("user already exists!");
        }
    };


    return (
        <div>
            <div className="container">
                <div className="mt-3">
                    <h3>Register</h3>
                    <form method="POST" onSubmit={handleSubmit(submitHandler)}>
                        <div className="form-group">
                            <label htmlFor="task">Name</label>
                            <input type="name" name="name" id="name" className="form-control"  {...register("name", {
                                required: "Required",
                            })} />
                            {errors.name && errors.name}
                        </div>
                        <div className="form-group">
                            <label htmlFor="details">Email</label>
                            <input type="email" name="email" id="email" className="form-control"  {...register("email", {
                                required: "Required"
                            })} />
                            {errors.email && errors.email}
                        </div>
                        <div className="form-group">
                            <label htmlFor="details">Password</label>
                            <input type="password" name="password" id="password" className="form-control"  {...register("password", {
                                required: "Required"
                            })} />
                            {errors.password && errors.password}
                        </div>

                        <div className="form-group mt-3">
                            <button type="submit" name="submit" id="submit" className="btn btn-success" >Register</button>
                            <Link to="/" className=" m-3 text-success" >Login</Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register