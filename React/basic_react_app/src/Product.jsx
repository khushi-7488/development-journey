import "./Product.css";

function Product({title, price, feature}){
    // const list = feature.map((feature)=> <li>{feature}</li>)
    let isDiscount = price > 30000;
    let styles = {backgroundColor : isDiscount ? "yellow" : ""};
    return(
    <div className="Product" style={styles}>
    <h3>{title}</h3>
    <h5>{price}</h5>
    {isDiscount && <p>Discount of 5%</p>}
    </div>
    )
}

export default Product;