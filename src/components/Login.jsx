import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus, response] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;

    try {
      const response = await axios.post(
        "http://localhost:2000/login",
        {
          email: email.value,
          password: password.value,
        },
      );
      setLoginStatus("Success");
    } catch (error) {
      setLoginStatus("Error");
    }
  };

return (
  <div>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input type="email" name="email" placeholder="Email" />
      </label>
      <label>
        Password
        <input type="password" name="password" placeholder="Password" />
      </label>
      <button type="submit">Submit</button>
      {loginStatus === "Success" && navigate("/books")}
      {loginStatus === "Error" && <div>Invalid credentials</div>}
    </form>
</div>
);
}

export default Login;
