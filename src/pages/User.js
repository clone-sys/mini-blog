import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const User = ({ match }) => {
  const { id } = match.params;
  // const id = match.params.id;
  // const { id } = useParams();
  const [user, setUser] = useState();
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((someVariable) => {
        //for fetch, can be anything
        console.log(someVariable);
        setUser(someVariable);
      })
      .catch((err) => console.log(err));

    axios(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then(({ data }) => {
        //for axios, can either be anyVariable.data OR shortcut via destructuring: ({data}) => ...code
        setPosts(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <h1 className="mb-3">{user?.username}</h1>
      <h4 className="mb-5">Username: {user && user.name}</h4>
      <p className="text-left">Website:{user?.website}</p>
      <p className="text-left">Phone:{user?.phone}</p>
      <div className="text-left">
        <h5>{user?.username}'s Posts:</h5>
        {posts?.map((post) => {
          return (
            <div key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default User;
