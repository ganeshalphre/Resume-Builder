import axios from "axios";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useParams } from "react-router-dom";
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

import '../../StyleSheets/smartcard.css';

const SmartCard = () => {

    const {id} = useParams();
    const smartCardId = id;

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [headline, setHeadline] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        getsmartCard();
    }, [])

    const getsmartCard = async() => {
        try {
           const {data} = await axios.get(`${process.env.REACT_APP_API}get-unique-smartcard/${smartCardId}`)
           console.log({data});
           if(data.success) {
               console.log({smartCard: data.smartCard})
               let contact = data.smartCard.contact;
               setHeadline(data.smartCard.headline);
               setFirstName(contact.firstName);
               setLastName(contact.lastName);
               setMobile(contact.phone);
               setEmail(contact.email);
           }
       } catch (error) {
           console.log(error)
       }
   }

//    const handleCaptureClick = async (e) => {
//     e.preventDefault();
//     console.log("working");
//     const card =
//       document.querySelector('.card');
//     if (!card) return;

//     const canvas = await html2canvas(card);
//     const dataURL = canvas.toDataURL('image/png');
//     downloadjs(dataURL, 'card.png', 'image/png');
//   };
   const handleCaptureClick = () => {
    var node = document.getElementById('node');

    htmlToImage.toPng(node)
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
   }
    return ( 
        <div className="SmartCard">
            <div id="node" className="card">
                <div>
                    <div className="card-name">{firstName}{" "} {lastName}</div>
                    <div className="card-headline">{headline}</div>
                    <div className="card-mobile-email"><span><i class="fa fa-phone" aria-hidden="true"></i>{" "}{mobile}</span><span><i class="fa fa-envelope" aria-hidden="true"></i>{" "}{email}</span></div>
                </div>
                <div className="web-resume-qr-code">
                    <QRCode value={`http://localhost:3000/dashboard/web-resume/${smartCardId}`} fgColor="#fff" bgColor="#000" size="400" />
                </div>
            </div>
            <button className="card-download" onClick={(e) => handleCaptureClick(e)}>Download</button>
        </div>
     );
}
 
export default SmartCard;