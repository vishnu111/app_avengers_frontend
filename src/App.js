import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AwardWinners from "./components/BookTypes/AwardWinners";
import BestSellers from "./components/BookTypes/BestSellers";
import NewArrivals from "./components/BookTypes/NewArrivals";
import FeaturedAuthors from "./components/FeaturedAuthors";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <div className="Home">
      {/* Router, Routes from "react-router-dom to map the url routes with react components" */}
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/award-winners" exact element={<AwardWinners />} />
          <Route path="/best-sellers" exact element={<BestSellers />} />
          <Route path="/new-arrivals" exact element={<NewArrivals />} />
          <Route path="/featured-authors" exact element={<FeaturedAuthors />} />
          <Route path="/cart" exact element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
