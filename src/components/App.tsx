import { useSeries } from "../hooks/useSeries.query";

import { Hero } from "./Hero";
import { VideoCollection } from "./VideoCollection";

export const App = () => {
  const { series } = useSeries();

  return (
    <div style={{ width: "100vw" }}>
      <Hero
        title={series?.title}
        description={series?.description}
        images={[
          series?.images.small,
          series?.images.mini,
          series?.images.medium,
          series?.images.large,
        ]}
        color={series?.color}
      />

      <VideoCollection videos={series?.videos} />
    </div>
  );
};
