function handleSubmit(){
    event.preventDefault();
    console.log("form was submit")
}

export default function Form(){
    return ( <form action="">
        <input type="text" placeholder="write something"/>
        <button onClick={handleSubmit}>Submit</button>
    </form>

    )
}