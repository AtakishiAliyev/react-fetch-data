import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card-wrapper">
      <div className="image">
        <img src={product.image.url} alt={product.name} />
      </div>
      <h1 className="title">{product.name}</h1>
      <p className="price">{product.price.raw}</p>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    price: PropTypes.shape({
      raw: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductCard;
