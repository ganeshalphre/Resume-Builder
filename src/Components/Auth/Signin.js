import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {

    const [email, setEmail] = useState("");
    const [mailSent, setMailSent] = useState(false)
    const [otp, setOTP] = useState("")
    const [verified, setVerified] = useState(true)

    const navigate = useNavigate();

    const sendOTP = async(e) => {
        e.preventDefault();
        const d = {
            email,
            type: 'signin'
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
            email,
            otp,
            verifyType: "login"
        }
        try {
            const {data} = await axios.post(`${process.env.REACT_APP_API}verify-otp`, d)
            if(data.success) {
              console.log("verification SuccessFully");
              setVerified(false);
              localStorage.setItem("token", data.token);
              navigate('/dashboard');
            } else {
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

    // const handleSubmit = async(e) => {
    //     e.preventDefault();
    //     const d = {
    //         email,
    //     }
    //     try {
    //         const {data} = await axios.post(`${process.env.REACT_APP_API}/signin`, d);
    //         console.log(data);
    //         if(data.success) {
    //             localStorage.setItem("token", data.token);
    //             navigate('/dashboard/resume');
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    return ( 
        <div className="Signup">
            <ToastContainer />
            <div className="container"> 
                <form>
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
                </form>
            </div>
        </div>
     )
}
 
export default Signin;