import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard  from "./pages/Dashboard"
import Login from "./pages/Login";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;