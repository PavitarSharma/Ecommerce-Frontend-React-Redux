import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import bg from "../../assets/background.jpg";
import bg2 from "../../assets/background2.jpg";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Spinner from "../../more/Spinner"
import ProductsCard from '../Product/ProductCard';
import { getAllProduct } from "../../store/slices/productSlice"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MetaData from '../../more/Metadata';
import Error from "../../more/Error"

const Home = () => {
    const dispatch = useDispatch()
    const { products, status, error } = useSelector((state) => state.product)
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

    // const [ products, setProducts ] = useState([])
 

    useEffect(() => {


        const fetchProducts = () => {
			const params = 'limit=8'
			const action = getAllProduct(params)
			dispatch(action)
		}

		fetchProducts()



        // dispatch(reset())
        /*const fetchProducts = async () => {
            const res = await fetch("http://localhost:5000/api/v2/products")
            const data = await res.json()
            console.log(data.products);
            setProducts(data.products)
        }

        fetchProducts()*/
    }, [dispatch])

    if (status === 'loading') {
        return <Spinner />
    }

    if (status === 'failed') {
        toast.error(error)
        return <Error />
        //https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?size=338&ext=jpg&ga=GA1.2.115152945.1657866964
    }
    return (
        <div>
            <MetaData title="Home"/>
            <Header />
    
            <div className="mt-4 overflow-x-hidden" >
                <Slider {...slider}>
                    <div className="w-full h-[600px] relative">
                        <img className="w-full h-full object-cover" src={bg} alt="bgimage" />
                        <div className="absolute top-[40%] md:left-[20%] left-[10%] z-10 flex flex-col items-center">
                            <h1 className="md:text-4xl text-xl">Buy 2 Get <span className="bg-white py-2 px-4 rounded-sm text-blue-500"> 1 Free</span></h1>
                            <h1 className="md:text-7xl text-5xl text-white font-bold my-2">Fashionable</h1>
                            <h3 className="text-5xl text-white font-medium">Collection</h3>
                            <p className="text-white font-medium font-mono my-2">Get Free Shipping on all orders over $99.00</p>
                            <Link to="/" className="bg-green-400 py-3 px-6 rounded-md cursor-pointer text-white">Shop Now</Link>
                        </div>
                    </div>
                    <div className="w-full h-[600px] relative">
                        <img className="w-full h-full object-cover" src={bg2} alt="bgimage2" />
                        <div className="absolute top-[40%] md:left-[20%] left-[10%] z-10 flex flex-col items-center">
                            <h1 className="md:text-4xl text-xl">Buy 2 Get <span className="bg-white py-2 px-4 rounded-sm text-blue-500"> 1 Free</span></h1>
                            <h1 className="md:text-7xl text-5x text-white font-bold my-2">Fashionable</h1>
                            <h3 className="text-5xl text-white font-medium">Collection</h3>
                            <p className="text-white font-medium font-mono my-2">Get Free Shipping on all orders over $99.00</p>
                            <Link to="/" className="bg-green-400 py-3 px-6 rounded-md cursor-pointer text-white">Shop Now</Link>
                        </div>
                    </div>

                </Slider>

            </div>

            <div className="mt-14 text-center relative w-full">
                <h2 className="text-xl font-semibold">Featured Products</h2>
                <div className="absolute top-9 left-[50%] translate-x-[-50%] w-[130px] h-[4px] rounded-md bg-orange-500"></div>

                <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  w-full mt-4 px-12">
                    {products.products && products.products?.map(product => (
                        <ProductsCard key={product._id} product={product} />
                    ))}

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

        </div>
    )
}

export default Home