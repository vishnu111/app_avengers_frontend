import Nav from "./Navigation/Nav";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../store";
import { useEffect } from "react";
import React, { useState } from "react";
import "../sass/home.scss";
import BookDetailModal from "./modal/BookDetailModal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carouselImg1 from "../carousel-images/carousel1.jpeg";
import carouselImg2 from "../carousel-images/carousel2.jpeg";
import carouselImg3 from "../carousel-images/carousel3.jpeg";
import carouselImg4 from "../carousel-images/carousel4.jpeg";
import iconImg1 from "../icon-images/award-winners.png";
import iconImg2 from "../icon-images/best-sellers.png";
import iconImg3 from "../icon-images/international-best-sellers.png";
import iconImg4 from "../icon-images/new-arraivals.png";
import { Link } from "react-router-dom";
function Home() {
  //To dispatch actions to the redux store
  const dispatch = useDispatch();

  //Fetches the data on first components load
  useEffect(() => {
    fetchData();
  }, []);

  //state to check if the book detail modal is opened/closed
  const [isModalOpen, setIsModalOpen] = useState(false);

  //state to store the currently opened modal for book detail
  const [currentModalData, setCurrentModalData] = useState("");

  //arrow function that opens the modal
  const openModal = (e) => {
    if (e.target.className !== "book-card")
      setCurrentModalData(e.target.parentNode.id);
    else setCurrentModalData(e.target.id);
    setIsModalOpen(true);
  };

  //arrow function that closes the book-detail modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  //fetches book data on first component load
  const fetchData = async () => {
    try {
      await fetch("/get-books")
        .then((response) => response.json())
        .then((data) => {
          dispatch(getBooks(data));
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log("Error fetching data : ", error);
    }
  };

  //feching the book data from redux store
  const books = useSelector((state) => state.books);
  return (
    <div>
      <div>
        {/* importing navigation menu */}
        <Nav />

        {/* Carousel html structure */}
        <div className="carousel-home">
          <Carousel showThumbs={false}>
            <Link to="/award-winners">
              <div>
                <img src={carouselImg1} alt="carousel" />
              </div>
            </Link>
            <Link to="/new-arrivals">
              <div>
                <img src={carouselImg2} alt="carousel" />
              </div>
            </Link>
            <Link to="/best-sellers">
              <div>
                <img src={carouselImg3} alt="carousel" />
              </div>
            </Link>
            <Link to="/featured-authors">
              <div>
                <img src={carouselImg4} alt="carousel" />
              </div>
            </Link>
          </Carousel>
        </div>
        {/* icon images html structure */}
        <div className="hide-nav-home">
          <div className="home-icon-pack">
            <Link to="/award-winners">
              <img src={iconImg1} alt="icon" />
            </Link>
            <Link to="/new-arrivals">
              <img src={iconImg4} alt="icon" />
            </Link>
            <Link to="/best-sellers">
              <img src={iconImg2} alt="icon" />
            </Link>
            <Link to="/award-winners">
              <img src={iconImg3} alt="icon" />
            </Link>
          </div>
        </div>

        {/* books card display */}
        <div className="all-books">
          {books.map((book) => (
            <div
              key={book.id}
              className="book-card"
              id={book.id}
              onClick={openModal}
            >
              <img src={book.imageLink} alt={book.title}></img>
              <h4>{book.title}</h4>
              <p className="author-name">{book.author}</p>
              <p className="book-price">Rs. {book.price}</p>
              <button className="quick-view-button">QUICK VIEW</button>
            </div>
          ))}
        </div>
      </div>

      {/* This is the structure for book detail modal */}
      <BookDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        bookId={currentModalData}
      />
    </div>
  );
}
export default Home;
