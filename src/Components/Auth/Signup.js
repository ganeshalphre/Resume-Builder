import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const [email, setEmail] = useState("");
    const [fisrtName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobile, setMobile] = useState("");
    const [dob, setDOB] = useState("");
    const [mailSent, setMailSent] = useState(false)

    const [otp, setOTP] = useState("")
    const [verified, setVerified] = useState(false)

    const navigate = useNavigate();

    const sendOTP = async(e) => {
        e.preventDefault();
        const d = {
            email,
        }
        if(email == "") {
            return;
        }
        try {
            const {data} = await axios.post(`${process.env.REACT_APP_API}/send-verification-mail`, d)
            if(data.success) {
              console.log("Mail Sent SuccessFully");
              setMailSent(true);
              toast.success(data.msg, {
                position: 'top-right',
                autoClose: 15000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
                progressStyle: { background: '#E8DFD0' },
                theme: 'colored',
                style: { background: 'grey', fontSize: "1.6rem" },
              });
            } else {
                setMailSent(false)
                toast.error(data.msg, {
                    position: 'top-right',
                    autoClose: 15000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 0,
                    progressStyle: { background: '#E8DFD0' },
                    theme: 'colored',
                    style: { background: 'grey', fontSize: "1.6rem" },
                  });
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const verifyOTP = async(e) => {
        e.preventDefault();
        const d = {
            verifyType: "register",
            otp
        }
        try {
            const {data} = await axios.post(`${process.env.REACT_APP_API}/verify-otp`, d)
            if(data.success) {
              console.log("verification SuccessFully");
              setVerified(true)
              toast.success(data.msg, {
                position: 'top-right',
                autoClose: 15000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
                progressStyle: { background: '#E8DFD0' },
                theme: 'colored',
                style: { background: 'grey', fontSize: "1.6rem" },
              });
            } else {
                setMailSent(false)
                toast.error(data.msg, {
                    position: 'top-right',
                    autoClose: 15000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 0,
                    progressStyle: { background: '#E8DFD0' },
                    theme: 'colored',
                    style: { background: 'grey', fontSize: "1.6rem" },
                  });
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const d = {
            fisrtName,
            lastName,
            email,
            mobile,
            dob,
        }
        try {
            const {data} = await axios.post(`${process.env.REACT_APP_API}/signup`, d);
            console.log(data);
            if(data.success) {
                localStorage.setItem("token", data.token);
                navigate('/dashboard');
                toast.success(data.msg, {
                    position: 'top-right',
                    autoClose: 15000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 0,
                    progressStyle: { background: '#E8DFD0' },
                    theme: 'colored',
                    style: { background: 'grey', fontSize: "1.6rem" },
                  });
                } else {
                    setMailSent(false)
                    toast.error(data.msg, {
                        position: 'top-right',
                        autoClose: 15000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: 0,
                        progressStyle: { background: '#E8DFD0' },
                        theme: 'colored',
                        style: { background: 'grey', fontSize: "1.6rem" },
                      });
                }
        } catch (error) {
            console.log(error);
        }
    }
    return ( 
        <div className="Signup">
            <div className="container"> 
            <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="row">
                        <div className="col-10">
                            <label for="fname">First Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10">
                            <label for="lname">Last Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                    </div>  
                    <div className="row">
                        <div className="col-10">
                            <label for="email">Email</label>
                        </div>
                        <div className="col-75">
                            <input type="email" id="email" name="email" placeholder="Your email.." onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        <div className="col-10">
                            <button onClick={e => sendOTP(e)} className="otp-button">Verify Email</button>
                        </div>
                        {mailSent && 
                            <>
                            <div className="col-10">
                                <input type="text" id="email" name="email" placeholder="Enter OTP" onChange={(e) => setOTP(e.target.value)}/>
                            </div>
                            <div className="col-10">
                                <button onClick={e => verifyOTP(e)} className="otp-button">{verified ? 'Submit' : 'Verified'}</button>
                            </div>  
                            </>
                        }
                    </div>
                    <div className="row">
                        <div className="col-10">
                            <label for="mobile">Mobile</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="mobile" name="mobile" placeholder="Your mobile.." onChange={(e) => setMobile(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10">
                            <label for="dob">DOB</label>
                        </div>
                        <div className="col-75">
                            <input type="date" id="dob" name="dob" placeholder="Your date of birth.." onChange={(e) => setDOB(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <button disabled={!verified}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
     )
}
 
export default Signup;

{/* <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet"> */}