import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";

import api from "./utils/api";
import useWindowSize from "@rehooks/window-size";
import { useAppIsFullScreen } from "./components/custom/custom-hooks/custom-window-size";

import Home from "./pages/home";
import Players from "./pages/players";
import Quizz from "./pages/quizz";
import Game from "./pages/game";

export default props => {
  const dispatch = useDispatch();
  const isLoaded = useSelector(state => state.app.isLoaded);
  const windowSize = useWindowSize();
  const [playerName, setPlayerName] = useState(null);

  useAppIsFullScreen();

  const isFullScreen = useSelector(state => state.app.fullScreen);

  useEffect(() => {
    dispatch({ type: "SET_LOADED" });
  }, []);

  if (!isLoaded) return <h1>Loading...</h1>;

  return (
    <div className="app-wrapper">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/players" exact component={Players} />
        <Route path="/quizz/:id" exact component={Quizz} />
        <Route path="/game" exact component={Game} />
      </Switch>

      <h1> Mon app est {isFullScreen ? "small" : "large"}</h1>
    </div>
  );
};
