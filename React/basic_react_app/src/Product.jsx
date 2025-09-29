import "./Product.css";

function Product({title, price, feature}){
    // const list = feature.map((feature)=> <li>{feature}</li>)
    let styles = {backgroundColor : price>40000? "yellow" : ""};
    return(
    <div className="Product" style={styles}>
    <h3>{title}</h3>
    <h5>{price}</h5>
    {price>30000 && <p>Discount of 5%</p>}
    </div>
    )
}

export default Product;