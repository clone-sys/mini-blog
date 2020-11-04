import React, { useState, useEffect } from "react";
import axios from "axios";
import Comments from "../components/Comments";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Post = ({ match }) => {
  const { id } = match.params;
  const [post, setPost] = useState();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(({ data }) => {
        setPost(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <h1 className="mb-3">{post?.title}</h1>
      <h4 className="mb-5">
        User Id: <Link to={`/users/${post?.userId}`}> {post?.userId} </Link>
      </h4>
      <Card>
        <Card.Body>
          <p className="text-left">{post?.body}</p>
        </Card.Body>
      </Card>

      <Comments id={id} />
    </>
  );
};

export default Post;
