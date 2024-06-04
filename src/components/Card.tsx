type CardProps = {
  title: string;
  image: string;
  link: string;
  description: string;
  backgroundColor?: string;
};

const Card = ({
  title,
  image,
  link,
  description,
  backgroundColor,
}: CardProps) => {
  return (
    <div className="card" style={{ backgroundColor }}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}>Learn more</a>
    </div>
  );
};
export default Card;
