import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import MetaData from "../../more/Metadata"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from "../../store/slices/authSlice"


const SignUp = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { status, error } = useSelector((state) => state.auth)
  // console.log(auth);
  // const [error, setError] = useState()


  const submitForm = (data) => {
    data.email = data.email.toLowerCase()
    const action = signUp(data)
    dispatch(action)
  }

  useEffect(() => {
    if (error) {
      toast.error(error);

    }

    if (status === "failed") {
      toast.error("Registration failed!");

    }

    if (status === 'success') {
      toast.success("Registration Successfull");
      navigate('/login')
    }
  }, [status, error])




  return (
    <>
      <MetaData title="Sign up" />
      <div className="h-screen">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phoneimage"
              />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <form onSubmit={handleSubmit(submitForm)}>
                <div className="mb-6">
                  <input
                    id='userName'
                    type="text"
                    autoComplete='off'
                    required
                    {...register('userName', { required: true, maxLength: 30 })}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Username"
                  />

                </div>


                <div className="mb-6">
                  <input
                    type="email"
                    autoComplete='off'
                    required
                    {...register('email')}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email"
                  />
                </div>


                <div className="mb-6">
                  <input
                    id="password"
                    type="password"
                    {...register('password')}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                  />
                </div>

                <div className="flex md:flex-row flex-col md:gap-0 gap-4 items-center justify-between mb-6">
                  <div className="shrink-0">
                    <img className="object-cover w-16 h-16 rounded-full"
                      src="https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143__340.png" alt="profilephoto" />
                  </div>
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    className="text-sm text-grey-500
                    file:mr-5 file:py-3 file:px-10
                    file:rounded-full file:border-0
                    file:text-md file:font-semibold  file:text-white
                    file:bg-gradient-to-r file:from-blue-400 file:to-amber-200
                    hover:file:cursor-pointer hover:file:opacity-80
                  " />
                </div>




                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign Up
                </button>

                <div
                  className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                >
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>

                <div className="w-full text-center">
                  <p>Already have an Account. <Link className="font-bold text-lg cursor-pointer text-orange-500 underline" to="/login">Login</Link></p>
                </div>



              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default SignUp
//https://blog.logrocket.com/handling-user-authentication-redux-toolkit/
//https://tailwind-elements.com/docs/standard/components/login-form/