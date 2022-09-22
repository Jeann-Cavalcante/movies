// import Menu from "./components/Menu";

import Home from "./pages/Home";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Info />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default RoutesApp;
