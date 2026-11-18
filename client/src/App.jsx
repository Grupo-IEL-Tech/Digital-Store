import { BrowserRouter, Routes, Route, Link } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/produtos" element={<h1> Produtos </h1>} />
          <Route path="/categorias" element={<h1> Produtos </h1>} />
          <Route path="/pedidos" element={<h1> Produtos </h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
