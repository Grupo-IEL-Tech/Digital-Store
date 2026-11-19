import { BrowserRouter, Routes, Route, Link } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductViewPage from "./pages/ProductViewPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/produtos" element={<ProductsPage />} />
          <Route path="/produto/:id" element={<ProductViewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
