import { Chevron } from "../icons/Chevron";

export function Item({ id, title, description, images, durationSeconds }) {
  return (
    <a className="item" href={`/?item_id=${id}`}>
      <div className="image-container">
        <img src={images?.small} alt={`${title} cover`} className="image" />
      </div>

      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </div>

      <div className="footer">
        <p className="label">
          {durationSeconds ? `${Math.round(durationSeconds / 60)} minutes` : ""}
        </p>

        <span className="action-container">
          <Chevron size={10} />
        </span>
      </div>
    </a>
  );
}
