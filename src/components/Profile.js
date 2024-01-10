import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import MyBooks from './MyBooks';
export default function Profile() {
  const user = useSelector((state) => state.user);

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
                            <span>{user.browserBook.viewedBooks / 2}</span>
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
                    <MyBooks />
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
