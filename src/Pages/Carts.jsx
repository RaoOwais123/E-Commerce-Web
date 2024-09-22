import { useContext, useState } from "react";
import { CartContext } from "../Components/Context/CartContext";
import { Button, message } from "antd";
import CheckOutModal from "../Components/CheckOutModal";
import { auth, db } from "../Components/Utils/firebase";
import { addDoc, collection } from "firebase/firestore";


function Carts (){

  const {UpdateCart, RemoveCart, CartItems, clearCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
    const ModalOpen = ()=> setIsModalOpen(true);

    const totalQuantity = CartItems.reduce((value, item) => value + item.quantity,0);
    const totalPrice = CartItems.reduce((value, item) => value + item.quantity * item.price,0);

    const CheckOut = async (values)=>{
      const checkObj = {
        ...values,
        totalQuantity,
        totalPrice,
        Status: "Pending",
        User: auth.currentUser ? auth.currentUser.uid : "Guest",
        Items: CartItems.map((data)=>`Item = ${data.title}, Price = ${data.price}, (${data.quantity})`),
   } 



   const DocRef = collection(db, "Orders");
  addDoc(DocRef,checkObj).then(()=>
  message.success("Your Order Is Placed"));

  const encodedTxt = encodeURIComponent(JSON.stringify(checkObj));
  console.log("values=>", encodeURIComponent(JSON.stringify(checkObj)));
  window.open(`https://wa.me/923454092081?text=${encodedTxt}`);
  clearCart();
  setIsModalOpen(false)
  }


    return(
        <div className="container mx-auto ">

          <CheckOutModal
          isModalOpen={isModalOpen}
          handleOk={()=> setIsModalOpen(false)}
          handleCancel={()=> setIsModalOpen(false)}
          CheckOutOrder={CheckOut}
          />
          <div className="flex gap-4 my-4">
        <div className="flex-grow border border-red-400 rounded flex justify-center items-center p-5">
          <h1 className="text-2xl font-semibold">{totalQuantity}</h1>
        </div>
        <div className="flex-grow border border-red-400 rounded flex justify-center items-center p-5">
          <h1 className="text-2xl font-semibold">{Math.floor(totalPrice)}</h1>
        </div>
        <div onClick={ModalOpen} className="flex-grow border border-red-400 rounded flex justify-center items-center p-5 cursor-pointer">
          Proceed to Checkout
        </div>
        </div>


        {
            CartItems.map((item)=>(
                <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-5 mx-auto  ">
                  <div className="lg:w-3/5 mx-auto flex flex-wrap justify-around border border-red-600 p-5 bg-gradient-to-r from-blue-400 to-blue-900 rounded-lg shadow-md font-mono">
                    <img
                      alt="ecommerce"
                      className="lg:w-60 w-60 lg:h-auto h-64 object-cover object-center rounded"
                      src={item.thumbnail}
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                      <h2 className="text-sm title-font text-gray-300 tracking-widest capitalize">
                        {item.category}
                      </h2>
                      <h1 className="text-white text-3xl title-font font-medium mb-1">
                        {item.title}
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
                          <span className="text-gray-100 ml-3">{item.rating}</span>
                        </span>
                      </div>
                      <p className="leading-relaxed text-black">
                        {item.description}
                      </p>
                      <div className="flex mt-10">
                        <span className="title-font font-medium text-2xl text-white">
                          ${item.price}
                        </span>
                      </div>
                      <div className="flex gap-3 my-3">
                        <Button onClick={()=> UpdateCart(item.id, "plus")}>
                            Plus
                        </Button>
                        <h1>{item.quantity}</h1>
                        <Button onClick={()=>{
                            if (item.quantity <= 1) {
                                RemoveCart(item.id);
                            }
                            else{
                                UpdateCart(item.id, "minus")
                            }
                        }}>
                            Minus
                    
                        </Button>

                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ))
        }
    </div>
    )
}
export default Carts ;