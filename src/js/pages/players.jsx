import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import getEntries from "./../utils/methods/getEntries";

import { useTitle } from "../components/custom/custom-hooks/setTitle";

export default props => {
  const dispatch = useDispatch();

  const players = useSelector(state => state.players);

  useTitle("my title");

  useEffect(() => {
    getEntries("player").then(entries => {
      dispatch({ type: "SET_PLAYERS", payload: entries.items });
    });
  }, []);

  if (!players.areLoaded) {
    return <p>players are loading</p>;
  }

  return (
    <>
      <h1>list des players:</h1>
      <ul>
        {players.items.map(player => (
          <li key={player.sys.id}>{player.fields.name["en-US"]}</li>
        ))}
      </ul>
    </>
  );
};
