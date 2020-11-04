import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const Comments = ({ id }) => {
  const [comments, setComments] = useState();
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(({ data }) => {
        // console.log(data);
        setComments(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <h4 className="mt-5 mb-3">Comments:</h4>
      {comments?.map((comment) => {
        return (
          <Table key={comment.id} striped bordered>
            <thead>
              <tr>
                <th>Comment Id</th>
                <th>Commenter Email</th>
                <th>Comment Name</th>
                <th>Coment Text</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{comment.id}</td>
                <td>{comment.email}</td>
                <td>{comment.name}</td>
                <td>{comment.body}</td>
              </tr>
            </tbody>
          </Table>
        );
      })}
    </>
  );
};

export default Comments;
