import axios from "axios";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useParams } from "react-router-dom";
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';

import '../../StyleSheets/smartcard.css';

const SmartCard = () => {

    const {id} = useParams();
    const resumeId = id;

    const headline = "MERN Stack Developer"
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        getResume();
    }, [])

    const getResume = async() => {
        try {
           const {data} = await axios.get(`${process.env.REACT_APP_API}get-unique-resume/${resumeId}`)
           console.log({data});
           if(data.success) {
               console.log({resume: data.resume})
               let contact = data.resume.contact;
               setFirstName(contact.firstName);
               setLastName(contact.lastName);
               setMobile(contact.phone);
               setEmail(contact.email);
           }
       } catch (error) {
           console.log(error)
       }
   }

   const handleCaptureClick = async (e) => {
    e.preventDefault();
    console.log("working");
    const pricingTableElmt =
      document.querySelector('.card');
    if (!pricingTableElmt) return;

    const canvas = await html2canvas(pricingTableElmt);
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'download.png', 'image/png');
  };
   
    return ( 
        <div className="SmartCard">
            <div className="card">
                <div>
                    <div className="card-name">{firstName}{" "} {lastName}</div>
                    <div className="card-headline">{headline}</div>
                    <div className="card-mobile-email"><span><i class="fa fa-phone" aria-hidden="true"></i>{mobile}</span><span><i class="fa fa-envelope" aria-hidden="true"></i>{email}</span></div>
                </div>
                <div className="web-resume-qr-code">
                    <QRCode value={`http://localhost:3000/dashboard/web-resume/${resumeId}`} fgColor="#fff" bgColor="#000" size="400" />
                </div>
            </div>
            <button className="card-download" onClick={e => handleCaptureClick(e)}>Download</button>
        </div>
     );
}
 
export default SmartCard;