import Head from '../../components/head';
import NavBar from "../../components/nav";
import Link from 'next/link'

const Products = ({ products, count }) => {
    return (
        <>
            <Head title="products" />
            <NavBar />
            <div className="container">
                <table>
                    <thead>
                        <tr></tr>
                        <tr></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="">
                                <Link href="/products/add">
                                    <a className="btn btn-primary btn-sm">+ product</a>
                                </Link>
                            </td>
                            <td className="col">
                                <h3 className="text-monospace badge badge-primary text-wrap">There are {count} products</h3>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                {products?.map(product => {
                                    return (
                                        <div className="card border border-warning" style={{ width: "18rem" }} key={product._id.toString()}>
                                            <img src={`http://127.0.0.1:4000/${product.productImage}`} className="card-img-top rounded" alt={product.name} />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    <Link as={`/products/${product._id}`} href="/products/[id]">
                                                        <a className="link">{product.name}</a>
                                                    </Link>
                                                </h5>
                                                <p className="card-text badge badge-pill badge-success">{product.price} $</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </td>
                        </tr>
                    </tbody>
                </table>
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