import { useFetch } from "./useFetch";

const DATA_URL = "/public/api/data.json";

/**
 * Simple data fetching hook for series data. For convenience, map the incoming data object to a first-party variable for easier access while still retaining the original shape
 */
export function useSeries() {
  const res = useFetch(DATA_URL);

  const series = res.data?.data?.videoCategory;

  return { ...res, series };
}
