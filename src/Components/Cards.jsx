import { Link } from "react-router-dom";



function Cards({item}){
    return(   
        <div className="flex flex-wrap flex-col lg:w-2/12 md:w-2/6 w-1/2 border p-4 items-center bg-gradient-to-r from-blue-400 to-blue-900
 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105">
        <Link className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-52 h-52"
            src={item.thumbnail}
          />
        </Link>
        <div className="mt-4 text-center">
          <h3 className=" text-gray-900 text-lg tracking-widest title-font mb-1 capitalize">
            {item.category}
          </h3>
          <h2 className="text-white title-font text-xs  font-medium">
            {item.title}
          </h2>
          <p className="mt-1 text-gray-700">${item.price}</p>
        </div>
      </div>
      



    )
}

export default Cards;