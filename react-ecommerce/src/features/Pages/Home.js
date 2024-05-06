// import ProductList from "../features/product-list/ProductList";

import NavBar from "../Navbar/Navbar";
import ProductList from "../product-list/components/ProductList";

function Home() {
  return (
    <div>
      <NavBar>
        <ProductList></ProductList>
      </NavBar>
    </div>
  );
}

export default Home;
