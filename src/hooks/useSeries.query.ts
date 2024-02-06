import { IVideoSeries, FetchState } from "../types";

import { useFetch } from "./useFetch";

const DATA_URL = "/public/api/data.json";

interface SeriesType extends FetchState {
  series: IVideoSeries;
}

/**
 * Simple data fetching hook for series data. For convenience, map the incoming data object to a first-party variable for easier access while still retaining the original shape
 */
export function useSeries(): SeriesType {
  const res = useFetch(DATA_URL);

  const series = res.data?.data?.videoCategory;

  return { ...res, series };
}
