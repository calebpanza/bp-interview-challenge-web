import { useSeries } from "../hooks/useSeries.query";

export const App = () => {
  const { series } = useSeries();

  return <p>{JSON.stringify(series)}</p>;
};
