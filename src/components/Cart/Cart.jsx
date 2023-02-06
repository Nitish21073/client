import React from "react";
import "./cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import {makeRequest} from "../../makeRequest"
import {loadStripe} from "@stripe/stripe-js"

 
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };
  const stripePromise = loadStripe('pk_test_51MVAcFSI2AWD7BxSDXJXxboSFrn7dkscdZQubkmmCRCQ45ckRbgzUj7VvYcvJOQy85nMVx8TwcwvPCwXd7Lr2sDL00wbMfi4Y4')
  const handlePayment = async ()=>{
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders",{
        products,
      });
      await stripe.redirectToCheckout({
        sessionId:res.data.stripeSession.id,
      })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="cart">
      <h1>Products in your Cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} × ₹{item.price}
            </div>
          </div>
          <DeleteOutlineIcon className="delete" onClick = {()=>dispatch(removeItem(item.id))} />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>₹{totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset"  onClick = {()=>dispatch(resetCart())}>RESET CART</span>
    </div>
  );
};

export default Cart;
