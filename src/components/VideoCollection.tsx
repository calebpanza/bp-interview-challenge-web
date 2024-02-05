import { Item } from "./Item";

export function VideoCollection({ videos }) {
  return (
    <div className="video-collection">
      <div className="grid">
        {videos.map((video, index) => (
          <Item key={index} {...video} />
        ))}
      </div>
    </div>
  );
}

VideoCollection.defaultProps = {
  videos: [],
};
