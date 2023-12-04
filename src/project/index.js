import Signin from "../Users/signin";
import UserTable from "../Users/table";
import { Routes, Route, Navigate } from "react-router-dom";
import ProjectNav from "../ProjectNav";
import Account from "../Users/account";
import Signup from "../Users/signup";
function Project() {
    return (
        <>
            <div className="row">
                <div className="col-sm">
                    <ProjectNav />
                </div>
            </div>
            <div className="row">
                <div className="col-md">
                    <Routes>
                        <Route path="/admin/users" element={<UserTable />} />
                        <Route path="/" element={<Navigate to="/project/home" />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/account/:id" element={<Account />} />
                    </Routes>
                </div>
            </div>
        </>

);
}
export default Project;