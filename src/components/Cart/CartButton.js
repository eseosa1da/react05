import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartQty = useSelector((state) => state.cart.totalQuantity);

  const cartToggleHandler = () => {
    // e.preventDefault();

    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQty}</span>
    </button>
  );
};

export default CartButton;
