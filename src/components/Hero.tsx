import { useActiveVideo } from "../providers/active-video.provider";

import { useFailure } from "../hooks/useFailure";

import { YouTubeEmbed } from "./YouTubeEmbed";

import { Close } from "../icons/Close";

interface IHero {
  title: string;
  description?: string;
  images?: string[];
  color?: string;
}

function ErrorCard() {
  return (
    <div className="error-card">
      <h3 className="title">Oops!</h3>
      <h5 className="subtitle">There was an error loading the video.</h5>
      <p className="description">
        Try reloading the page and if the problem continues,{" "}
        <a href="#">contact us</a> and we'll do our best to help you in a timely
        manner.
      </p>
    </div>
  );
}

export function Hero({ title, description, images, color }: IHero) {
  const { activeVideo, setActiveVideo } = useActiveVideo();
  const error = useFailure();

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
        {error ? <ErrorCard /> : <YouTubeEmbed id={activeVideo} />}
      </div>
    </div>
  );
}

Hero.defaultProps = {
  title: "Video Series",
  description: "Check out this video series by clicking on a video below.",
  images: [],
};
