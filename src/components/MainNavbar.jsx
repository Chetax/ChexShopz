import { MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function MainNavbar() {
  const navLinkStyle = {
    textDecoration: "none",
    color: "inherit",  // Inherit the color from the parent
    fontWeight: "bold",
  };
const {cart}=useSelector((state)=>state);
  return (
    <div className="container-fluid " style={{ backgroundColor: "whitesmoke" }}>
      <div className="row p-1 fs-5 " style={{ height: "50px" }}>
        <div className="col-6 mt-1">
          <NavLink to="/" style={navLinkStyle}>
            <span style={{ color: 'gold', fontWeight: "bold" }}>Chex</span>Shopz
          </NavLink>
        </div>
        <div className="col-6 mt-1">
        <NavLink to="/" style={{color:"black", textDecoration: "none"}} >  <span style={{marginRight:"15px"}}>Home</span>   </NavLink>
          <NavLink to="/cart" style={navLinkStyle } >
            <MdShoppingCart />{cart.length===0 ?<span></span> :<span>{cart.length}</span>}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default MainNavbar;
