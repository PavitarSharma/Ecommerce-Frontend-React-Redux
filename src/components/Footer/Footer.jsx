import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';



const Footer = () => {
    return (
        <div className='flex lg:items-center justify-between lg:flex-row flex-col mt-20 mb-10'>
            <div className='flex flex-col items-start justify-start gap-4 px-10 lg:my-0 my-10'>
                <div>
                    <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg" alt="logo" />
                </div>

                <div className='flex items-center gap-2'>
                    <LocationOnOutlinedIcon className='text-green-500' />
                    <h4 className="font-semibold">Address: <span className="font-normal">Hisar, haryana, India</span> </h4>
                </div>

                <div className='flex items-center gap-2'>
                    <EmailOutlinedIcon className='text-green-500' />
                    <h4 className="font-semibold">Email: <span className="font-normal">abc@gmail.com</span> </h4>
                </div>

                <div className='flex items-center gap-2'>
                    <AddIcCallOutlinedIcon className='text-green-500' />
                    <h4 className="font-semibold">Call us: <span className="font-normal">+91 4578978954</span> </h4>
                </div>

                <div className='flex items-center gap-2'>
                    <AccessTimeOutlinedIcon className='text-green-500' />
                    <h4 className="font-semibold">Time: <span className="font-normal">10:00 AM - 10:00 PM (everyday)</span> </h4>
                </div>
            </div>

            <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 px-10'>

                <div>
                    <h3 className="font-bold text-2xl">Account</h3>
                    <h4 className="font-semibold text-lg cursor-pointer">Log In</h4>
                    <h4 className="font-semibold text-lg cursor-pointer">Sign In</h4>
                    <h4 className="font-semibold text-lg cursor-pointer">Registeration</h4>
                    <h4 className="font-semibold text-lg cursor-pointer">Forgot Password</h4>
                </div>

                <div>
                    <h3 className="font-bold text-2xl">Follow us</h3>
                    <h4 className="font-semibold text-lg cursor-pointer">Facebook</h4>
                    <h4 className="font-semibold text-lg cursor-pointer">Youtube</h4>
                    <h4 className="font-semibold text-lg cursor-pointer">Instagram</h4>

                </div>

                <div>
                    <h3 className="font-bold text-2xl">Buiseness</h3>
                    <h4 className="font-semibold text-lg cursor-pointer">Create A Seller Account</h4>
                    <h4 className="font-semibold text-lg cursor-pointer">Saler Rules</h4>
                    <h4 className="font-semibold text-lg cursor-pointer">View Shop</h4>
                    <h4 className="font-semibold text-lg cursor-pointer">Report us</h4>
                </div>

                <div>
                    <h3 className="font-bold text-2xl">Rules</h3>
                    <h4 className="font-semibold text-lg cursor-pointer">FAQ</h4>
                    <h4 className="font-semibold text-lg cursor-pointer">Contact us</h4>
                    <h4 className="font-semibold text-lg cursor-pointer">Abou us</h4>
                    <h4 className="font-semibold text-lg cursor-pointer">Live chat</h4>
                </div>

            </div>



        </div>
    )
}

export default Footer