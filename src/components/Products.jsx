import ProductCard from "./ProductCard";

const Products = ({ isLoading, data }) => {
  if (isLoading) {
    return <h3>Loading....</h3>;
  }

  return (
    <div className="products-wrapper">
      {data?.data?.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Products;
