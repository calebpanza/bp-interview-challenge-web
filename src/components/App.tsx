import { ActiveVideoProvider } from "../providers/active-video.provider";
import { useSeries } from "../hooks/useSeries.query";

import { Hero } from "./Hero";
import { Loader } from "./Loader";
import { VideoCollection } from "./VideoCollection";

export const App = () => {
  const { series } = useSeries();

  return (
    <ActiveVideoProvider>
      <div style={{ width: "100vw" }}>
        <Hero
          title={series?.title}
          description={series?.description}
          images={series?.images}
          color={series?.color}
        />

        <VideoCollection videos={series?.videos} />
      </div>

      <Loader ready={Boolean(series)} />
    </ActiveVideoProvider>
  );
};
