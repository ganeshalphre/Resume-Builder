import About from '../Assets/footer-icons/info.png'
import Contact from '../Assets/footer-icons/telephone.png'
import PrivacyPolicy from '../Assets/footer-icons/insurance.png'
import TermsAndConditions from '../Assets/footer-icons/terms-and-conditions.png'

const SectionSix = () => {
    return ( 
        <div className="SectionSix">
            <div className="row-one">
                <div className="about">
                    <img src={About} />
                    <h3>About</h3>
                </div>
                <div className="about">
                    <img src={Contact} />
                    <h3>Contact</h3>
                </div>
            </div>
            <div className="row-two">
            <div className="about">
                    <img src={PrivacyPolicy} />
                <h3>Privacy Policy</h3>
            </div>
            <div className="about">
                <img src={TermsAndConditions} />
                <h3>Terms Of Use</h3>
            </div>
            </div>
        </div>
     );
}
 
export default SectionSix;