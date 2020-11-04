import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => {
        // console.log(data);
        setPosts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>All Posts</h1>
      {posts?.map((post) => {
        return (
          <Card className="mb-5" key={post.id}>
            <Card.Header>
              <Card.Title>{post.title}</Card.Title>
            </Card.Header>
            <Card.Body className="text-left">{post.body}</Card.Body>
            <Card.Footer>
              Post ID: <Link to={`/posts/${post.id}`}>{post.id}</Link>
              <br />
              User ID: <Link to={`/users/${post.userId}`}> {post.userId} </Link>
              <br />
            </Card.Footer>
          </Card>
        );
      })}
    </>
  );
};

export default Posts;
