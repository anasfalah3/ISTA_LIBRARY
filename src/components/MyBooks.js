import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../actions";
import { Link } from "react-router-dom";
export default function MyBooks() {
const user = useSelector((state) => state.user);
const dispatch = useDispatch();
const [selectedCategory, setSelectedCategory] = useState("all");

const handleDeleteBook = (idBook) => {
  dispatch(deleteBook(idBook));
};

const filteredBooks =
  selectedCategory === "all"
    ? user.userLibrary
    : user.userLibrary.filter((book) => book.category === selectedCategory);


  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="books">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-section">
                <h4>
                  <em>Your</em> Library
                </h4>
                <select
                className="form-select w-25"
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  value={selectedCategory}>
                  <option value={"all"}>All</option>
                  <option value="Science Fiction">Science Fiction</option>
                  <option value="Crime">Crime</option>
                  <option value="History">History</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Horror">Horror</option>
                  <option value="Romance">Romance</option>
                  <option value="Adventure">Adventure</option>
                  {/* Add more categories as needed */}
                </select>
              </div>
              <br/>
            </div>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <div className="col-lg-3 col-sm-6" key={book.idBook}>
                  <div className="item">
                    <Link to={`/MyBooksDetails/${book.idBook}`}>
                      <div className="thumb">
                        <img
                          src={`assets/images/covers/${book.cover}`}
                          alt={`${book.title}`}
                          height={"250px"}
                          style={{ borderRadius: "23px" }}
                        />
                      </div>
                    </Link>
                    <div className="down-content">
                      <Link to={`/MyBooksDetails/${book.idBook}`}>
                        <h4>{book.title}</h4>
                      </Link>
                    </div>
                    <div className="down-content">
                      <button
                        className="delete"
                        onClick={() =>
                          window.confirm(
                            "Are you sure you want to delete this book?"
                          )
                            ? handleDeleteBook(book.idBook)
                            : console.log("cancel")
                        }>
                        delete
                      </button>
                      <Link to={`/Update_Book/${book.idBook}`}>
                        <button className="update">update</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <p>No books available.</p>
              </div>
            )}
            <div className="col-lg-12">
              <div className="main-button">
                <Link to={`/CreateBook`}>Add A Book</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
