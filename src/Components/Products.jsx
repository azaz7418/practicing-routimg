import react from "react";
import { useLoaderData, Link } from "react-router-dom";

const Products = () => {
  const productsData = useLoaderData();
  const products = productsData.data;
  return (
    <div className="products">
      <h2>Choose Your Product</h2>
      <div className="sp">
        {products.map((product) => (
            <div className="singleProduct">
          <Link to={`/sproduct/${product.slug}`}>
              <img src={product.image} />
              <h4> {product.phone_name} </h4>
          </Link>
              <p>{product.brand}</p>
            </div>
        ))}
      </div>
      <h1>This is Products page</h1>
      <h1>Azaz Ahamed</h1>
    </div>
  );
};

export default Products;
