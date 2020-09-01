import Head from '../../components/head';
import NavBar from "../../components/nav";

const Product = ({ product }) => {
    return (
        <>
            <Head title={product?.name} />
            <NavBar />
            <div className="container">
                <div className="card" style={{ height: "100%" }}>
                    <img
                        src={`http://127.0.0.1:4000/${product.productImage}`}
                        alt={`${product.name}`}
                        className="card-img-top"
                        style={{
                            height:"100%"
                        }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">Price: {product.price} $</p>
                    </div>
                </div>
            </div>
        </>
    )
}

Product.getInitialProps = async ({ query }) => {
    const response = await fetch(`http://127.0.0.1:4000/products/${query.id}`);
    const res = await response.json();
    return { product: res.product }
}

export default Product;