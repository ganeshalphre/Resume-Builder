import '../StyleSheets/home.css'
import SectionFive from "./SectionFive";
import SectionFour from "./SectionFour";
import SectionOne from "./SectionOne";
import SectionSeven from './SectionSeven';
import SectionSix from "./SectionSix";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

const Home = () => {
    return ( 
        <div className="Home">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
        </div>
     );
}
 
export default Home;