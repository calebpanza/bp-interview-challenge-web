import { useActiveVideo } from "../providers/active-video.provider";

import { YouTubeEmbed } from "./YouTubeEmbed";

import { Close } from "../icons/Close";

interface IHero {
  title: string;
  description?: string;
  images?: string[];
  color?: string;
}

export function Hero({ title, description, images, color }: IHero) {
  const { activeVideo, setActiveVideo } = useActiveVideo();

  return (
    <div className="hero" style={{ color, borderColor: color }}>
      <div className="image-container">
        {images?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} cover`}
            className="image"
          />
        ))}
      </div>

      <h3 className="wordmark">BibleProject</h3>

      <div className="content">
        <h1 className="title">{title}</h1>
        <hr className="divider sm light" />
        <p className="description">{description}</p>
      </div>

      <div className={`video-container ${activeVideo ? "enter" : "exit"}`}>
        <button className="close-button" onClick={() => setActiveVideo(null)}>
          <Close size={16} />
        </button>
        <YouTubeEmbed id={activeVideo} />
      </div>
    </div>
  );
}

Hero.defaultProps = {
  title: "Video Series",
  description: "Check out this video series by clicking on a video below.",
  images: [],
};
