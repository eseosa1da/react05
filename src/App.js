import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { uiActions } from "./store/ui-slice";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.ui.cartIsVisible);

  const notificationStatus = useSelector((state) => state.ui.notification);

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data",
        })
      );
      const response = await fetch(
        "https://react-tp-backend-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed!");
      }

      dispatch(
        uiActions.showNotification({
          status: "Success",
          title: "Success",
          message: "Sent cart data successfully",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending Data Failed",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      {notificationStatus && (
        <Notification
          status={notificationStatus.status}
          title={notificationStatus.title}
          message={notificationStatus.message}
        />
      )}
      <Layout>
        {authStatus && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
