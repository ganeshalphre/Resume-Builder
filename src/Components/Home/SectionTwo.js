// import "~@flaticon/flaticon-uicons/css/all/all";

import { useNavigate } from "react-router-dom";
import CV from '../Assets/tool-icons/cv.png'
import Email from '../Assets/tool-icons/email.png';
import End from '../Assets/tool-icons/end.png';
import IdCard from '../Assets/tool-icons/id-card.png';
import Letter from '../Assets/tool-icons/letter.png';
import OnlineProfile from '../Assets/tool-icons/online-profile.png';
import Rating from '../Assets/tool-icons/rating.png';

const SectionTwo = () => {
    const navigate = useNavigate();
    const navigateToSignup = (e) => {
        e.preventDefault()
        navigate('/signup')
    }
    return ( 
        <div className="SectionTwo">
            <div className="subcription">
                <div className="subcription-heading">
                    <h3>Subscription</h3>
                </div>
                <div className="subcription-cost">
                    <h3>Cost</h3>
                    <h4>20rs</h4>
                    <h6>Validity: 30days</h6>
                    <button className="pay-button" onClick={(e) => navigateToSignup(e)}>Buy</button>
                </div>
            </div>
            <div className="tools">
                <h3>Tools</h3>
                <div className="tool">
                    <img src={CV} />
                    <h4>Resume</h4>                                                                                                                                                                                                                                                                                     
                </div>
                <div className="tool">
                    <img src={Letter} />
                    <h4>Cover Letter</h4>                                                                                                                                                                                                                                                                                     
                </div>
                <div className="tool">
                    <img src={OnlineProfile} />
                    <h4>Web Resume</h4>                                                                                                                                                                                                                                                                                     
                </div>
                <div className="tool">
                    <img src={Email} />
                    <h4>Employment LOR</h4>                                                                                                                                                                                                                                                                                  
                </div>
                <div className="tool">
                    <img src={Rating} />
                    <h4>Job Application Mail</h4>                                                                                                                                                                                                                                                                                     
                </div>
                <div className="tool">
                    <img src={End} />
                    <h4>Video Resume Mail</h4>                                                                                                                                                                                                                                                                                     
                </div>
                <div className="tool">
                    <img src={IdCard} />
                    <h4>Resume Card</h4>                                                                                                                                                                                                                                                                                     
                </div>
            </div>
        </div>
     );
}
 
export default SectionTwo;