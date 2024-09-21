
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { CartContext } from "../Components/Context/CartContext";
import { Button } from "antd";


function ProductsDetails (){

    const[Products, setProducts] = useState([]);
    const{isItemAdded, AddToCart} = useContext(CartContext)
    const { id } = useParams();

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((res) => setProducts(res));
      
        
    },[]);
    console.log(Products);
    return(
        <div className="container mx-auto ">
        
          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto  ">
              <div className="lg:w-3/5 mx-auto flex flex-wrap justify-around border border-red-600 p-5 bg-gradient-to-r from-blue-400 to-blue-900 rounded-lg shadow-md font-mono">
                <img
                  alt="ecommerce"
                  className="lg:w-60 w-60 lg:h-auto h-64 object-cover object-center rounded"
                  src={Products.thumbnail}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-300 tracking-widest capitalize">
                    {Products.category}
                  </h2>
                  <h1 className="text-white text-3xl title-font font-medium mb-1">
                    {Products.title}
                  </h1>
                  <div className="flex mb-4">
                    <span className="flex items-center">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 text-yellow-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 text-yellow-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 text-yellow-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 text-yellow-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 text-yellow-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="text-gray-100 ml-3">{Products.rating}</span>
                    </span>
                  </div>
                  <p className="leading-relaxed text-black">
                    {Products.description}
                  </p>
                  <div className="flex mt-10">
                    <span className="title-font font-medium text-2xl text-white">
                      ${Products.price}
                    </span>
                    <Button onClick={()=> AddToCart(Products) } className="flex ml-auto text-white  bg-blue-500 border-0 py-2 px-6  font-mono rounded-md hover:text-blue-500 hover:bg-white hover:font-bold">
                      {
                        isItemAdded(Products.id)
                        ?`Added (${isItemAdded(Products.id).quantity})`
                        : "Add To Cart"
                      }
                      
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </div>

    );
}
export default ProductsDetails ;