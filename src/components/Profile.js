import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { deleteBook,filterBook } from "../actions";
import { Link } from 'react-router-dom';
export default function Profile() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleDeleteBook = (idBook) => {
    dispatch(deleteBook(idBook));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
              <div className="row">
                <div className="col-lg-12">
                  <div className="main-profile ">
                    <div className="row">
                      <div className="col-lg-4">
                        <img
                          src={`assets/images/${user.img}`}
                          alt=""
                          style={{ borderRadius: "23px" }}
                        />
                      </div>
                      <div className="col-lg-4 align-self-center">
                        <div className="main-info header-text">
                          <span>Online</span>
                          <h4>
                            {user.prenom} {user.nom}
                          </h4>
                          <p>{user.bio}</p>
                          <div className="main-border-button">
                            <Link to={`/Update_User/${user.id}`}>
                              Update Info
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 align-self-center">
                        <ul>
                          <li>
                            Books Favorited{" "}
                            <span>{user.browserBook.favBooks}</span>
                          </li>
                          <li>
                            Books Viewd{" "}
                            <span>{user.browserBook.viewedBooks}</span>
                          </li>
                          <li>
                            Your Books <span>{user.userLibrary.length}</span>
                          </li>
                          <li>
                            Last Update{" "}
                            {user.userLibrary.length > 0 ? (
                              <span>
                                {
                                  user.userLibrary[user.userLibrary.length - 1]
                                    .addTime
                                }
                              </span>
                            ) : (
                              <span>No books available.</span>
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="books">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="heading-section">
                                <h4>
                                  <em>Your</em> Library
                                </h4>
                              </div>
                            </div>
                            {user.userLibrary.length > 0 ? (
                              user.userLibrary.map((book) => (
                                <div
                                  className="col-lg-3 col-sm-6"
                                  key={book.idBook}>
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
                                      <Link
                                        to={`/MyBooksDetails/${book.idBook}`}>
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
                                        <button className="update">
                                          update
                                        </button>
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
