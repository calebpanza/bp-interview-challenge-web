import { useReducer, useEffect } from "react";

import { getSearchParam } from "../utils/getSearchParam";
import { wait } from "../utils/wait";

interface FetchAction {
  field: string;
  value: any;
}

interface FetchState {
  loading: boolean;
  errors: any;
  data: any;
  called: boolean;
  [key: string]: any;
}

function fetchReducer(state: FetchState, action: FetchAction[]) {
  const newState = { ...state };

  action.forEach(({ field, value }: FetchAction) => (newState[field] = value));

  return newState;
}

/**
 * Simple data fetching hook for series data. Follows the API structure laid out in in `useQuery` from Apollo Client with a _slight_ modification to deconstruct the properties of `data` to allow for less prop drilling to get the actual data.
 */
export function useFetch(url: string) {
  const [state, dispatch] = useReducer(fetchReducer, {
    loading: false,
    errors: null,
    data: null,
    called: false,
  });

  async function fetchData() {
    // Set loading state and called
    dispatch([
      { field: "loading", value: true },
      { field: "called", value: true },
    ]);

    try {
      // for testing purposes, add a delay to the fetch so we can see the loading state
      const delayForTesting = getSearchParam("load_delay") || "2500";
      await wait(parseInt(delayForTesting, 10));

      // fetch and save data
      const response = await fetch(url);
      const data = await response.json();

      dispatch([{ field: "data", value: data }]);
    } catch (error) {
      // handle errors
      dispatch([{ field: "errors", value: error }]);
    }

    dispatch([{ field: "loading", value: false }]);
  }

  useEffect(() => {
    fetchData();

    return function cleanUpSeriesDataFetch() {
      // reset loading state
      dispatch([{ field: "loading", value: false }]);
    };
  }, []);

  return { ...state, refetch: fetchData };
}
