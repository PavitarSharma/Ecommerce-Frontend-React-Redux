import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../../more/Metadata"
import Spinner from "../../more/Spinner"
import Header from "../Home/Header"
import Avatar from '@mui/material/Avatar';
import { Link, useNavigate } from 'react-router-dom'

let avatarUrl = "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"

const Profile = () => {
    let navigate = useNavigate();
    const { user, loading, token } = useSelector((state) => state.auth);
  

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    })
    return (
        <>
            {loading ? <Spinner /> : (
                <>
                    <Header />
                    <div>
                        <MetaData title={`${user.username}'s profile`} />
                        <div className="flex items-center justify-center flex-col gap-16 my-20">
                            <div className="flex flex-col justify-center gap-6 items-center h-[450px] w-[450px]">
                                <h1 className="text-4xl my-2 font-bold">My Profile</h1>
                                <div className="w-[200px] h-[200px] border-2 rounded-full">
                                    <img alt={user.username} src={token ? avatarUrl : ""} className="object-cover w-full h-full rounded-full" />
                                </div>
                                <Link to="/me/update/info" className="bg-blue-600 text-white cursor-pointer px-6 py-2 rounded">Edit Profile</Link>
                            </div>

                            <div>
                                <div className="flex items-center gap-4">
                                    <h4 className="text-2xl font-bold">Username:</h4>
                                    <span className="text-2xl font-semibold text-orange-700">{user.username}</span>
                                </div>

                                <div className="flex items-center gap-4 my-6">
                                    <h4 className="text-2xl font-bold">Email:</h4>
                                    <span className="text-2xl font-semibold text-orange-700">{user.email}</span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <h4 className="text-2xl font-bold">Mobile:</h4>
                                    <span className="text-2xl font-semibold text-orange-700">{user.mobile}</span>
                                </div>

                                <div className="flex items-center gap-4 my-6">
                                    <h4 className="text-lg font-bold">Joined On:</h4>
                                    <span className="text-md font-semibold text-orange-700">{String(user.createdAt).substr(0, 10)}</span>
                                </div>
                            </div>

                            <div>
                                <div className="flex gap-10">
                                    <Link to="/orders" className="border-2 border-blue-600 rounded py-4 px-8 cursor-pointer">My Orders</Link>
                                    <Link to="/me/update" className="border-2 border-gray-600 rounded py-4 px-8 cursor-pointer">Change Password</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Profile