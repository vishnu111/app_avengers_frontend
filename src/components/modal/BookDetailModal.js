import React from "react";
import "../../sass/Modal.scss";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../../store";
function BookDetailModal({ isOpen, onClose, bookId }) {
  //dipatch from redux to pass actions to manage the state
  const dispatch = useDispatch();

  //Fetching book data from redux store
  const books = useSelector((state) => state.books);

  //find the details of the book using book id from list of books fetched from redux store
  const book = books.find((book) => book.id == bookId);

  //Arrow function to manage adding the item to cart
  const addToCart = () => {
    let newCart = { count: 1, ...book };
    const findExist = cart.find((c) => c.id === book.id);
    if (findExist !== undefined) {
      newCart = { count: findExist.count + 1, ...book };
    }
    dispatch(getCart(newCart));
    onClose();
  };

  //Fecthing the cart data from redux store
  const cart = useSelector((state) => state.cart);

  //Returing null if the isOpen prop is passed as false from parent component
  if (!isOpen) {
    return null;
  }
  return (
    // modal html structure
    <div className="modal-overlay books-detail-modal">
      <div className="modal-content">
        <h2>{book.title}</h2>
        <div className="book-info-img">
          <div className="book-info">
            <p>
              <span>Author : </span>
              {book.author}
            </p>
            <p>
              <span>Country : </span>
              {book.country}
            </p>
            <p>
              <span>Language : </span>
              {book.language}
            </p>
            <p>
              <span>No.of Pages : </span>
              {book.pages}
            </p>
            <p>
              <span>First Published Year : </span>
              {book.year}
            </p>
            <p>
              <span>Price : </span>Rs.
              {book.price}
            </p>
          </div>
          <div className="book-img">
            <img src={book.imageLink} alt={book.title}></img>
          </div>
        </div>
        <div className="buttons-wrap">
          <button className="cart-btn modal-btn" onClick={addToCart}>
            Add To Cart
          </button>
          <button className="modal-close modal-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookDetailModal;
