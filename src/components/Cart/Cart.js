import Nav from "../Navigation/Nav";
import { useSelector, useDispatch } from "react-redux";
import "../../sass/Cart.scss";
import { getCart } from "../../store";
function Cart() {
  //fecthing cart data from redux store
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  //function to manage decrements the quantity of item in the cart
  const removeItem = (id) => {
    let newItem;
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem !== undefined) {
      let newCount = cartItem.count - 1;
      newItem = { ...cartItem, count: newCount < 0 ? 0 : newCount };
    }
    dispatch(getCart(newItem));
  };

  //function to manage increment the quantity of item in the cart
  const addItem = (id) => {
    let newItem;
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem !== undefined) {
      let newCount = cartItem.count + 1;
      newItem = { ...cartItem, count: newCount < 0 ? 0 : newCount };
    }
    dispatch(getCart(newItem));
  };
  return (
    // cart html structure
    <div>
      <Nav />
      <h1 className="page-title">This is the cart page</h1>
      <div className="all-cart-cards">
        {cart.map((c) => (
          <div className="cart-card" key={c.id}>
            <div className="cart-card-left">
              <div>
                <img src={c.imageLink} alt={c.title} className="cart-image" />
              </div>
              <div className="cart-card-left-top">
                <h4>{c.title}</h4>
                <p>{c.author}</p>
              </div>
            </div>
            <div className="cart-card-right">
              <div className="card-cart-right-top">
                <span>Quantity : </span>
                <span
                  className="left-count item-count"
                  onClick={() => {
                    removeItem(c.id);
                  }}
                >
                  -
                </span>
                {c.count}
                <span
                  className="right-count item-count"
                  onClick={() => {
                    addItem(c.id);
                  }}
                >
                  +
                </span>
              </div>
              <div className="card-cart-right-bottom">
                Price : {c.price * c.count}
              </div>
            </div>
          </div>
        ))}
        <p className="cart-price">
          Total Price :
          {cart.reduce((sum, item) => sum + item.price * item.count, 0)}
        </p>
      </div>
    </div>
  );
}
export default Cart;
