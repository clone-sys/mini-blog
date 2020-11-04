import React, { useContext } from "react";
import { AppContext } from "../ context/AppContext";

const Hello = ({ name, id, text }) => {
  const { message } = useContext(AppContext);
  return (
    <div>
      <h1>Hello {name}</h1>
      <h2>{id}</h2>
      <h3>{text}</h3>
      <p>
        <i>{message} from context</i>
      </p>
    </div>
  );
};

export default Hello;
