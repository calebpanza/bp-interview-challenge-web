import { useActiveVideo } from "../providers/active-video.provider";

import { Item } from "./Item";

export function VideoCollection({ videos }) {
  const { activeVideo, setActiveVideo } = useActiveVideo();

  return (
    <div className="video-collection">
      <div className="grid">
        {videos.map((video, index) => (
          <Item
            key={index}
            {...video}
            onClick={(e) => {
              // in a production app, I would update the URL here and pre-fetch any video content when the user navigates to the page with a video referenced in the URL
              e.preventDefault();

              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveVideo(video.youtubeId);
            }}
          />
        ))}
      </div>
    </div>
  );
}

VideoCollection.defaultProps = {
  videos: [],
};
