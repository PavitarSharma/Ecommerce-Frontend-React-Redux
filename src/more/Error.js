import React from 'react'

const Error = () => {
    return (
        <>
            <div className="w-full h-[100vh] flex flex-col justify-center items-center">
                <h1 className="text-4xl text-red-600 font-semibold">Something Went Wrong !</h1>
                <p className="text-xl text-red-800 my-10 font-semibold">Bad Request 😔 😔 😔</p>
                <img src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?size=338&ext=jpg&ga=GA1.2.115152945.1657866964" alt="" className="bg-transparent rounded h-[500px]" />
            </div>
        </>
    )
}

export default Error