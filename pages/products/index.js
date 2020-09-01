import Head from '../../components/head';
import NavBar from "../../components/nav";

import CarouselItems from "../../components/carousel";

import Link from 'next/link'

const Products = ({ products, count }) => {
    return (
        <>
            <Head title="products" />
            <NavBar />
            <CarouselItems items={products} />
            <hr />
            <hr />
            <div className="row">
                {
                    products?.map((product, index) => {
                        return (
                            <div className="col-xs-4 col-md-4" key={product._id}>
                                <div className="card">
                                    <img
                                        src={`http://127.0.0.1:4000/${product.productImage}`}
                                        alt={`${product.name}`}
                                        className="card-img-top"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">Price: {product.price} $</p>
                                        <div className="justify-content">
                                            <Link as={`/products/${product._id}`} href="/products/[id]">
                                                <a className="btn btn-primary">Show details</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

        </>
    )
}

Products.getInitialProps = async () => {
    const response = await fetch(`http://127.0.0.1:4000/products/`);
    const res = await response.json()
    return {
        products: res.products,
        count: res.count
    }
}


export default Products;