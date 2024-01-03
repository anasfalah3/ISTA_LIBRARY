import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../actions";
import { Link } from "react-router-dom";
export default function CreateBook() {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [img, setimg] = useState("Default_img.jpg");

  const dispatch = useDispatch();
  const userLibrary = useSelector((state) => state.user.userLibrary);


  function handleImage(e) {
    e.target.files.length > 0
      ? setimg(e.target.files[0].name)
      : setimg("Default_img.jpg");
  }

  const handleAddBook = () => {
      const currentDate = new Date();
      const addTime = currentDate.toLocaleString("fr-FR", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
    const idBook = userLibrary.length + 1;
    dispatch(addBook(idBook, title, description, img, addTime));
    alert("The book has been added successfully");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-content">
            <div className="row">
              <div className="col-lg-12">
                <div className="details header-text">
                  <div className="row heading-section">
                    <div className="col-9">
                      <h4>
                        <em>test</em> Book
                      </h4>
                    </div>
                    <div className="col-3">
                      <div className="main-button"></div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <h4>Title:</h4>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <h4>Description:</h4>
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Description"
                        value={description}
                        onChange={(e) =>
                          setDescription(e.target.value)
                        }></textarea>
                    </div>
                    <br />
                    <input type="file" onChange={(e) => handleImage(e)} />
                    <br />
                    <div className="form-group mt-3">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        value={img}
                        onClick={handleAddBook}>
                        Add
                      </button>
                      <Link to={"/Profile"}>
                        <button className="btn btn-danger mx-2">Cancel</button>
                      </Link>
                    </div>
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
