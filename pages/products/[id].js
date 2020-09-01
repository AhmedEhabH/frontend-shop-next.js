import Head from '../../components/head';
import NavBar from "../../components/nav";

const Product = ({product})=>{
    return (
        <>
        <Head title={product?.name}/>
        <NavBar />
        <div>
            <h1>{product?.name}</h1>
            <h3>{product?.price}</h3>
            <img src={`http://127.0.0.1:4000/${product?.productImage}`}/>
        </div>
        </>
    )
}

Product.getInitialProps = async ({query}) => {
    const response = await fetch(`http://127.0.0.1:4000/products/${query.id}`);
    const res = await response.json();
    return {product:res.product}
}

export default Product;