import { useState, useEffect } from "react";
import { ApplicationProvider } from "./context/AplicationContext";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";
import Header from "./components/Header/Header";
import ProductPage from './pages/ProductPage/ProductPage'

function App() {
  const [productsList, setProductsList] = useState([]);
  const [activeProduct, setActiveProduct] = useState({});
  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    var requestOptions = {
      mode: "no-cors",
      method: "GET",
      redirect: "follow",
    };

    fetch("https://30hills.com/api/products.json", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        let products = result.products.data.items;
        setProductsList(products);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const addToCart = () => {
    
  };

  return (
    <ApplicationProvider
      value={{
        productsList,
        cartList,
        activeProduct,
        setActiveProduct,
        setCartList,
      }}
    >
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/product/:productURL" element={<ProductPage />} />
        </Routes>
        <footer>
          <p>Ovo je footer</p>
        </footer>
      </div>
    </ApplicationProvider>
  );
}

export default App;
