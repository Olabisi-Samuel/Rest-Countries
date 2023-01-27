import Home from "./pages/Home";
import Details from "./components/Details";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:common" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
