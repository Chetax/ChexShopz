import toast, {Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {remove,add} from '../redux/Slices/CartSlice';
function Products({ post }) {

    const {cart}=useSelector((state)=>state);
   const dispatch=useDispatch();
    const removeItem=()=>{
      dispatch(remove(post.id));
      toast.error("Removed From Cart");
    }

    const addToCart=()=>{
      dispatch(add(post));
      toast.success("Item Added To Cart");
    }
    return (
      <>
        <div className="div pt-5 pb-5" style={{ width: "25vw" }}>
          <h4>{post.title}</h4>
          <p>
            {post.description
              .split(" ") // Split the description into an array of words
              .slice(0, 15) // Take the first 10 words
              .join(" ") + "..."} {/* Join the words back into a string and add "..." */}
          </p>
          <img className="img-fluid " style={{width:"150px"}} src={post.image} alt="img"></img>
          <p>{post.price}₹</p>
          {  cart.some((p)=>p.id===post.id) ?<button onClick={removeItem} className="btn  btn-primary ">Remove Item</button> :<button onClick={addToCart} className="btn  btn-primary ">Add To Cart</button> }
          
          <Toaster/>
        </div>
      </>
    );
  }
  
  export default Products;
  