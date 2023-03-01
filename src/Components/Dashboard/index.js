import { Link } from "react-router-dom";
import '../StyleSheets/dashboard.css'
const Dashboard = () => {
    return ( 
        <div className="Dashboard">
            <Link to="/dashboard/create-resume">Resume</Link>
            <Link to="/dashboard/web-resume">Web Resume</Link>
            <Link to="/dashboard/smart-card">Smart Card</Link>
            <Link to="/dashboard/account">Account</Link>
            <Link to="/dashboard/files">Files</Link>
            <Link to="/dashboard/logout">Logout</Link>
        </div>
     );
}
 
export default Dashboard;