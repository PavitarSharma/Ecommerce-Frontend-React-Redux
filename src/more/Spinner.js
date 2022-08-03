import React from 'react'
import loading from "../assets/loading.svg"

const Spinner = () => {
    return (
        <div className="w-full h-[100vh] flex justify-center items-center bg-gray-100">
            <img src={loading} alt="" className="bg-transparent rounded-full h-[300px]" />
        </div>
    )
}

export default Spinner