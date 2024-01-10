import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../actions";
import { Link, useParams } from "react-router-dom";

export default function UpdateUser() {
  const { id } = useParams();

  const user = useSelector((state) => state.user);
  let [nom, setNom] = useState(user.nom);
  let [prenom, setPrenom] = useState(user.prenom);
  let [bio, setBio] = useState(user.bio);
  let [img, setImg] = useState(user.img);

  const dispatch = useDispatch();

  function handleImage(e) {
    e.target.files.length > 0
      ? setImg(e.target.files[0].name)
      : setImg(user.img);
  }

  const handleUpdateUser = () => {
    dispatch(updateUser(id, nom, prenom, bio, img));
    alert("Your informations has been Updated successfully");
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
                        <em>Update</em> Profile
                      </h4>
                    </div>
                    <div className="col-3">
                      <div className="main-button"></div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="form-group ">
                      <h4>Nom:</h4>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        />
                        <h4>Prenom:</h4>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <h4>Bio:</h4>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                      />
                    </div>
                    <br />
                    <h4>Image:</h4>
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
                        onClick={handleUpdateUser}>
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
