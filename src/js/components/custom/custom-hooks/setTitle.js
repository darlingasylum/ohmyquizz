import React, { useEffect } from "react";
//hook qui permet de set un title dans nimporte quel composant

import { useDispatch } from "react-redux";

export function useTitle(props) {
  const dispatch = useDispatch();

  if (!props) return;
  useEffect(() => {
    console.log(props);
    dispatch({ type: "SET_TITLE", payload: props });
  }, []);
}
