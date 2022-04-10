import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Ram</Link>
        </li>
        <li>
          <Link to="/products/p2">A Goat</Link>
        </li>
        <li>
          <Link to="/products/p3">A Pig</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
