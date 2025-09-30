export default function Price({oldPrices, newPrices}){
    let oldStyles = {
        textDecorationLine: "line-through",
    }
    let styles = {
        backgroundColor: "#e0c367",
        height: "30px",
    }
    return(
        <div style={styles}>
            <span style = {oldStyles}>{oldPrices}</span>
            &nbsp; &nbsp; &nbsp;
            <span><b>{newPrices}</b></span>
        </div>
    )
}