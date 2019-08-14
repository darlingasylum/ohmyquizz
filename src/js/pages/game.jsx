import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import getEntries from "./../utils/methods/getEntries";

export default props => {
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [players, setPlayers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [step, setStep] = useState(1);

  useEffect(() => {
    getEntries("player").then(players => {
      setPlayers(players.items);
    });
    getEntries("questions").then(questions => {
      setQuestions(questions.items);
    });
  }, []);

  const handleClick = player => {
    console.log(player);
    setCurrentPlayer(player);
  };

  return (
    <>
      <section className="grid-container">
        <i>step : {step}</i>
        <h1>Welcome to oh-my-quizz</h1>
        <h2>Liste des joueurs :</h2>
        <div>
          <ul>
            {players.map(player => (
              <li
                key={player.sys.id}
                onClick={() => handleClick(player)}
                className="block p-2 cursor-pointer br-10 hover:bg-orange"
              >
                {player.fields.name["en-US"]}
              </li>
            ))}
          </ul>
        </div>
        {currentPlayer && (
          <>
            <div>Joueur actuel :</div>
            <p>{currentPlayer.fields.name["en-US"]}</p>{" "}
          </>
        )}
      </section>
    </>
  );
};
