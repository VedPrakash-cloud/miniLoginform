import { useState } from "react";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (userName === "user" && password === "Password") {
      setIsLoggedIn(true);
    } else {
      setError("Invalid username or passowrd");
    }
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      {isLoggedIn ? (
        <div>
          <p>Welcome, user!</p>
        </div>
      ) : (
        <div>
          <form onSubmit={handleClick}>
            <p>{error}</p>
            <label htmlFor="UserName">Username:</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <br />
            <label htmlFor="Password">Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
