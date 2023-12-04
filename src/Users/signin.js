import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();
    const signin = async () => {
        console.log("signing in...")
        await client.signin(credentials);
        navigate("/project/account");
        console.log("navigated to /project/account")
    };
    return (
        <div>
            <h1>Sign In</h1>
            <div className="row">
                <div className="col-2">
                    <input placeholder="Username" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
                </div>
            </div>
            <div className="row" style={{paddingTop: '10px', paddingBottom: '10px'}}>
                <div className="col-2">
                    <input placeholder="Password" type="password" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
                </div>
            </div>
            <button className="btn btn-primary" onClick={signin}> Sign In </button>
        </div>
    );
}
export default Signin;