import { useSelector } from "react-redux";
import './Cart.css';
import { NavLink } from "react-router-dom";
function Cart() {
const cart=useSelector((state)=>state);
return ( <>

    {
        cart.length > 0 ?     <div className="row">
        <div className="col-6"></div>
        <div className="col-6"></div>
    </div> :
    <div className="Nodataincart p-5 " >
        <p>No Data Found</p>
       <NavLink to="/"> <button className="btn btn-primary">Shop Now</button></NavLink>
    </div> 
    }
    </>);
}

export default Cart;