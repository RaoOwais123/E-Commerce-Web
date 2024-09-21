import { ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Button, Image } from "antd";
import Avatar from "antd/es/avatar/avatar";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Context/CartContext";


function Header(){

  const {CartItems } = useContext(CartContext)

  const isLogin = true;
  return(
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center border-b-4 border-dashed border-red-600">
    <Link to={"/"}>
    <Image
    src="\front-view-cyber-monday-shopping-cart-with-bags.jpg"
    height={50}
    width={50}
    className="rounded-full align-baseline"
    preview={false}
    />
      
      
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
     
      <Link to={"/Products"} className="mr-5 hover:text-gray-900">
      Products</Link>
      <Link to={"/Orders"} className="mr-5 hover:text-gray-900">
      Orders</Link>
     
    </nav>
    <div className="flex items-center gap-3">
    {
      isLogin ?(
        <Avatar size={50} icon={<UserOutlined />}/>
      ):(
        <Button>Login</Button>
      )
    }
    <Link to={"/Carts"}>
    <Badge count={CartItems.length} style={{marginTop: 8}}>
    <ShoppingCartOutlined style={{fontSize: 35, color: "blue", marginTop: 8}}/>
    </Badge>
    
    </Link>
    </div>
  
    
  </div>
</header>

  );
}
export default Header;