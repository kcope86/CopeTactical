type FeaturedCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  isActive?: boolean;
  onClick?: () => void;
};

export default function FeaturedCard({
  imageSrc,
  imageAlt,
  title,
  isActive = false,
  onClick,
}: FeaturedCardProps) {
  return (
    <article
      className={`featured-card${isActive ? " active" : ""}`}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <img src={imageSrc} alt={imageAlt} />
      <h3>{title}</h3>
    </article>
  );
}