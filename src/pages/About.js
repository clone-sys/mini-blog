import React from "react";
import Hello from "../components/Hello";

const About = () => {
  const array = [
    { id: 1, text: "X" },
    { id: 2, name: "Y" },
    { id: 3, name: "Z" },
  ];

  return (
    <div>
      <h1>About</h1>
      <p>some info</p>
      <div>
        <Hello />
      </div>
      <Hello id="1" name="Liz" />
      <Hello id="2" name="Liz2" />
      <Hello id="3" name="Liz3" />

      {/* {array.map((person) => {
        return (
          <Hello
            key={person.id}
            id={person.id}
            text={person.text}
            name={person.name}
          />
        );
      })} */}
    </div>
  );
};

export default About;
