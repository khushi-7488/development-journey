import "./Product.css";
import Price from "./Price";

function Product({title, idx}){
    let oldPrices = ["53456", "34533","74567","23456"];
    let newPrices = ["63456", "34600","94567","34567"];
    let description = ["8k DPI", "intutive surface", "design for iPad Pro","wireless"]
    return(
    <div className="Product" >
        <h4>{title}</h4>
        <p>{description[idx]}</p>
        <Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]}/>
    </div>
    )
}

export default Product;