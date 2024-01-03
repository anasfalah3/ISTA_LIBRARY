import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Browse() {
  const [Title,setTitle] = useState("")
  const [Search,setSearch] = useState("")
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`https://openlibrary.org/search.json?title=${Search}&limit=15`)
      .then((response) => setBooks(response.data.docs))
      .catch((error) => console.error("Erreur fetch:", error));
  }, [Search]);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleSearch = () => setSearch(Title);


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
              <div className="row">
                <div className="main-banner">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="header-text">
                        <h4>
                          <em>Search</em> For a Book Here
                        </h4>
                      </div>
                      <div className="search-form">
                        <div className="container">
                          <div className="search-form-content">
                            <div className="search-form">
                              <div className="search-form-elem flex flex-sb bg-white">
                                <input
                                  type="text"
                                  className="form-control"
                                  onChange={(e) => handleTitle(e)}
                                  on
                                  placeholder="Search By Title"
                                />
                              </div>
                              <button
                                className="search-btn"
                                onClick={handleSearch}>
                                ok
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {Books.length > 0 ? (
                <div className="most-popular">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="heading-section">
                        <h4>
                          <em>{Search}</em> Resultat
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
                                <Link
                                  to={`/Details/${book.key.substring(
                                    book.key.lastIndexOf("/") + 1
                                  )}`}>
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
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                "Aucun Book"
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
