import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import getEntries from "./../utils/methods/getEntries";

export default props => {
  //   const dispatch = useDispatch();

  const players = useSelector(state => state.players);

  useEffect(() => {
    getEntries("questions").then(entries => {
      dispatch({ type: "SET_QUESTIONS", payload: entries.items });
      console.log(entries.items);
    });
  }, []);

  //   if (!players.areLoaded) {
  //     return <p>players are loading</p>;
  //   }

  return (
    <>
      <h1>Je suis quizz</h1>
      {}
    </>
  );
};
