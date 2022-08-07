import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import MetaData from "../../more/Metadata"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import { useForm } from "react-hook-form";
import Spinner from "../../more/Spinner"
import { useDispatch, useSelector } from 'react-redux'
import { signUp, reset } from "../../store/slices/authSlice"


const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { loading, error, success, message } = useSelector((state) => state.auth)
  // console.log(auth);
  // const [error, setError] = useState()

  const [avatar, setAvatar] = useState("https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143__340.png");
  const [avatarPreview, setAvatarPreview] = useState("https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143__340.png");


  const [user, setUser] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  })



  const { username, email, mobile, password } = user;

  const registerSubmit = (e) => {
    e.preventDefault();

    //const myForm = new FormData();
    const userData = {
      username,
      email,
      mobile,
      password,
    }

    /*myForm.append("username", username);
    myForm.append("email", email);
    myForm.append("mobile", mobile);
    myForm.append("password", password);
    myForm.append("avatar", avatar);*/
    dispatch(signUp(userData))
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
      //setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(message)
    }

    if (success) {
      toast.success("Registeration Successful")
      navigate('/')
    }

    dispatch(reset())
  }, [user, error, success, message, navigate, dispatch])


  
  if (loading) {
    return <Spinner />
  }




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
              <form
                encType="multipart/form-data"
                onSubmit={registerSubmit}>
                <div className="mb-6">
                  <input
                    id='username'
                    type="text"
                    placeholder="Username"
                    required
                    autoComplete="off"
                    name="username"
                    value={username}
                    onChange={registerDataChange}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

                  />

                </div>


                <div className="mb-6">
                  <input
                    id='email'
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    autoComplete="off"
                    onChange={registerDataChange}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

                  />
                </div>

                <div className="mb-6">
                  <input
                    id='mobile'
                    type="tele"
                    name="mobile"
                    value={mobile}
                    autoComplete='off'
                    required
                    placeholder="Mobile number"
                    onChange={registerDataChange}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  />
                </div>


                <div className="mb-6">
                  <input
                    id='password'
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    autoComplete="off"
                    onChange={registerDataChange}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

                  />
                </div>

                <div className="flex md:flex-row flex-col md:gap-0 gap-4 items-center justify-between mb-6">
                  <div className="shrink-0">
                    <img className="object-cover w-16 h-16 rounded-full"
                      src={avatarPreview} alt="profilephoto" />
                  </div>
                  <input
                    type="file"
                    name="avatar"
                    // {...register("avatar")}
                    accept="image/*"
                    onChange={registerDataChange}
                    className="text-sm text-grey-500
                    file:mr-5 file:py-3 file:px-10
                    file:rounded-full file:border-0
                    file:text-md file:font-semibold  file:text-white
                    file:bg-gradient-to-r file:from-blue-400 file:to-amber-200
                    hover:file:cursor-pointer hover:file:opacity-80
                  " />
                </div>



                {/* <input type="submit" value="Register" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" /> */}
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