import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Context/CartContext";
import { ShoppingCartOutlined } from "@ant-design/icons";



function Cards({item}){

  const {isItemAdded} = useContext(CartContext)
  const isAdded = isItemAdded(item.id) ? true : false;
    return(   
        
        <div className="flex flex-wrap flex-col lg:w-2/12 md:w-2/6 w-1/2 border p-4 items-center bg-gradient-to-r from-blue-400 to-blue-900
 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105">
  <Link to={`/product/${item.id}`}>
        <div className="block relative h-48 rounded overflow-hidden">
          { isAdded &&(
            <ShoppingCartOutlined className="text-3xl absolute text-white top-2 right-2"/>
          )}
          <img
            alt="ecommerce"
            className="object-cover object-center w-52 h-52"
            src={item.thumbnail}
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className=" text-gray-900 text-lg tracking-widest title-font mb-1 capitalize">
            {item.category}
          </h3>
          <h2 className="text-white title-font text-xs  font-medium">
            {item.title}
          </h2>
          <p className="mt-1 text-gray-700">${item.price}</p>
        </div>
        </Link>
      </div>
      
        
      



    )
}

export default Cards;