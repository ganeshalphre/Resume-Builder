import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import  Profile from '../../Assets/profile.jpg';
import '../../StyleSheets/webresume.css';
const WebResume = () => {

    const {id} = useParams();
    const resumeId = id;

    const headline = "MERN Stack Developer"

    const [contact, setContact] = useState({});
    const [summary, setSummary] = useState('');
    const [experience, setExperiences] = useState([]);

    useEffect(() => {
        getResume();
    }, [])

    const getResume = async() => {
        try {
           const {data} = await axios.get(`${process.env.REACT_APP_API}get-unique-resume/63f5ef655a407bb61b9af883`)
           console.log({data});
           if(data.success) {
               console.log({resume: data.resume})
               // Contact
               setContact(data.resume.contact);
               // Summary
               let summ = data.resume.summary;
               setSummary(summ)
               // Skills
            //    let ski = data.resume.skills;
            //    setSkills(ski)
            //    // Tech Skills
            //    let tSki = data.resume.techSkills;
            //    setTechSkills(tSki)
            //    // console.log(tSki);
            //    // Experiences
            //    let exp = data.resume.experiences;
                setExperiences(data.resume.experiences)
            //    // Internship
            //    let interns = data.resume.internships;
            //    setInternships(interns);
            //    // Educations
            //    let edus = data.resume.educations;
            //    setEducations(edus);
            //    // Projects
            //    let pros = data.resume.projects;
            //    setProjects(pros);
            //    // Interest
            //    setInterest(data.resume.interest)
            //    // Volunteer Experience
            //    let volunteerExp = data.resume.volunteerExperiences;
            //    setVolunteerExperiences(volunteerExp);
            //    // Honors And Awards
            //    let honAndAw = data.resume.honorsAndAwards;
            //    setHonorsAndAwards(honAndAw);
            //    // Trainings
            //    let trains = data.resume.trainings;
            //    setTrainings(trains);
            //    // Certification
            //    let certs = data.resume.certifications;
            //    setCertifications(certs);
            //    // License
            //    let licen = data.resume.license;
            //    console.log(licen);
            //    setLicenseName(licen.name);
            //    setLicenseNumber(licen.number);
            //    setLicenseValidFrom(licen.validFrom);
            //    setLicenseIssuer(licen.issuer);
            //    setLicenseValidTo(licen.validTill);
            //    // Course
            //    let cours = data.resume.courses;
            //    setCourses(cours);
            //    console.log("co log");
            //    // Patent
            //    let patens = data.resume.patents;
            //    setPatents(patens);
            //    // Publicatons
            //    let publicas = data.resume.publications;
            //    setPublications(publicas)
            //    // Workshop
            //    let wshops = data.resume.workshops;
            //    setWorkshops(wshops);
            //    // References
            //    let referens = data.resume.references;
            //    setReferences(referens);
            //    // Personnal Details
            //    let perDetails = data.resume.personalDetails;
            //    setLanguageKnown(perDetails.languageKnown);
            //    setDateOfBirth(perDetails.dateOfBirth);
            //    setNationality(perDetails.nationality);
            //    setPassport(perDetails.passport);
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
                    <div className='headline'>{headline}</div>
                    <div className='details'>
                        <Link to={`mailto:${contact.email}`} className="email"><i className="fa fa-envelope" aria-hidden="true"></i></Link>
                        <Link to={`tel:${contact.phone}`} className="phone"><i className="fa fa-phone" aria-hidden="true"></i></Link>
                        {/* <span>{contact.address}</span> */}
                        <Link to={contact.linkedinId} className="linkedin"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
                    </div>
                </div>
            </div>
            <div className='section section-two'>
                <div className='summary'>
                    <h4>Summary</h4>
                    <div>{summary}</div>
                </div>
            </div>
            <div className='section section-three'>
                <div className='experience'>
                    <h4>Experience</h4>
                    {experience?.map((exp, index) => {
                        return (
                            <div className='exp' key={index}>
                                <div className='exp-circle'>
                                    <div></div>
                                </div>
                                <div className='exp-data'>
                                    <div className='exp-designation-period'>{exp.designation} {" "} {exp.startedAt} {exp.endedAt}</div>
                                    <div className='exp-location'>{exp.city}{" "}{exp.country}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
     );
}
 
export default WebResume;