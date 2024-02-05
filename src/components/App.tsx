import { useSeries } from "../hooks/useSeries.query";

import { Hero } from "./Hero";
import { Item } from "./Item";

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

      <div style={{ width: 300 }}>
        {series?.videos.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
