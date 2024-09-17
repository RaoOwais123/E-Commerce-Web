import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import { data } from "autoprefixer";
import { Link } from "react-router-dom";
import { Button } from "antd";


function Home(){

    const[products, setProducts] = useState([])

    useEffect(() => {
        axios
          .get("https://dummyjson.com/products?limit=15")
          .then((res) => setProducts(res.data.products));
      }, []);
    return(
        
            <div className="container my-8 mx-auto ">

<div className="flex justify-between my-10">
        <h1 className="text-3xl">Find your Best Products</h1>
        <Link to={"/products"}>
          <Button>See All</Button>
        </Link>
      </div>
      <div className="flex flex-wrap flex-row -m-4 justify-around gap-4 ">

        {
            products.map((data)=>(
                <Cards key={data.id} item={data}/>
            ))
        }

    </div>
  </div>         

    )
}
export default Home;