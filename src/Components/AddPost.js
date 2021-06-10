import React, { useState } from "react";
import axios from "axios";

const AddPost = (props) => {
  const [state, setState] = useState({
    image: "",
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: [e.target.value],
    });
  };

  const handleAdd = () => {
    axios
      .post("https://60334e6aa223790017ad019e.mockapi.io/api/v1/posts", {
        createdAt: new Date(),
        updatedAt: new Date(),
        title: state.title,
        description: state.description,
        image: state.image,
        userId: "1",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {});
  };

  return (
    <div>
      <div className="card mx-auto" style={{ width: "40rem" }}>
        <div className="card-body">
          <p>New Post</p>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="image"
                value={state.image}
                placeholder="Image"
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="title"
                value={state.title}
                placeholder="Title"
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <div className="input-group">
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  placeholder="Description"
                  name="description"
                  value={state.description}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div style={{ display: "inline-flex" }}>
              <button className="btn btn-light" onClick={handleAdd}>
                Add
              </button>
              <button className="btn btn-light" onClick={props.handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
