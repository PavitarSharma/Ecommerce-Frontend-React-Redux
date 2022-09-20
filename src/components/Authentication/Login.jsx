import React, { useState, useEffect } from 'react'
import MetaData from "../../more/Metadata"
import Spinner from "../../more/Spinner"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from 'react-redux'
import { login, reset } from "../../store/slices/authSlice"


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = JSON.parse(localStorage.getItem("token"))
  const { user, loading, error, success, message } = useSelector((state) => state.auth)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })


  const { email, password } = formData

  useEffect(() => {
    if (error) {
      toast.error(message)
    }

    if (success && token) {
      
      // toast.success("Login Successful")
      navigate('/')
    }

    dispatch(reset())
    // eslint-disable-next-line
  }, [user, error, success, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    //console.log(userToken);

    const action  = login(userData)
    dispatch(action)
    // .then((res) => {
    //   toast.success("Login Successful")
    //   navigate('/')
    //   localStorage.setItem("token", JSON.stringify(res.payload.token))
    // })
    
    
  }

  if (loading) {
    return <Spinner />
  }
  return (
    <>
      <MetaData title="Sign up" />
      <div className="h-screen">
      <div className="px-6 h-full text-gray-800">
    <div
      className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
    >
      <div
        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="w-full"
          alt="loginimage"
        />
      </div>
      <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <form onSubmit={onSubmit}>
          <div className="mb-6">
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              placeholder='Email'
              onChange={onChange}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>

         
          <div className="mb-6">
          <input
              type='password'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div className="flex justify-between items-center mb-6">

            <Link to="/password/forgot" className="text-gray-800 w-full text-end font-semibold italic underline cursor-pointer">Forgot password?</Link>
          </div>

          <div className="text-center lg:text-left">
            <button
              type="submit"
              className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Login
            </button>
            <p className="text-xl font-semibold mt-2 pt-1 mb-0">
              Don't have an account?
              <Link to="/signup" className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
      </div>
      <ToastContainer
        position="bottom-center"
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

export default Login

//https://tailwind-elements.com/docs/standard/components/login-form/