import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
