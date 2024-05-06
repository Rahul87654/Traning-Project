// import NavBar from "../features/navbar/Navbar";
import NavBar from "../Navbar/Navbar";
import ProductDetail from "../product-list/components/ProductDetail";

function ProductDetailPage() {
    return ( 
        <div>
            <NavBar>
                <ProductDetail/>
            </NavBar>
        </div>
     );
}

export default ProductDetailPage;