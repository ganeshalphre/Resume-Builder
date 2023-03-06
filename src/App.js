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
import WebResume from './Components/Dashboard/WebResume';
import SmartCard from './Components/Dashboard/SmartCard/Card';
import Dashboard from './Components/Dashboard';
import SmartCardCreate from './Components/Dashboard/SmartCard/SmartCardCreate';
import SmartCardEdit from './Components/Dashboard/SmartCard/SmartCardEdit';
import SmartCardHome from './Components/Dashboard/SmartCard';
import Files from './Components/Dashboard/Files';
import Payment from './Components/payment';

function App() {
  const token = localStorage.getItem("token");
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        {/* <Route exact path="/forget-password" element={<ForgetPassword />} />
        <Route exact path="/reset-password/:id" element={<ResetPassword />} /> */}

        {/* Dashboard */}
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/dashboard/create-resume" element={<ResumeCreate />} />
        <Route exact path="/dashboard/resume-pdf/:id" element={<ResumePDF />} />
        <Route exact path="/dashboard/edit-resume/:id" element={<ResumeEdit />} />

        {/* Web Resume */}
        <Route exact path='/dashboard/web-resume/:id' element={<WebResume />} />

        {/* Smart Card */}
        <Route exact path='/dashboard/create-smart-card' element={<SmartCardCreate />} />
        <Route exact path='/dashboard/smart-card-home/:id' element={<SmartCardHome />} />
        <Route exact path='/dashboard/edit-smart-card/:id' element={<SmartCardEdit />} />
        <Route exact path='/dashboard/smart-card/:id' element={<SmartCard />} />

        {/* Files */}
        <Route exact path="/dashboard/files" element={<Files />} />

        <Route exact path="/payment" element={<Payment />} />
      </Routes>                                                                                           
    </div>
  );
}

export default App;
