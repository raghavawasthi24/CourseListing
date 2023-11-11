import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const login = () => {
    axios.post(`${import.meta.env.VITE_APP_URL}/api/login`, {});
  };

  const loginDirectly = () => {
    axios
      .post(`${import.meta.env.VITE_APP_URL}/api/login`, {
        email: "raghavawasthi240@gmail.com",
        password: "string",
      })
      .then((res) => {
        localStorage.setItem("token", res.data.jwt_token);
        localStorage.setItem("id", res.data.id);
        navigate("/dashboard");
        toast.success("Logged in successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Invalid Credentials");
      });
  };
  return (
    <div className="text-center m-5-auto">
      <h2>Sign In</h2>
      <form action="/home">
        <p>
          <label>Username or email address</label>
          <br />
          <input
            type="text"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </p>
        <p>
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
        </p>
        <p>
          <button id="sub_btn" type="submit" onClick={login}>
            Login
          </button>
          <button
            id="sub_btn"
            type="button"
            className="mt-2"
            onClick={loginDirectly}
          >
            Continue As Guest
          </button>
        </p>
      </form>
      <footer>
        <p>
          First time? <Link to="/register">Create an account</Link>.
        </p>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
      <ToastContainer />
    </div>
  );
}
