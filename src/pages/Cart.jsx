import { useSelector } from "react-redux";
import './Cart.css';
import CartsItems from '../components/CartsItems';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Cart() {
  const { cart } = useSelector((state) => state);
  const [TotalAmoount, SetTotalAmount] = useState(0);

  useEffect(() => {
    SetTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <>
      {cart.length > 0 ? (
        <div className="row mt-5">
          <div className="col-6">
            {cart.map((item, index) => (
              <CartsItems key={item.id} item={item} index={index} />
            ))}
          </div>
          <div className="col-6 summary-column">
            <p>Your Cart</p>
            <h4>Summary</h4>
            <h3>Total item: {cart.length}</h3>
            <h2 className="mt-5">
              Total Amount :={TotalAmoount} ₹
            </h2>
          </div>
        </div>
      ) : (
        <div className="Nodataincart p-5">
          <p>No Data Found</p>
          <NavLink to="/">
            <button className="btn btn-primary">Shop Now</button>
          </NavLink>
        </div>
      )}
    </>
  );
}

export default Cart;
