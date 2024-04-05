import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListingPage from "./components/productListingPage/ProductListingPage";
import ProductDetailsPage from "./components/productDetailsPage/ProductDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProductListingPage />} />
        <Route
          exact
          path="/products/:productId"
          element={<ProductDetailsPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
