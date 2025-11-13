import { useRef, useState } from "react";
import "./LoginForm.css";

function LoginForm({ onSubmit }) {
  // Refs
  const usernameRef = useRef();
  const passwordRef = useRef();

  // States
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  // Handlers
  const handleUsernameChange = (e) => {
    setUsernameValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    onSubmit(formData); // send data back to App.js
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>

      <label htmlFor="username">Username:</label>
      <input
        ref={usernameRef}
        id="username"
        type="text"
        value={usernameValue}
        onChange={handleUsernameChange}
        placeholder="Enter your username"
      />

      <label htmlFor="password-input">Password:</label>
      <input
        ref={passwordRef}
        id="password-input"
        type="password"
        value={passwordValue}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
      />

      <button id="login-button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default LoginForm;
