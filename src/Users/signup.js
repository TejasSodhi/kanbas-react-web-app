import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";

function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/project/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
      <h1>Sign Up</h1>
      {error && <div>{error}</div>}
      <div className="row">
            <div className="col-2">
                <input
                    placeholder="Username"
                    value={credentials.username}
                    onChange={(e) => setCredentials({
                    ...credentials,
                    username: e.target.value })}
                />
            </div>
      </div>
      <div className="row" style={{paddingTop: '10px', paddingBottom: '10px'}}>
                <div className="col-2">
                    <input
                        type="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={(e) => setCredentials({
                        ...credentials,
                        password: e.target.value })} 
                    />
                </div>
            </div>
      <button className="btn btn-primary" onClick={signup}>
        Sign Up
      </button>
    </div>
  );
}
export default Signup;