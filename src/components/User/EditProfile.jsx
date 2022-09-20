import React, { useState, useEffect } from 'react'
import MetaData from "../../more/Metadata"
// import Spinner from "../../more/Spinner"
//import { useSnackbar } from "notistack"
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useDispatch, useSelector } from "react-redux"
import { updateUser, reset, loadUser } from "../../store/slices/authSlice"
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom"

const EditProfile = () => {
    //const { enqueueSnackbar } = useSnackbar()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [avatar, setAvatar] = useState("");
    const [avatarPreview, setAvatarPreview] = useState("/profile.png");
    const { error, success, loading, user } = useSelector((state) => state.auth)
    console.log(user);


    const updateProfileSubmit = (event) => {
        event.preventDefault()

        const updateData = {
            username,
            email,
            mobile,
            avatar
        }

        dispatch(updateUser(updateData))
    }

    const updateProfileDataChange = (e) => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result);
                setAvatar(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    };

    useEffect(() => {
        if (user) {
            setUsername(user.name);
            setEmail(user.email);
            setMobile(user.mobile);
            setAvatarPreview(user.avatar.url)
        }

        if(success) {
            toast.success("Profile updated successfully");
            dispatch(loadUser())

            navigate('/me')
        }

    }, [dispatch, error, success, navigate, user]);


    return (
        <>
            <MetaData title="Update Profile" />
            <div className="flex flex-col items-center justify-center h-[80vh]">
                <div>
                    <h1 className="text-2xl font-bold text-blue-600 mb-16">Update Profile</h1>
                </div>
                <form
                    className="w-[500px] shadow-xl p-10 "
                    encType="multipart/form-data"
                    onSubmit={updateProfileSubmit}
                >
                    <div className="border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-6 flex items-center relative">
                        <PersonIcon className='ml-2' />
                        <input
                            id='username'
                            type="text"
                            placeholder="Username"
                            autoComplete="off"
                            name="username"
                            value={username}
                            onChange={event => setUsername(event.target.value)}
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border-0 outline-0"

                        />

                    </div>


                    <div className="border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-6 flex items-center relative">
                        <EmailIcon className='ml-2' />
                        <input
                            id='email'
                            type="email"
                            placeholder="Email"
                            autoComplete="off"
                            name="email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border-0 outline-0"

                        />

                    </div>

                    <div className="border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-6 flex items-center relative">
                        <LocalPhoneIcon className='ml-2' />
                        <input
                            id='phone'
                            type="text"
                            placeholder="Mobile"
                            autoComplete="off"
                            name="mobile"
                            value={mobile}
                            onChange={event => setMobile(event.target.value)}
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border-0 outline-0"
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
                            onChange={updateProfileDataChange}

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
                        Update
                    </button>

                </form>
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

export default EditProfile