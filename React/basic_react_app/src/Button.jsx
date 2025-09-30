function printHello(event){
    console.log("Hello")
    console.log(event)
}
export default function Button(){
    return(
        <div>
        <button onClick={printHello}>Click me!</button>
        </div>
    )
}