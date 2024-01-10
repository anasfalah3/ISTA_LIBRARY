import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { favoriteBook, viewedBook } from "../actions";

export default function Details() {
  const [book, setBook] = useState({});
  const { isbn } = useParams();
  const dispatch = useDispatch();

  const handleFavorite = (idBook) => {
    dispatch(favoriteBook(idBook));
  };
  useEffect(() => {
    dispatch(viewedBook());
  }, []);
  useEffect(() => {
    axios
      .get(`https://openlibrary.org/works/${isbn}.json`)
      .then((response) => setBook(response.data))
      .catch((error) => console.error("Erreur fetch:", error));
  }, [isbn]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-content">
            <div className="row">
              <div className="col-lg-4">
                <div className="book-cover">
                  <div className="heading-section">
                    <h4>
                      <em>Read</em> Now
                    </h4>
                  </div>

                  <div className="col" key={book.key}>
                    <div className="item">
                      {book.covers && book.covers.length > 0 && (
                        <img
                          src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`}
                          alt={book.title}
                          height={"400px"}
                        />
                      )}
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
                        <button className="favorite" onClick={handleFavorite}>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
