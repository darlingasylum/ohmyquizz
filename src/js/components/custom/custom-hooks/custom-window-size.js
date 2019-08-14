import useWindowSize from "@rehooks/window-size";
import React, { useEffect } from "react";
//hook qui permet de : si on est moins de 600px, l'app devient full screen
//si c'est true je rajoute une class à mon component

import { useDispatch } from "react-redux";

export function useAppIsFullScreen() {
  const windowSize = useWindowSize();
  const dispatch = useDispatch();

  console.log(windowSize.innerWidth);

  if (windowSize.innerWidth < 900) {
    return dispatch({ type: "SET_APP_FULLSCREEN" });
  }
  return dispatch({ type: "RESET_APP_FULLSCREEN" });
}
