type FeaturedCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  isActive?: boolean;
  isEdgeLeft?: boolean;
  isEdgeRight?: boolean;
  onClick?: () => void;
};

export default function FeaturedCard({
  imageSrc,
  imageAlt,
  title,
  isActive = false,
  isEdgeLeft = false,
  isEdgeRight = false,
  onClick,
}: FeaturedCardProps) {
  return (
    <article
      className={[
        "featured-card",
        isActive ? "active" : "",
        !isActive && isEdgeLeft ? "edge-left" : "",
        !isActive && isEdgeRight ? "edge-right" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <div className="featured-card-image-wrap">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <h3>{title}</h3>
    </article>
  );
}