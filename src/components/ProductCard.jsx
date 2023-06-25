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

export default ProductCard;
