import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/Kanbas/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
      <h3>Signup</h3>
      {error && <div>{error}</div>}
      <input
        className="form-control mt-3"
        placeholder="Username.."
        value={credentials.username}
        onChange={(e) =>
          setCredentials({
            ...credentials,
            username: e.target.value,
          })
        }
      />
      <input
        className="form-control"
        placeholder="Password..."
        value={credentials.password}
        onChange={(e) =>
          setCredentials({
            ...credentials,
            password: e.target.value,
          })
        }
      />
      <button className="btn btn-primary mt-2" onClick={signup}>
        Signup
      </button>
    </div>
  );
}
export default Signup;