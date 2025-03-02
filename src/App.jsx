import "./App.css";
import CarouselEffect from "./Components/Carousel/CarouselEffect";
import Catagory from "./Components/Category/Catetgory";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";

function App() {
  return (
    <div>
      <Header />
      <CarouselEffect />
      <Catagory />
      <Product />
    </div>
  );
}

export default App;