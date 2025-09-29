import Product from "./Product.jsx";

function ProductTab(){
    // let features = ["hi-tech", "durable", "fast"];
    return (
    <>
        <Product title="phone" price={10000} />
        <Product title="laptop" price={100000} />
        <Product title="pen" price={10} />

    </>
    )
}

export default ProductTab;