import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Link} from "react-router-dom";

const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            fullName: '',
            userName: '',
            email: '',
            password: '',
            rePassword: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Enter full name pls'),
            userName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Enter user name pls'),
            email: Yup.string().email('Invalid email address').required('Enter email pls'),
            password: Yup.string()
                .min(4, 'Must have 4 characters or more')
                .required('Enter password pls'),
            rePassword: Yup.string().when("password", {
                is: val => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "Both password need to be the same"
                )
            })
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            alert(values.userName)
        },
    });



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
                            Sign Up
                        </label>
                        <form method="" action="" className="mt-5" onSubmit={formik.handleSubmit}>

                            <div>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.fullName}
                                    placeholder="Full name"
                                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                                />
                                {formik.touched.fullName && formik.errors.fullName ? (
                                        <p className="error font-semibold text-sm italic text-red-600"><div>{formik.errors.fullName}</div></p>
                                ) : null}
                            </div>

                            <div className="mt-3">
                                <input
                                    id="userName"
                                    name="userName"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.userName}
                                    placeholder="User name"
                                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                                />
                                {formik.touched.userName && formik.errors.userName ? (
                                        <p className="error font-semibold text-sm italic text-red-600"><div>{formik.errors.userName}</div></p>
                                ) : null}
                            </div>

                            <div className="mt-3">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    placeholder="Email"
                                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                                />
                                {formik.touched.email && formik.errors.email ? (
                                        <p className="error font-semibold text-sm italic text-red-600"> {formik.errors.email}</p>
                                ) : null}
                            </div>

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
                                <input
                                    id="rePassword"
                                    name="rePassword"
                                    type="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.rePassword}
                                    placeholder="Confirm password"
                                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                                />
                                <p className="error font-semibold text-red-600 text-sm italic"> {formik.errors.rePassword} </p>
                            </div>


                            <div className="mt-3">
                                <button
                                    className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Register
                                </button>
                            </div>

                            <div className="mt-3">
                                <div className="flex justify-center items-center">
                                    <label className="mr-2">You have an account?</label>
                                    <Link to="/">
                                        <a className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">Login</a>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;