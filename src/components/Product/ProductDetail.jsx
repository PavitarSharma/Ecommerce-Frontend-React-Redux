import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Spinner from "../../more/Spinner"
import MetaData from '../../more/Metadata';
import Error from "../../more/Error"
import { useParams } from 'react-router-dom';
import { getProduct } from '../../store/slices/productSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Home/Header';
import Slider from "react-slick";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';


const ProductDetail = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { product, status, error } = useSelector((state) => state.product.product)

  console.log(product);
  console.log(id);

  useEffect(() => {
    const fetchProduct = () => {
      const action = getProduct(id?.toString())
      dispatch(action)
    }

    fetchProduct()
  }, [dispatch, id])

  if (status === 'loading') {
    return <Spinner />
  }

  if (status === 'failed') {
    toast.error(error)
    return <Error />
    //https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?size=338&ext=jpg&ga=GA1.2.115152945.1657866964
  }

  const slider = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 6000,
    cssEase: "linear"
  };

  return (
    <>
      <MetaData title="Product Details" />
      <Header />
      <div className="w-full flex justify-around flex-col items-center lg:flex-row my-14 overflow-x-hidden">
                <div className="h-[350px] w-[350px]">
                    <Slider {...slider}>

                        <div>
                            {product?.images?.map((item, i) => (
                                <img
                                    key={i}
                                    src={item.url}
                                    alt={`${i} Slide`}
                                    className="w-full h-[350px] object-contain md:w-full"

                                />
                            ))}

                        </div>


                    </Slider>
                </div>

                <div className="md:w-[50vw] w-[94vw] flex flex-col gap-2 items-center">
                    <h2 className="text-xl font-bold">{product?.name}</h2>

                    <div>
                        <span>({product?.numOfReviews})</span>
                    </div>

                    <h2 className="text-lg font-semibold text-orange-700">₹{product?.price}</h2>

                    <div className="flex items-center gap-4">
                        <sapn className="text-lg text-black font-semibold">Quantity: </sapn>

                        <div>
                            <RemoveIcon className="bg-gray-600 text-white mx-2 rounded-sm" />
                            <input type="number" className="w-20 outline-0 border px-2 border-gray-600" />
                            <AddIcon className="bg-gray-600 text-white mx-2 rounded-sm" />
                        </div>
                    </div>

                    <p className={`text-lg font-bold ${product?.stock < 1 ? "text-red-600" : "text-green-600"}`}>{product?.stock < 1 ? "OutOfStock" : "InStock"}</p>

                    <div className="text-gray-700 font-medium font-mono">
                        <p className="md:px-0 px-12">{product?.description}</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <FavoriteBorderIcon className="text-red-800" />

                            <span className="text-lg font-semibold">Add to wishlist</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <ShoppingBagOutlinedIcon className="text-red-800" />

                            <span className="text-lg font-semibold">Add to Cart</span>
                        </div>


                    </div>
                </div>
            </div>

            <div>
                <div className=" flex flex-col px-10 justify-center gap-2">
                    <h1 className='text-xl font-bold'>Reviews</h1>
                    <div className="w-full bg-gray-800 h-[2px] rounded px-4"></div>

                    <div>
                        <h2 className='text-lg font-bold'>Add a Review</h2>
                        <p>Your Rating*</p>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Comments*' className="border border-gray-600 w-full my-4 px-4 py-2"></textarea>
                        <button className="bg-orange-600 px-10 py-2 text-center text-white rounded-lg text-lg">Submit</button>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ProductDetail