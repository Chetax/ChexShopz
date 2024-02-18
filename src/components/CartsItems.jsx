import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {remove} from '../redux/Slices/CartSlice';
import toast from "react-hot-toast";
function CartsItems({item}) {
    const dispatch=useDispatch();
    const removefromcart=()=>
    {
       
        dispatch(remove(item.id));
        toast.error("Removed From Cart");
        
    }
    return (<>
<div className="row p-2  text-center " >
    <div className="col-2"> </div>
    <div className="col-8">
    <img style={{width:"10vw"}} src={item.image} alt="" />
    <p style={{fontSize:"25px",fontWeight:"bold"}}>{item.title}</p>
    <p> {item.description
              .split(" ") // Split the description into an array of words
              .slice(0, 15) // Take the first 10 words
              .join(" ") + "..."} {/* Join the words back into a string and add "..." */}</p>
  <span style={{fontWeight:"bold" ,marginRight:"15px"}}>{item.price }₹</span>
   <div className="div" style={{height:"75px" , color:"red"}} onClick={removefromcart} > <button className="btn mt-2 btn-primary">Remove From Cart</button></div>
    
    </div>

</div>
    </>  );
}

export default CartsItems;