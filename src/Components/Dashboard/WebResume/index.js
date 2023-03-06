import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Badge from '../../Assets/badge.png'

import  Profile from '../../Assets/profile.jpg';
import '../../StyleSheets/webresume.css';
import Carousel from '../../Layouts/carousel';
const WebResume = () => {

    const {id} = useParams();
    const token = localStorage.getItem("token");
    const smartCardId = id;

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                       ]

    const [contact, setContact] = useState({});
    const [headline, setHeadline] = useState("");
    const [summary, setSummary] = useState('');
    const [skills, setSkills] = useState([]);
    const [techSkills, setTechSkills] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [volunteerExperiences, setVolunteerExperiences] = useState([]);
    const [workshops, setWorkshops] = useState([]);
    const [internships, setInternships] = useState([]);
    const [honorsAndAwards, setHonorsAndAwards] = useState([]);
    const [projects, setProjects] = useState([]);
    const [publications, setPublications] = useState([]);
    const [patents, setPatents] = useState([]);
    const [trainings, setTrainings] = useState([]);
    const [courses, setCourses] = useState([]);
    const [certifications, setCertifications] = useState([]);
    const [educations, setEducations] = useState([]);
    const [license, setLicense] = useState({});
    const [references, setReferences] = useState([]);
    const [personnalDetails, setPersonnalDetails] = useState({});
    const [interest, setInterest] = useState([]);

    useEffect(() => {
        getSmartCard();
    }, [])

    const getSmartCard = async() => {
        const headers  = {
            authorization: `Bearer ${token}`
        }
        try {
           const {data} = await axios.get(`${process.env.REACT_APP_API}get-unique-smartcard/${smartCardId}`, {headers})
           console.log({data});
           if(data.success) {
               console.log({smartCard: data.smartCard})
               // Contact
               setContact(data.smartCard.contact);
               // Headline
               setHeadline(data.smartCard.headline)
               // Summary
               setSummary(data.smartCard.summary)
               // Skills
               setSkills(data.smartCard.skills)
               // Tech Skills
               setTechSkills(data.smartCard.techSkills)
               // Experiences
               setExperiences(data.smartCard.experiences)
               // Internship
               setInternships(data.smartCard.internships);
               // Educations
               setEducations(data.smartCard.educations);
               // Projects
               setProjects(data.smartCard.projects);
               // Interest
               setInterest(data.smartCard.interest)
               // Volunteer Experience
               setVolunteerExperiences(data.smartCard.volunteerExperiences);
               // Honors And Awards
               setHonorsAndAwards(data.smartCard.honorsAndAwards);
               // Trainings
               setTrainings(data.smartCard.trainings);
               // Certification=
               setCertifications(data.smartCard.certifications);
               // License
               setLicense(data.smartCard.license);
               // Course
               setCourses(data.smartCard.courses);
               // Patent
               setPatents(data.smartCard.patents);
               // Publicatons
               setPublications(data.smartCard.publications);
               // Workshop
               setWorkshops(data.smartCard.workshops);
               // References
               setReferences(data.smartCard.references);
               // Personnal Details
               setPersonnalDetails(data.smartCard.personalDetails);
           }
       } catch (error) {
           console.log(error)
       }
   }

    return ( 
        <div className="WebResume">
            <div className="section section-one">
                <div className='contact-details'>
                    <img src={Profile} />
                    <div className='name'>{contact.firstName}{" "}{contact.lastName}</div>
                    {/* <div className='name'>Launch Your Dev</div> */}
                    {headline != '' && <div className='headline'>{headline}</div>}
                    <div className='details'>
                        {contact.email != "" && <Link to={`mailto:${contact.email}`} className="email"><i className="fa fa-envelope" aria-hidden="true"></i></Link>}
                        {contact.phone != "" && <Link to={`tel:${contact.phone}`} className="phone"><i className="fa fa-phone" aria-hidden="true"></i></Link>}
                        {contact.linkedinId != "" && <Link to={contact.linkedinId} className="linkedin"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>}
                    </div>
                </div>
            </div>
            {summary != "" && <div className='section section-two'>
                <div className='summary'>
                    <h4>Summary</h4>
                    <div>{summary}</div>
                </div>
            </div>}
            {experiences.length > 0 && <div className='section section-three'>
                <div className='experience common'>
                    <h4>Experience</h4>
                    {experiences?.map((exp, index) => {
                        let startedDate = exp.startedAt;
                        let startedDateArr = startedDate.split('-');
                        let endedDate = exp.endedAt;
                        let endedDateArr = endedDate.split('-');
                        return (
                            <div className='exp common-details' key={index}>
                                <div className='exp-circle common-details-circle'>
                                    <div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className='exp-data common-data'>
                                    <div className='exp-designation-period common-designation-period'>{exp.designation} {" "} {monthNames[Number(startedDateArr[1]) - 1]} {" "}{startedDateArr[0]} to {monthNames[Number(endedDateArr[1]) - 1]} {" "}{endedDateArr[0]}</div>
                                    <div className='exp-location common-location'>{" "}{exp.city}{" "}{exp.country}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>}
            {volunteerExperiences.length > 0 && <div className='section section-four'>
                <div className='volunteer-experience common'>
                    <h4>Volunteer Experience</h4>
                    {volunteerExperiences?.map((vExp, index) => {
                        let startedDate = vExp.startedAt;
                        let startedDateArr = startedDate.split('-');
                        let endedDate = vExp.endedAt;
                        let endedDateArr = endedDate.split('-');
                        return (
                            <div className='v-exp common-details' key={index}>
                                <div className='v-exp-circle common-details-circle'>
                                    <div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className='v-exp-data common-data'>
                                    <div className='v-exp-designation-period common-designation-period'>{vExp.designation} {" "} {monthNames[Number(startedDateArr[1]) - 1]} {" "}{startedDateArr[0]} to {monthNames[Number(endedDateArr[1]) - 1]} {" "}{endedDateArr[0]}</div>
                                    <div className='v-exp-location common-location'>{" "}{vExp.city}{" "}{vExp.country}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>}
            {workshops.length > 0 && <div className='section section-five'>
                <div className='workshop common'>
                    <h4>Workshop</h4>
                    {workshops?.map((wShop, index) => {
                        let startedDate = wShop.startedAt;
                        let startedDateArr = startedDate.split('-');
                        let endedDate = wShop.endedAt;
                        let endedDateArr = endedDate.split('-');
                        return (
                            <div className='v-exp common-details' key={index}>
                                <div className='v-exp-circle common-details-circle'>
                                    <div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className='v-exp-data common-data'>
                                    <div className='v-exp-designation-period common-designation-period'>{wShop.designation} {" "} {monthNames[Number(startedDateArr[1]) - 1]} {" "}{startedDateArr[0]} to {monthNames[Number(endedDateArr[1]) - 1]} {" "}{endedDateArr[0]}</div>
                                    <div className='v-exp-location common-location'>{" "}{wShop.city}{" "}{wShop.country}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>}
            {internships.length > 0 && <div className='section section-six'>
                <div className='internship common'>
                    <h4>Internship</h4>
                    {internships?.map((intern, index) => {
                        let startedDate = intern.startedAt;
                        let startedDateArr = startedDate.split('-');
                        let endedDate = intern.endedAt;
                        let endedDateArr = endedDate.split('-');
                        return (
                            <div className='intern common-details' key={index}>
                                <div className='intern-circle common-details-circle'>
                                    <div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className='intern-data common-data'>
                                    <div className='intern-designation-period common-designation-period'>{intern.designation} {" "} {monthNames[Number(startedDateArr[1]) - 1]} {" "}{startedDateArr[0]} to {monthNames[Number(endedDateArr[1]) - 1]} {" "}{endedDateArr[0]}</div>
                                    <div className='intern-location common-location'>{" "}{intern.city}{" "}{intern.country}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>}
            {skills.length > 0 && <div className='section section-skills'>
                <h4 className='skills-heading'>Skills</h4>
                <div className='skills'>
                    {skills.map((skill, index) => {
                        return (
                            <div key={index}>
                                <h3>{skill}</h3>
                                <input type="range" value={50} max={100} className="skill-range" style={{backgroundImage: `linear-gradient(90deg, #54595c 2.34%, #54595c ${70}%, #fff ${70}%, white 100%)`}}/>
                            </div>
                        )
                    })}
                </div>
            </div>}
            {techSkills.length > 0 && <div className='section section-skills'>
                <h4 className='skills-heading'>Tech Skills</h4>
                <div className='skills'>
                    {techSkills.map((tSkill, index) => {
                        return (
                            <div key={index}>
                                <h3>{tSkill}</h3>
                                <input type="range" value={70} max={100} className="skill-range" style={{backgroundImage: `linear-gradient(90deg, #54595c 2.34%, #54595c ${70}%, #fff ${70}%, white 100%)`}}/>
                            </div>
                        )
                    })}
                </div>
            </div>}
            {honorsAndAwards.length > 0 && <div className='section section-seven'>
                <div className='honors-awards'>
                    <h4>Honors And Awards</h4>
                    {honorsAndAwards.map((honorAndAward) => {
                        return (
                            <div className='hon'>
                                <div className='badge'>
                                    <div>
                                    <img src={Badge} />
                                    </div>
                                </div>
                                <p>{honorAndAward}</p>
                            </div>
                        )
                    })}
                </div>
            </div>}
            {projects.length > 0 && <div className='section section-eight'>
                <div className='project common'>
                    <h4>Project</h4>
                    {projects?.map((proj, index) => {
                        let startedDate = proj.startedAt;
                        let startedDateArr = startedDate.split('-');
                        let endedDate = proj.endedAt;
                        let endedDateArr = endedDate.split('-');
                        return (
                            <div className='proj common-details' key={index}>
                                <div className='proj-circle common-details-circle'>
                                    <div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className='proj-data common-data'>
                                    <div className='proj-designation-period common-designation-period'>{proj.title} {" "} {monthNames[Number(startedDateArr[1]) - 1]} {" "}{startedDateArr[0]} to {monthNames[Number(endedDateArr[1]) - 1]} {" "}{endedDateArr[0]}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>}
            {publications.length > 0 && <div className='section section-nine'>
                <div className='publications common'>
                    <h4>Publicaton</h4>
                    {publications?.map((publication, index) => {
                        let date = publication?.date;
                        let dateArr = date ? date.split('-') : [];
                        return (
                            <div className='publication common-details' key={index}>
                                <div className='publication-circle common-details-circle'>
                                    <div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className='publication-data common-data'>
                                    <div className='publication-designation-period common-designation-period'>{publication.title} {" "} {monthNames[Number(dateArr[1]) - 1]} {" "}{dateArr[0]}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>}
            {patents.length > 0 && <div className='section section-ten'>
                <div className='patents common'>
                    <h4>Patent</h4>
                    {patents?.map((patent, index) => {
                        return (
                            <div className='patent common-details' key={index}>
                                <div className='patent-circle common-details-circle'>
                                    <div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className='patent-data common-data'>
                                    <div className='patent-designation-period common-designation-period'>{patent.title} {" "} <span>{patent.status}</span></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>}
            {trainings.length > 0 && <div className='section section-eleven'>
                <div className='trainings common'>
                    <h4>Training</h4>
                    {trainings?.map((training, index) => {
                        let startedDate = training.startedAt;
                        let startedDateArr = startedDate.split('-');
                        let endedDate = training.endedAt;
                        let endedDateArr = endedDate.split('-');
                        return (
                            <div className='training common-details' key={index}>
                                <div className='training-circle common-details-circle'>
                                    <div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className='training-data common-data'>
                                    <div className='training-designation-period common-designation-period'>{training.title} {" "} {monthNames[Number(startedDateArr[1]) - 1]} {" "}{startedDateArr[0]} to {monthNames[Number(endedDateArr[1]) - 1]} {" "}{endedDateArr[0]}</div>
                                    <div className='training-location common-location'>{" "}{training.city}{" "}{training.country}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>}
            {courses.length > 0 && <div className='section section-twele'>
                <div className='courses common'>
                    <h4>Course</h4>
                    {courses?.map((course, index) => {
                        let startedDate = course.startedAt;
                        let startedDateArr = startedDate.split('-');
                        let endedDate = course.endedAt;
                        let endedDateArr = endedDate.split('-');
                        return (
                            <div className='course common-details' key={index}>
                                <div className='course-circle common-details-circle'>
                                    <div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className='course-data common-data'>
                                    <div className='course-designation-period common-designation-period'>{course.title} {" "} {monthNames[Number(startedDateArr[1]) - 1]} {" "}{startedDateArr[0]} to {monthNames[Number(endedDateArr[1]) - 1]} {" "}{endedDateArr[0]}</div>
                                    <div className='course-location common-location'>{" "}{course.city}{" "}{course.country}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>}
            {certifications.length > 0 && <div className='section section-thirteen'>
                <div className='certifications common'>
                    <h4>Certification</h4>
                    {certifications?.map((certification, index) => {
                        let startedDate = certification.startedAt;
                        let startedDateArr = startedDate.split('-');
                        let endedDate = certification.endedAt;
                        let endedDateArr = endedDate.split('-');
                        return (
                            <div className='certification common-details' key={index}>
                                <div className='certification-circle common-details-circle'>
                                    <div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className='certification-data common-data'>
                                    <div className='certification-designation-period common-designation-period'>{certification.title} {" "} {monthNames[Number(startedDateArr[1]) - 1]} {" "}{startedDateArr[0]} to {monthNames[Number(endedDateArr[1]) - 1]} {" "}{endedDateArr[0]}</div>
                                    <div className='certification-location common-location'>{" "}{certification.city}{" "}{certification.country}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>}
            {license.name != "" && <div className='section section-fourteen'>
                <div className='license common'>
                    <h4>License</h4>
                    <div className='licen common-details'>
                        <div className='licen-circle common-details-circle'>
                            <div>
                                <div></div>
                            </div>
                        </div>
                        <div className='licen-data common-data'>
                            <div className='licen-designation-period common-designation-period'>{license.name} {" "} {license.number}</div>
                        </div>
                    </div>
                </div>
            </div>}
            {educations.length > 0 && <div className='section section-fifteen'>
                <div className='education common'>
                    <h4>Education</h4>
                    {educations?.map((edu, index) => {
                        let startedDate = edu.startedAt;
                        let startedDateArr = startedDate.split('-');
                        let endedDate = edu.endedAt;
                        let endedDateArr = endedDate.split('-');
                        return (
                            <div className='edu common-details' key={index}>
                                <div className='edu-circle common-details-circle'>
                                    <div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className='edu-data common-data'>
                                    <div className='edu-designation-period common-designation-period'>{edu.degreeName} {" "} {monthNames[Number(startedDateArr[1]) - 1]} {" "}{startedDateArr[0]} to {monthNames[Number(endedDateArr[1]) - 1]} {" "}{endedDateArr[0]}</div>
                                    <div className='edu-location common-location'>{" "}{edu.city}{" "}{edu.country}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>}
            {interest.length > 0 && <div className='section section-seventeen'>
                <h4>Interest</h4>
                <div className='interest'>
                    {/* <span></span> */}
                    {interest?.map((inte, index) => {
                        return (
                            <div className='inte' key={index}>
                                {/* <div className='inte-icons'></div> */}
                                <div className='inte-name'>{inte}</div>
                            </div>
                        )
                    })}
                </div>
            </div>}
            {references.length > 0 && <div className='section section-sixteen'>
                <div className='reference'>
                    <h4>Reference</h4>
                    {references?.map((ref, index) => {
                        return (
                            <div className='ref' key={index}>
                                <div className='ref-name-designation'>
                                    <div className='ref-name'>{ref.name}</div>
                                    <div className='ref-designation'>{ref.designation}</div>
                                </div>
                                <div className='ref-email-company'>
                                    <div className='ref-email'>{ref.email}</div>
                                    <div className='ref-company'>{ref.company}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>}
            <div className='section section-seventeen'>
                <div className='personnal-details common'>
                    <h4>Personal Details</h4>
                    <div className='properties'>
                        <div className='property-one'></div>
                        <div className='property-name'>
                            {personnalDetails?.languageKnown?.length > 0 && <div className='property-nam'>Language Known</div>}
                            {personnalDetails.dateOfBirth != "" && <div className='property-nam'>Date Of Birth</div>}
                            {personnalDetails.nationality != "" && <div className='property-nam'>Nationality</div>}
                            {personnalDetails.passport != "" && <div className='property-nam'>Passport</div>}
                        </div>
                        <div className='property-value'>
                            <div className='property-valu'>{personnalDetails?.languageKnown?.map(lang => {return <span>{lang}{", "}</span>})}</div>
                            <div className='property-valu'>{personnalDetails.dateOfBirth}</div>
                            <div className='property-valu'>{personnalDetails.nationality}</div>
                            <div className='property-valu'>{personnalDetails.passport}</div>
                        </div>
                        <div className='property-four'></div>
                    </div>
                </div>
            </div>
        </div>
     );
     
}
 
export default WebResume;