import React from 'react'
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {


    return (
        <>
            <div className="mt-24 shadow-lg shadow-slate-300 rounded-md cursor-pointer hover:translate-y-[-20px] transition duration-1000 ease-in-out">
                <Link to={`/products/${product._id}`}>
                    <img
                        src={product.images[0].url}
                        alt={product.name}
                        className="object-contain flex justify-center h-56 w-full bg-transparent"
                    />
                    <p className="text-center font-sans font-semibold mt-4">{product.name.length > 20 ? product.name.substring(0, 20) + "...": product.name}</p>
                    <div>
                        {/* <Rating {...options} /> */}
                        <span className="flex justify-center">({product.numOfReviews} Reviews)</span>
                    </div>
                    <div className="my-2 flex justify-center w-full relative">
                        <div className={`${product.offerPrice > 0 ? "flex justify-between w-full px-2": ""} `}>
                            <h1
                                className={`font-semibold text-sm ${product.offerPrice > 0 ? "bg-green-600 text-white px-2 py-1 rounded" : ""}`}>
                                {product.offerPrice > 0 ? "OFF ": ""}
                                {product.offerPrice > 0 ? `₹${product.offerPrice}` : ""}
                            </h1>
                            <span className="text-red-800 text-lg font-semibold">{`₹${product.price}`}</span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductsCard