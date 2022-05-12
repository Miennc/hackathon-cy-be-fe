import React from 'react';
import {useFormik} from 'formik';
import {Link} from "react-router-dom";
import * as Yup from 'yup';
import {authService} from "../services/authService";

const Login = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({

            username: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Enter user name pls'),
            // email: Yup.string().email('Invalid email address').required('Enter email pls'),
            password: Yup.string()
                .min(4, 'Must have 4 characters or more')
                .required('Enter password pls'),
        }),
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            // alert(values.username)
            authService.doLogin(values).then((res) => {
                alert('yeeeeeeeeeeeee')
                localStorage.setItem('accessToken', res.data.accessToken);
                localStorage.setItem('email', res.data.email);
            }).catch((e) => {
                console.log(e)
            })
        },
    });
    
    const forgotPassword = () => {
      
    }


    return (
        <div className="font-sans">
            <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                <div className="relative sm:max-w-sm w-full">
                    <div
                        className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6">
                    </div>
                    <div
                        className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                    <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                        <label className="block mt-3 text-sm text-gray-700 text-center font-semibold text-2xl">
                            Login
                        </label>
                        <form method="" action="" className="mt-5" onSubmit={formik.handleSubmit}>

                            <div className="mt-3">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.username}
                                    placeholder="User name"
                                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                                />
                                {formik.touched.username && formik.errors.username ? (
                                    <p className="error font-semibold text-sm italic text-red-600">
                                        <div>{formik.errors.username}</div>
                                    </p>
                                ) : null}
                            </div>

                            {/*<div className="mt-3">*/}
                            {/*    <input*/}
                            {/*        id="email"*/}
                            {/*        name="email"*/}
                            {/*        type="email"*/}
                            {/*        onChange={formik.handleChange}*/}
                            {/*        onBlur={formik.handleBlur}*/}
                            {/*        value={formik.values.email}*/}
                            {/*        placeholder="Email"*/}
                            {/*        className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"*/}
                            {/*    />*/}
                            {/*    {formik.touched.email && formik.errors.email ? (*/}
                            {/*        <p className="error font-semibold text-sm italic text-red-600"> {formik.errors.email}</p>*/}
                            {/*    ) : null}*/}
                            {/*</div>*/}

                            <div className="mt-3">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    placeholder="Password"
                                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                                />
                                <p className="error font-semibold text-red-600 text-sm italic"> {formik.errors.password} </p>
                            </div>

                            <div className="mt-3">
                                <button
                                    className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Login
                                </button>
                            </div>

                            <div className="mt-3">
                                <div className="flex justify-center items-center">
                                    <label className="mr-2">You need an account?</label>
                                    <Link to="/signup">
                                        <a className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">Sign
                                            up</a>
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-3">
                                <div className="flex justify-center items-center">
                                    <a
                                        onClick={forgotPassword}
                                        className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">Forgot
                                        password</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;