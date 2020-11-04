import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/Users")
      .then(({ data }) => {
        // console.log(data);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>All Users</h1>

      {users?.map((user) => {
        return (
          <Card className="mb-5" key={user.id}>
            <Card.Header>
              <Card.Title>{user.username}</Card.Title>
            </Card.Header>
            <Card.Body className="text-left">
              <p className="text-left">Website:{user.website}</p>
              <p className="text-left">Phone:{user.phone}</p>
            </Card.Body>
            <Card.Footer>
              User ID: <Link to={`/users/${user.id}`}> {user.id} </Link>
            </Card.Footer>
          </Card>
        );
      })}
    </>
  );
};

export default Users;
