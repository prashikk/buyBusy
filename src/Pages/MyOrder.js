// React Hooks
import React, { useEffect, useState } from "react";

// Redux tool for getting data from the store
import { useSelector } from "react-redux";

// State of Product Reducer
import { productSelector } from "../Redux/Reducers/productReducer";

// React Router
import { Link } from "react-router-dom";

// Required components for Order Detail and Loading spinner
import OrderDetail from "../Component/MyOrder/OrderDetail";
import Loader from "../Component/Loader/Loader";

// CSS styles
import styles from "../styles/myorder.module.css";

// Render the My Order page
export function MyOrder() {
  // Getting all orders from Product Reducer
  const { myorders } = useSelector(productSelector);

  // To show/hide the loading spinner on the page
  const [isLoading, setLoading] = useState(true);

  // Hide the spinner after a given time
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.mainContainer}>
          <h1 className={styles.orderHeading}>My Orders</h1>
          {myorders.length === 0 ? (
            <>
              <h1>You haven't placed any orders yet!</h1>
              <Link to="/">Start Shopping</Link>
            </>
          ) : (
            <div className={styles.orderListContainer}>
              {myorders.map((order, i) => (
                <OrderDetail key={i} order={order} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
