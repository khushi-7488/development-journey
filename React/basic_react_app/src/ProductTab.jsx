import Product from "./Product.jsx";

function ProductTab(){
    let styles = {
        display: "flex",
        flexWrap:"wrap",
        justifyContent: "center",
        alignItems: "center",
    }
    return (
    <div style={styles}>
        <Product title="Logitec" idx={0}/>
        <Product title="Apple pencil" idx={1}/>
        <Product title="zebronics" idx={2}/>
        <Product title="Petronics" idx={3}/>

    </div>
    )
}

export default ProductTab;