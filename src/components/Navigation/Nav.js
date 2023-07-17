import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../sass/nav.scss";
import siteIcon from "../../icon-images/site-icon.png";
function Nav() {
  //Fetching the no. of items from the cart through redux store
  const cart = useSelector((state) => state.cart).length;
  return (
    // html structure for navigation menu
    <nav className="nav-bar-main">
      <div className="nav-bar-div">
        <Link to="/">
          <img src={siteIcon} alt="site icon" />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/award-winners">Award Winners</Link>
        <Link to="/new-arrivals">New Arrivals</Link>
        <Link to="/best-sellers">Best Sellers</Link>
        <Link to="/featured-authors" className="hide-mobile">
          Featured Authors
        </Link>
        <Link to="/cart" className="cart-nav-item">
          Cart<span className="cart-number">{cart}</span>
        </Link>
      </div>
    </nav>
  );
}
export default Nav;
