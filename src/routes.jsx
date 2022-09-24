import Menu from "./components/Menu";

import Home from "./pages/Home";
import Series from "./pages/Series";
import Favoritos from "./pages/Favoritos";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function RoutesApp() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/serie" element={<Series />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/movie/:id" element={<Info />} />
        <Route path="/tv/:id" element={<Info />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default RoutesApp;
