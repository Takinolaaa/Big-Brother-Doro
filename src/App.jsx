import { Routes, Route } from "react-router-dom";

import Inspo from "./pages/Inspiration.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Inspiration" element={<Inspo />} />
      </Routes>
    </>
  );
}

export default App;
