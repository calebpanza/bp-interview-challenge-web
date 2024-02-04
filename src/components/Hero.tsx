interface IHero {
  title: string;
  description?: string;
  images?: string[];
  color?: string;
}

export function Hero({ title, description, images, color }: IHero) {
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

      <div className="content">
        <h1 className="title">{title}</h1>
        <hr className="divider sm light" />
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

Hero.defaultProps = {
  title: "Video Series",
  description: "Check out this video series by clicking on a video below.",
  images: [],
};
