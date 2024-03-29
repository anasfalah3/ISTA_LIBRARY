import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBook } from "../../actions";
import { Link, useParams } from "react-router-dom";

export default function UpdateBook() {
  const { idBook } = useParams();

  const user = useSelector((state) => state.user);
  const bookToUpdate = user.userLibrary.find((book) => book.idBook == idBook);

  let [title, setTitle] = useState(bookToUpdate.title);
  let [description, setDescription] = useState(bookToUpdate.description);
  let [cover, setCover] = useState(bookToUpdate.cover);
  let [category, setCategory] = useState(bookToUpdate.category);
  let [addTime, setAddTime] = useState(bookToUpdate.addTime);
  const dispatch = useDispatch();

  function handleImage(e) {
    e.target.files.length > 0
      ? setCover(e.target.files[0].name)
      : setCover(bookToUpdate.cover);
  }

  const handleUpdateBook = () => {
    dispatch(updateBook(idBook, title, description, cover,category, addTime));
    alert("The book has been Updated successfully");
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
                    <h4>Category:</h4>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => setCategory(e.target.value)}>
                      <option selected>Chose a category</option>
                      <option value="Science Fiction">Science Fiction</option>
                      <option value="Crime">Crime</option>
                      <option value="History">History</option>
                      <option value="Fantasy">Fantasy</option>
                      <option value="Horror">Horror</option>
                      <option value="Romance">Romance</option>
                      <option value="Adventure">Adventure</option>
                    </select>
                    <br />
                    <h4>Cover:</h4>
                    <input
                      type="file"
                      className="form-control"
                      onChange={(e) => handleImage(e)}
                    />
                    <br />
                    <div className="form-group mt-3">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleUpdateBook}>
                        Update
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
