import { IYouTubeEmbed } from "../types";

export function YouTubeEmbed({ id }: IYouTubeEmbed) {
  return (
    <iframe
      width="100%"
      src={`https://www.youtube.com/embed/${id}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen={false}
    ></iframe>
  );
}
