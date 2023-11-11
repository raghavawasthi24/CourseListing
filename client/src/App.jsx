import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard  from "./pages/Dashboard"
import EnrolledCourses from "./pages/EnrolledCourses";
import Header from "./components/Header";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/dashboard" element={<EnrolledCourses/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;