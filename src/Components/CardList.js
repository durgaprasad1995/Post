import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function CardList(props) {
  var comments = [];

  // useEffect(() => {
  //   var countComments;
  //   comments.map((data) => (countComments = data));
  //   axios
  //     .get(
  //       "https://60334e6aa223790017ad019e.mockapi.io/api/v1/posts/" +
  //         countComments +
  //         "/comments",
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     });
  // }, [comments]);

  return (
    <div>
      {props.postData &&
        props.postData.map((data, index) => {
          comments.push(data.id);
          console.log(comments);
          return (
            <div
              key={data.id}
              className="card mx-auto"
              style={{ width: "40rem" }}
            >
              <img className="card-img-top" src={data.image} alt={data.title} />
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">Created: {data.createdAt}</p>
                <p className="card-text">Last updated: {data.updatedAt}</p>
                <br />
                <p className="card-text">{data.description}</p>
                <div style={{ display: "inline-flex" }}>
                  <p className="card-text">Comments</p>
                  <div style={{ paddingLeft: "5rem", marginLeft: "23rem" }}>
                    <button
                      className="btn btn-light"
                      id={data.id}
                      onClick={props.handleEdit}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-light"
                      id={data.id}
                      onClick={props.handleDelete}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default CardList;
