import { useState, useEffect } from "react";
import { ApplicationProvider } from "./context/AplicationContext";
import { Routes, Route } from "react-router-dom";
import jsonData from "./products.json";
import HomePage from "./pages/HomePage/HomePage";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductPage from "./pages/ProductPage/ProductPage";
import "../src/app.css";

function App() {
  const [productsListAll, setProductsListAll] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [activeProduct, setActiveProduct] = useState({});
  const [cartList, setCartList] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    var requestOptions = {
      mode: "no-cors",
      method: "GET",
      redirect: "follow",
    };

    fetch("https://30hills.com/api/products.json", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const products = result.products.data.items;
        setProductsListAll(products);
        setProductsList(products);
        console.log("Products data fetched from backend");
      })
      .catch((error) => {
        console.log("Products data fetch error:", error);
        const loadData = JSON.parse(JSON.stringify(jsonData));
        const products = loadData.products.data.items;
        categoryList &&
          products.map((el) => {
            !categoryList.includes(el.category) &&
              categoryList.push(el.category);
            setCategoryList(categoryList);
          });

        console.log(
          "Products data fetched from local file. Please run app in CORS disabled browser!"
        );
        setProductsListAll(products);
        setProductsList(products);
      });
  }, []);

  const addToCart = (newCartItem) => {
    setCartList([...cartList, newCartItem]);
  };
  const removeFromCart = (item) => {
    setCartList(cartList.filter((e) => e.id !== item.id));
  };
  const isInCart = (item) => {
    return cartList.includes(item);
  };
  const handleSort = (e) => {
    setSelectedSort(e.target.value);
    if (selectedSort == "ascending") {
      productsList.sort((a, b) => b.price - a.price);
    } else {
      productsList.sort((a, b) => a.price - b.price);
    }
    setProductsList(productsList);
  };
  const handleFilter = (e) => {
    let filteredList = productsListAll.filter(
      (el) => el.category == e.target.value
    );
    setProductsList(filteredList);
  };
  const handleSearch = (e) => {
    let searchInput = e.target.value;
    let searchResult = productsListAll.filter(
      (el) =>
        el.name.toLowerCase().includes(searchInput) || el.description.toLowerCase().includes(searchInput)
    );
    setProductsList(searchResult);
  };

  return (
    <ApplicationProvider
      value={{
        productsList,
        cartList,
        activeProduct,
        setActiveProduct,
        setCartList,
        addToCart,
        removeFromCart,
        isInCart,
        handleSort,
        selectedSort,
        setSelectedSort,
        handleFilter,
        categoryList,
        handleSearch,
      }}
    >
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/product/:productURL" element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </ApplicationProvider>
  );
}

export default App;
