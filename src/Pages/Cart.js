// React Hooks
import React, { useEffect, useState } from "react";

// React Router
import { useNavigate } from "react-router-dom";

// Redux tools for calling actions and getting data from the store
import { useDispatch, useSelector } from "react-redux";

// Actions from Auth and Product Reducers
import { authSelector } from "../Redux/Reducers/authReducer";
import {
  clearCartThunk,
  productSelector,
  purchaseAllThunk,
} from "../Redux/Reducers/productReducer";

// Required components
import CartItem from "../Component/Cart/CartItem";
import Loader from "../Component/Loader/Loader";

// CSS styles
import firstStyles from "../styles/home.module.css";
import secondStyles from "../styles/cart.module.css";

// Toast notification
import { toast } from "react-toastify";

export function Cart() {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);

  const { userLoggedIn } = useSelector(authSelector);
  const { cart, total, itemInCart } = useSelector(productSelector);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  function handlePurchase() {
    if (itemInCart === 0) {
      toast.error("Your Cart is Empty!");
      return;
    }

    dispatch(purchaseAllThunk());
    toast.success("Your order has been placed!");

    navigate("/myorder");
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={secondStyles.mainContainer}>
          <div className={secondStyles.header}>
            <div className={secondStyles.userInfo}>
              <h1>Hey {userLoggedIn.name}, <small>Your Cart has</small></h1>
            </div>
            <div className={secondStyles.cartDetail}>
              <div>
                Item: {itemInCart}
                <br />
                <button
                  className={secondStyles.removeAll}
                  onClick={() => dispatch(clearCartThunk())}
                >
                  Remove All
                </button>
              </div>
              <div>
                Total Amount: ₹{total}
                <br />
                <button
                  className={secondStyles.purchaseAll}
                  onClick={handlePurchase}
                >
                  Purchase All
                </button>
              </div>
            </div>
          </div>
          <div className={firstStyles.itemContainer}>
            {cart.length === 0 ? (
              <h1>Your Cart is Empty!</h1>
            ) : (
              cart.map((product, i) => (
                <CartItem key={i} product={product} />
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
}
