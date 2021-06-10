import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import EditPost from "./EditPost";
import AddPost from "./AddPost";
import CardList from "./CardList";

const Post = () => {
  const [postData, setPostData] = useState([]);
  const [enableEdit, setEnableEdit] = useState(false);
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [enableAdd, setEnableAdd] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    setEnableEdit(false);
    axios
      .get("https://60334e6aa223790017ad019e.mockapi.io/api/v1/posts")
      .then((res) => {
        setPostData(res.data.items.reverse());
      });
  }, []);

  const handleEdit = (e) => {
    console.log(e.target.id);
    setId(e.target.id);
    setEnableEdit(true);
    setEnableAdd(false);
    var editData = postData.find((loc) => {
      if (loc.id === e.target.id) {
        return loc;
      }
    });
    setImage(editData.image);
    setTitle(editData.title);
    setDescription(editData.description);
  };

  const handleCancel = () => {
    setEnableEdit(false);
    setEnableAdd(false);
  };

  const handleAddButton = () => {
    setEnableAdd(true);
  };

  const handleDelete = (e) => {
    axios
      .delete(
        "https://60334e6aa223790017ad019e.mockapi.io/api/v1/posts/" +
          e.target.id,
      )
      .then((res) => {
        if (res.status == 200) {

          setPostData(postData);
        }
      });
  };

  return (
    <div>
      <button
        className="btn btn-light card mx-auto"
        style={{ marginLeft: "60rem" }}
        onClick={handleAddButton}
      >
        New Post
      </button>
      {enableAdd ? <AddPost handleCancel={handleCancel} /> : ""}

      {enableEdit ? (
        <EditPost
          image={image}
          title={title}
          description={description}
          handleCancel={handleCancel}
          id={id}
        />
      ) : (
        ""
      )}

      <CardList
        id={id}
        postData={postData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Post;
