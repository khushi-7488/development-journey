import "./App.css";
import ProductTab from "./ProductTab.jsx";
import Button from "./Button.jsx";
import Form from "./Form.jsx";
import Counter from "./Counter.jsx";
import LikeButton from "./LikeButton.jsx";

function App() {
  return (
    <div>
      <h2>Blockbuster deal</h2>
      <ProductTab />
      <Button/>
      <Form/>
      <Counter/>
      <LikeButton/>
    </div>
  );
}

export default App;
