import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:login" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
