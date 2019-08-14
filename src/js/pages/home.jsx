import React, { useState } from "react";
import createEntry from "./../utils/methods/createEntry";
import { Link } from "react-router-dom";

export default props => {
  const [name, setName] = useState("");
  const createUser = () => {
    createEntry("player", {
      name: {
        "en-US": name
      }
    });
  };

  const onChange = e => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <h1>Bienvenue</h1>
      <input
        type="text"
        value={name}
        name="name"
        placeholder="entrez votre peudo"
        onChange={e => onChange(e)}
      />
      <Link to="/quizz/1">
        <button onClick={createUser}>Commencez le quizz</button>
      </Link>
    </>
  );
};
