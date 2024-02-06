import { useEffect, useState } from "react";

import { getSearchParam } from "../utils/getSearchParam";

export function useFailure() {
  const debug = getSearchParam("debug");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (debug && !error) {
      var randomNumber = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;

      const timeout = setTimeout(() => {
        setError(true);
      }, randomNumber);

      return () => clearTimeout(timeout);
    }
  }, [debug]);

  return error;
}
