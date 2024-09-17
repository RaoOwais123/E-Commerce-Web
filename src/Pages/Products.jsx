import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Pagination, Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../Components/Cards";


function Products(){

    const[category, setCategory] = useState([]);
    const[products, setProducts] = useState([]);
    const[skip, setSkip] = useState(0);
    const[limit, setlimit] = useState(20);
    const[total, setTotal] = useState(20);

    useEffect(()=>{
        axios
        .get("https://dummyjson.com/products/categories")
        .then((res)=> setCategory(res.data))
        
        
    },[]);

    useEffect(()=>{
        axios
        .get(`https://dummyjson.com/products?limit=20&skip=${skip}`)
        .then((res)=>{
            setProducts(res.data.products);
            setTotal(res.data.total);
            console.log(products);
        })
    },[skip])



    return(
        <div className="container mx-auto">
            <div className=" flex justify-between my-10 gap-2">
                <Input type="search" placeholder="Search"/>
                <Select
                showSearch
                className="h-12 w-1/2"
                placeholder="Select Category"
                filterOption={(input, option)=>
                    (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                
                }
                options={category.map((data)=> {
                    return {label: data.name, value: data.slug};
                })}
                />
                <Button icon={<SearchOutlined/>} className="h-12">Search</Button>

            </div>

            <div className="flex flex-wrap flex-row -m-4 justify-around gap-4 ">

        {
            products.map((data)=>(
                <Cards key={data.id} item={data}/>
            ))
        }

    </div>
    <div className="flex justify-center my-8">
  <Pagination
    onChange={(num) => {
      setSkip((num - 1) * 20);
    }}
    defaultCurrent={1}
    pageSize={20}
    total={total}
    
  />
</div>



        </div>
    )
}
export default Products;