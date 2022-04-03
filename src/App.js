import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Error from "./components/Products";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/productos" element={<Products />} />
          <Route path="*" element={<p>Pagina no Existe</p>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
