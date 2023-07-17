import Nav from "../Navigation/Nav";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import BookDetailModal from "../modal/BookDetailModal";
function AwardWinners() {
  //state to check if the book detail modal is opened/closed
  const [isModalOpen, setIsModalOpen] = useState(false);

  //state to store the currently opened modal for book detail
  const [currentModalData, setCurrentModalData] = useState("");

  //fetching book data from redux state
  const books = useSelector((state) => state.books);

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

  return (
    <div>
      <Nav />
      <h1 className="page-title">Award Winners :</h1>
      {/* books card display */}
      <div className="all-books">
        {books.map(
          (book) =>
            book.shelf == "Award Winners" && (
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
                <button class="quick-view-button">QUICK VIEW</button>
              </div>
            )
        )}
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
export default AwardWinners;
