import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`https://openlibrary.org/search.json?title=the-hobbits&limit=8`)
      .then((response) => setBooks(response.data.docs))
      .catch((error) => console.error("Erreur fetch:", error));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
              <div className="main-banner">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="header-text">
                      <h6>Welcome To Ista Library</h6>
                      <h4>
                        <em>Browse</em> The Popular Books Here
                      </h4>
                      <div className="main-button">
                        <Link to={"/Browse"}>Browse Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="most-popular">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="heading-section">
                      <h4>
                        <em>Most Popular</em> Read Now
                      </h4>
                    </div>
                    <div className="row">
                      {/* mapping the book list */}
                      {Books.map((book) => (
                        <div className="col-lg-3 col-sm-6" key={book.key}>
                          <div className="item">
                            {book.cover_i && (
                              <img
                                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                                alt={book.title}
                                height={"250px"}
                              />
                            )}
                            <h4>
                              <Link to={`/Details/${book.key.substring(book.key.lastIndexOf("/") + 1)}`}>
                                {book.title.length > 15
                                  ? `${book.title.substring(0, 15)}...`
                                  : book.title}
                              </Link>
                              <br />
                              <span>
                                {book.author_name[0] && book.author_name[0]}
                              </span>
                            </h4>
                            <ul>
                              <li>
                                <i className="fa fa-star"></i>
                                {book.ratings_average &&
                                  book.ratings_average.toFixed(1)}
                              </li>
                              <li>
                                <i className="fa fa-pencil"></i>
                                {book.first_publish_year &&
                                  book.first_publish_year}
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))}
                      {/* end  book list */}
                      <div className="col-lg-12">
                        <div className="main-button">
                          <Link to={"Browse"}>Discover More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
