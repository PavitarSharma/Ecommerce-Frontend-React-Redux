import React, { useState, useRef } from 'react'
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDial from '@mui/material/SpeedDial';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CallIcon from '@mui/icons-material/Call';
import HelpIcon from '@mui/icons-material/Help';
import Backdrop from '@mui/material/Backdrop';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Button from '@mui/material/Button';
import { logout } from "../store/slices/authSlice"
import { useDispatch, useSelector } from "react-redux";

const UserData = () => {
    let navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const { token } = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    

    const scroolEffect = useRef(null);

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            document.querySelector(".speedDial").classList.add("active");
        }
        else {
            document.querySelector(".speedDial").classList.remove("active");
        }
    })

    const home = () => {
        navigate('/')
    }

    const orders = () => {
        navigate('/orders')
    }

    const cart = () => {
        navigate('/cart')
    }

    const favourite = () => {
        navigate('/favourites')
    }

    const account = () => {
        navigate("/me")
    }

    const report = () => {
        navigate("/support")
    }

    const logoutUser = () => {
        if (token) {
            dispatch(logout())
            toast.success("Logout Successfully");
            navigate('/login')
        }
    }
    const options = [
        { icon: <HomeIcon />, name: "Home", func: home },
        { icon: <ListAltIcon />, name: "Orders", func: orders },
        {
            icon: (
                <ShoppingCartIcon
                //   style={{
                //    color: cartItems.length === 0 ? "" : "tomato",
                //   }}
                />
            ),
            // name: `Cart (${cartItems.length})`,
            func: cart,
        },

        {
            icon:
                <FavoriteBorderOutlinedIcon
                // style={{
                //   color: favouriteItems.length === 0 ? "" : "tomato",
                //  }}
                />,
            // name:
            // `Favourite (${favouriteItems.length})`,
            func: favourite,
        },
        { icon: <PersonIcon />, name: "Profile", func: account },
        { icon: <HelpIcon />, name: "Report us", func: report },
        { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
    ]
    return (
        <>
            <Backdrop open={open} style={{ zIndex: "10" }} />
            <SpeedDial
                ariaLabel="SpeedDial tooltip example"
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                style={{ zIndex: "11" }}
                open={open}
                direction="down"
                className="speedDial"
                useRef={scroolEffect}
                icon={
                    <img
                        className="speedDialIcon"
                        // src={user.avatar.url ? user.avatar.url : ("/profile.png")}
                        alt="Profile"
                        style={{
                            position: "fixed"
                        }}
                    />
                }
            >
                {options.map((item, index) => (
                    <SpeedDialAction
                        key={index}
                        icon={item.icon}
                        tooltipTitle={item.name}
                        onClick={item.func}
                        tooltipOpen={false}
                    />
                ))}
            </SpeedDial>
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

export default UserData