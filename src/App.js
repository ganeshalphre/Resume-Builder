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
import ResumePDF from './Components/Dashboard/Resume/ResumePDF';
import ResumeCreate from './Components/Dashboard/Resume/ResumeCreate';
import ResumeEdit from './Components/Dashboard/Resume/ResumeEdit';

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
        <Route exact path="/dashboard/create-resume" element={<ResumeCreate />} />
        <Route exact path="/dashboard/resume-pdf/:id" element={<ResumePDF />} />
        <Route exact path="/dashboard/edit-resume/:id" element={<ResumeEdit />} />
      </Routes>                                                                                           
    </div>
  );
}

export default App;
