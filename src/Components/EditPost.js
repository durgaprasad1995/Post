import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const EditPost = (props) => {
  const [state, setState] = useState({
    image: "",
    title: "",
    description: "",
  });
  const history = useHistory();
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: [e.target.value],
    });
  };

  const handleUpdate = () => {
    axios
      .put(
        "https://60334e6aa223790017ad019e.mockapi.io/api/v1/posts/" + props.id,
        {
          id: props.id,
          updatedAt: new Date(),
          title: state.title,
          description: state.description,
          image: state.image,
          userId: "1",
        },
      )
      .then((res) => {
        if (res.status == 200) {
          history.push("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="card mx-auto" style={{ width: "40rem" }}>
        <div className="card-body">
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="image"
                className="form-control"
                placeholder="Image"
                value={state.image || props.image}
                autoFocus={true}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="text"
                name="title"
                className="form-control"
                value={state.title || props.title}
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
                  value={state.description || props.description}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div style={{ display: "inline-flex" }}>
              <button className="btn btn-light" onClick={handleUpdate}>
                Update
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

export default EditPost;
