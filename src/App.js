import logo from './logo.svg';
import "./Components/StyleSheets/typography.css"
import "./Components/StyleSheets/form.css"
import './App.css';
import Home from './Components/Home';
import Signin from './Components/Auth/Signin';
import Signup from './Components/Auth/Signup';
import ForgetPassword from './Components/Auth/ForgetPassword';
import ResetPassword from './Components/Auth/ResetPassword';
import { Route, Routes } from 'react-router-dom';
import Resume from './Components/Dashboard/Resume';

function App() {
  const token = localStorage.getItem("token");
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/forget-password" element={<ForgetPassword />} />
        <Route exact path="/reset-password/:id" element={<ResetPassword />} />

        {/* Dashboard */}
        <Route exact path="/dashboard/resume" element={<Resume />} />
      </Routes>                                                                                           
    </div>
  );
}

export default App;
