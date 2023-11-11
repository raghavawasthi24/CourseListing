import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard  from "./pages/Dashboard"
import EnrolledCourses from "./pages/EnrolledCourses";
import Login from "./pages/Login";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Dashboard/>} />
          <Route path="/dashboard" element={<EnrolledCourses/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;