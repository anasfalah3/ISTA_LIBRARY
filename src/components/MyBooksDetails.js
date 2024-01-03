import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { favoriteBook } from "../actions";

export default function MyBooksDetails() {
  const { idBook } = useParams();
  const userLibrary = useSelector((state) => state.user.userLibrary);
  const dispatch = useDispatch();

  const handleFavorite = (idBook) => {
    dispatch(favoriteBook(idBook));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {userLibrary
            .filter((Books) => Books.idBook == idBook)
            .map((book) => (
              <div className="page-content">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="book-cover">
                      <div className="heading-section">
                        <h4>
                          <em>Read</em> Now
                        </h4>
                      </div>
                      <div className="col" key={book.idBook}>
                        <div className="item">
                          <img
                            src={`../assets/images/covers/${book.cover}`}
                            alt={book.title}
                            height={"400px"}
                            style={{ borderRadius: "23px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-8">
                    <div className="details header-text">
                      <div className="row heading-section">
                        <div className="col-9">
                          <h4>
                            <em>{book.title}</em> Book
                          </h4>
                        </div>
                        <div className="col-3">
                          <div className="main-button">
                            <button
                              className="favorite"
                              onClick={handleFavorite}>
                              Favorite
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <p>
                          {book.description
                            ? typeof book.description === "string"
                              ? book.description
                              : book.description.value ||
                                "No description available."
                            : "No description available."}
                        </p>
                      </div>
                      {/* description */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
