import axios from 'axios';
import { Formik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../StyleSheets/dashboard.css'
const ResumeCreate = () => {

    const [enter, setEnter] = useState("");

    const navigate = useNavigate();

    // Contact
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [linkedinId, setLinkedinId] = useState("");

    // Summary
    const [summary, setSummary] = useState([]);

    // Skills
    const [skills, setSkills] = useState([]);
    
    // Tech Skills
    const [techSkills, setTechSkills] = useState([]);
    
    // Experience
    const [designation, setDesignation] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companyCity ,setComanyCity] = useState("");
    const [companyCountry, setCompanyCountry] = useState("");
    const [responsibilities, setResponsibilities] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [experiences, setExperiences] = useState([]);

    // Internship
    const [internDesignation, setInternDesignation] = useState("");
    const [internCompanyName, setInternCompanyName] = useState("");
    const [internCompanyCity ,setInternCompanyCity] = useState("");
    const [internCompanyCountry, setInternCompanyCountry] = useState("");
    const [internResponsibilities, setInternResponsibilities] = useState("");
    const [internStartDate, setInternStartDate] = useState([]);
    const [internEndDate, setInternEndDate] = useState("");
    const [internships, setInternships] = useState([]);
    
    // Education
    const [degreeName, setDegreeName] = useState("");
    const [collegeName, setCollegeName] = useState("");
    const [collegeCity ,setCollegeCity] = useState("");
    const [collegeCountry, setCollegeCountry] = useState("");
    const [collegeStartDate, setCollegeStartDate] = useState("");
    const [collegeEndDate, setCollegeEndDate] = useState("");
    const [score, setScore] = useState("");
    const [educations, setEducations] = useState([]);

    // Interest
    const [interest, setInterest] = useState([]);

    // Projects
    const [projectNumber, setProjectNumber] = useState("");
    const [projectTitle, setProjectTitle] = useState("");
    const [projectStartDate, setProjectStartDate] = useState("");
    const [projectEndDate, setProjectEndDate] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [projects, setProjects] = useState([]);

    // Volunteers
    const [volunteerDesignation, setVolunteerDesignation] = useState("");
    const [volunteerCompanyName, setVolunteerCompanyName] = useState("");
    const [volunteerStartDate, setVolunteerStartDate] = useState("");
    const [volunteerEndDate, setVolunteerEndDate] = useState("");
    const [volunteerCompanyCity, setVolunteerCompanyCity] = useState("");
    const [volunteerCompanyCountry, setVolunteerCompanyCountry] = useState("");
    const [volunteerResponsibilities, setVolunteerResponsibilities] = useState([]);
    const [volunteerExperiences, setVolunteerExperiences] = useState([]);

    // HonorsAndAwards
    const [honorsAndAwards, setHonorsAndAwards] = useState([])

    // Training
    const [trainingTitle, setTrainingTitle] = useState("");
    const [trainingInstutionName, setTrainingInstutionName] = useState("");
    const [trainingCity, setTrainingCity] = useState("");
    const [trainingCountry, setTrainingCountry] = useState("");
    const [trainingStartDate, setTrainingStartDate] = useState("");
    const [trainingEndDate, setTrainingEndDate] = useState("");
    const [trainingScore, setTrainingScore] = useState("");
    const [trainings, setTrainings] = useState([]);

    // Certification
    const [certificationTitle, setCertificationTitle] = useState("");
    const [certificationInstutionName, setCertificationInstutionName] = useState("");
    const [certificationCity, setCertificationCity] = useState("");
    const [certificationCountry, setCertificationCountry] = useState("");
    const [certificationStartDate, setCertificationStartDate] = useState("");
    const [certificationEndDate, setCertificationEndDate] = useState("");
    const [certificationScore, setCertificationScore] = useState("");
    const [certifications, setCertifications] = useState([]);
    
    // License
    const [licenseName, setLicenseName] = useState("");
    const [licenseNumber, setLicenseNumber] = useState("");
    const [licenseIssuer, setLicenseIssuer] = useState("");
    const [licenseValidFrom, setLicenseValidFrom] = useState("");
    const [licenseValidTo, setLicenseValidTo] = useState("");

    // Course
    const [courseTitle, setCourseTitle] = useState("");
    const [courseInstutionName, setCourseInstutionName] = useState("");
    const [courseCity, setCourseCity] = useState("");
    const [courseCountry, setCourseCountry] = useState("");
    const [courseStartDate, setCourseStartDate] = useState("");
    const [courseEndDate, setCourseEndDate] = useState("");
    const [courseScore, setCourseScore] = useState("");
    const [courses, setCourses] = useState([]);

    // Patent
    const [patentTitle, setPatentTitle] = useState("");
    const [patentNumber, setPatentNumber] = useState("");
    const [patentDescription, setPatentDescription] = useState([]);
    const [patentStatus, setPatentStatus] = useState("");
    const [patents, setPatents] = useState([]);

    // Publication
    const [publicationName, setPublicationName] = useState("");
    const [publicationDescription, setPublicationDescription] = useState({});
    const [publicationDate, setPublictionDate] = useState("");
    const [publications, setPublications] = useState([]);

    // Workshop
    const [workshopDesignation, setWorkshopDesignation] = useState("");
    const [workshopCompanyName, setWorkshopCompanyName] = useState("");
    const [workshopStartDate, setWorkshopStartDate] = useState("");
    const [workshopEndDate, setWorkshopEndDate] = useState("");
    const [workshopCompanyCity, setWorkshopCompanyCity] = useState("");
    const [workshopCompanyCountry, setWorkshopCompanyCountry] = useState("");
    const [workshopResponsibilities, setWorkshopResponsibilities] = useState([]);
    const [workshops, setWorkshops] = useState([]);

    // Reference
    const [referenceName, setReferenceName] = useState("");
    const [referenceDesignation, setReferenceDesignation] = useState("");
    const [referenceCompany, setReferenceCompany] = useState("");
    const [referenceEmail, setReferenceEmail] = useState("");
    const [references, setReferences] = useState([]);

    // Personal Details
    const [languageKnown, setLanguageKnown] = useState([]);
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [nationality, setNationality] = useState("");
    const [passport, setPassport] = useState("");


    const addExperience = (e) => {
        e.preventDefault();
        if(designation != '' && companyName != '' && companyCity != "" && companyCountry != '' && responsibilities != '' && startDate != '' && endDate != '') {
            setExperiences(prev => [...prev , {designation, companyName, city: companyCity, country: companyCountry, responsibilities, startedAt: startDate, endedAt: endDate}]);
            setDesignation('');
            setCompanyName('');
            setComanyCity('');
            setCompanyCountry('');
            setResponsibilities('');
            setStartDate('');
            setEndDate('');
        } else {
            console.log('please fill missing details')
        }
    }

    const addIntership = (e) => {
        e.preventDefault();
        if(internDesignation != '' && internCompanyName != '' && internCompanyCity != "" && internCompanyCountry != '' && internResponsibilities != '' && internStartDate != '' && internEndDate != '' ) {
            setInternships(prev => [...prev , {designation: internDesignation, companyName: internCompanyName, city: internCompanyCity, country: internCompanyCountry, responsibilities: internResponsibilities, startedAt: internStartDate, endedAt: internEndDate}]);
            setInternDesignation('');
            setInternCompanyName('');
            setInternCompanyCity('');
            setInternCompanyCountry('');
            setInternResponsibilities('');
            setInternStartDate('');
            setInternEndDate('');
        } else {
            console.log('please fill missing details')
        }
    }

    const addEducation = (e) => {
        e.preventDefault();
        console.log("edu running");
        if(degreeName != '' && collegeName != '' && collegeCity != "" && collegeCountry != '' && collegeStartDate != '' && collegeEndDate != '' && score != "") {
            setEducations(prev => [...prev , {degreeName, collegeName, city: collegeCity, country: collegeCountry, startedAt: collegeStartDate, endedAt: collegeEndDate, score: score}]);
            setDegreeName('');
            setCollegeName('');
            setCollegeCity('');
            setCollegeCountry('');
            setCollegeStartDate('');
            setCollegeEndDate('');
            setScore("");
        } else {
            console.log('please fill missing details')
        }
    }

    const addProject = (e) => {
        e.preventDefault();
        if(projectNumber != '' && projectTitle != '' && projectStartDate != "" && projectEndDate != '' && projectDescription != '') {
            setProjects(prev => [...prev , {number: projectNumber, title: projectTitle, startedAt: projectStartDate, endedAt: projectEndDate, description: projectDescription}]);
            setProjectNumber('');
            setProjectTitle('');
            setProjectStartDate('');
            setProjectEndDate('');
            setProjectDescription('');
            setScore("")
        } else {
            console.log('please fill missing details')
        }
    }

    const addVolunteers = (e) => {
        e.preventDefault();
        if(volunteerDesignation != '' && volunteerCompanyName != '' && volunteerStartDate != "" && volunteerEndDate != '' && volunteerCompanyCity != '' && volunteerCompanyCountry != "" && volunteerResponsibilities != "" ) {
            setVolunteerExperiences(prev => [...prev , {designation: volunteerDesignation, companyName: volunteerCompanyName, startedAt: volunteerStartDate, endedAt: volunteerEndDate, city: volunteerCompanyCity, country: volunteerCompanyCountry, responsibilities: volunteerResponsibilities}]);
            setVolunteerDesignation("");
            setVolunteerCompanyName('');
            setVolunteerStartDate('');
            setVolunteerEndDate('');
            setVolunteerCompanyCity('');
            setVolunteerCompanyCountry("");
            setVolunteerResponsibilities("");
        } else {
            console.log('please fill missing details')
        }
    }

    const addTraining = (e) => {
        e.preventDefault();
        if(trainingInstutionName != '' && trainingTitle != '' && trainingCity != "" && trainingCountry != '' && trainingStartDate != '' && trainingEndDate != '' && trainingScore != '') {
            setTrainings(prev => [...prev , {institutionName: trainingInstutionName, title: trainingTitle, startedAt: trainingStartDate, endedAt: trainingEndDate, city: trainingCity, country: trainingCountry, score: trainingScore}]);
            setTrainingTitle('');
            setTrainingInstutionName('');
            setTrainingCity('');
            setTrainingCountry('');
            setTrainingStartDate('');
            setTrainingEndDate('');
            setTrainingScore('');
        } else {
            console.log('please fill missing details')
        }
    }

    const addCertification = (e) => {
        e.preventDefault();
        if(certificationInstutionName != '' && certificationTitle != '' && certificationCity != "" && certificationCountry != '' && certificationStartDate != '' && certificationEndDate != '' && certificationScore != '') {
            setCertifications(prev => [...prev , {institutionName: certificationInstutionName, title: certificationTitle, startedAt: certificationStartDate, endedAt: certificationEndDate, city: certificationCity, country: certificationCountry, score: certificationScore}]);
            setCertificationTitle('');
            setCertificationInstutionName('');
            setCertificationCity('');
            setCertificationCountry('');
            setCertificationStartDate('');
            setCertificationEndDate('');
            setCertificationScore('');
        } else {
            console.log('please fill missing details')
        }
    }

    const addCourse = (e) => {
        e.preventDefault();
        if(courseInstutionName != '' && courseTitle != '' && courseCity != "" && courseCountry != '' && courseStartDate != '' && courseEndDate != '' && courseScore != '') {
            setCourses(prev => [...prev , {institutionName: courseInstutionName, title: courseTitle, startedAt: courseStartDate, endedAt: courseEndDate, city: courseCity, country: courseCountry, score: courseScore}]);
            setCourseTitle('');
            setCourseInstutionName('');
            setCourseCity('');
            setCourseCountry('');
            setCourseStartDate('');
            setCourseEndDate('');
            setCourseScore('');
        } else {
            console.log('please fill missing details')
        }
    }

    const addPublication = (e) => {
        e.preventDefault();
        if(publicationName != '' && publicationDate != "" && publicationDescription!= '') {
            setPublications(prev => [...prev , {title: publicationName, date: publicationDate, descriptions: publicationDescription}]);
            setPublicationName("");
            setPublictionDate("");
            setPublicationDescription([]);
        } else {
            console.log('please fill missing details')
        }
    }

    const addWorkshops = (e) => {
        e.preventDefault();
        if(workshopDesignation != '' && workshopCompanyName != '' && workshopStartDate != "" && workshopEndDate != '' && workshopCompanyCity != '' && workshopCompanyCountry != "" && workshopResponsibilities != "") {
            setWorkshops(prev => [...prev , {designation: workshopDesignation, companyName: workshopCompanyName, startedAt: workshopStartDate, endedAt: workshopEndDate, city: workshopCompanyCity, country: workshopCompanyCountry, responsibilities: workshopResponsibilities}]);
            setWorkshopDesignation("");
            setWorkshopCompanyName('');
            setWorkshopStartDate('');
            setWorkshopEndDate('');
            setWorkshopCompanyCity('');
            setWorkshopCompanyCountry("");
            setWorkshopResponsibilities([]);
        } else {
            console.log('please fill missing details')
        }
    }

    const addReference = (e) => {
        e.preventDefault();
        if(referenceName != '' && referenceDesignation!= '' && referenceCompany != "" && referenceEmail != "") {
            setReferences(prev => [...prev , {name: referenceName, designation: referenceDesignation, company: referenceCompany, email: referenceEmail}]);
            setReferenceName("");
            setReferenceDesignation("");
            setReferenceEmail("");
        } else {
            console.log('please fill missing details')
        }
    }

    const addPatent = (e) => {
        e.preventDefault();
        if(patentTitle != '' && patentNumber != '' && patentStatus != "" && patentDescription != '') {
            setPatents(prev => [...prev , {title: patentTitle, number: patentNumber, descriptions: patentDescription, status: patentStatus}]);
            setPatentTitle("");
            setPatentNumber("");
            setPatentDescription([]);
            setPatentStatus("");
        } else {
            console.log('please fill missing details')
        }
    }


    const handleSubmit = async(e) => {
        e.preventDefault();
        if(designation != '' && companyName != '' && companyCity != "" && companyCountry != '' && responsibilities != '' && startDate != '' && endDate != '') {
            experiences.push({designation, companyName, city: companyCity, country: companyCountry, responsibilities, startedAt: startDate, endedAt: endDate});
        }
        if(internDesignation != '' && internCompanyName != '' && internCompanyCity != "" && internCompanyCountry != '' && internResponsibilities != '' && internStartDate != '' && internEndDate != '' ) {
            internships.push({designation: internDesignation, companyName: internCompanyName, city: internCompanyCity, country: internCompanyCountry, responsibilities: internResponsibilities, startedAt: internStartDate, endedAt: internEndDate});
        }
        if(degreeName != '' && collegeName != '' && collegeCity != "" && collegeCountry != '' && collegeStartDate != '' && collegeEndDate != '' && score != "") {
            educations.push({degreeName, collegeName, city: collegeCity, country: collegeCountry, startedAt: collegeStartDate, endedAt: collegeEndDate, score: score})
        }
        if(projectNumber != '' && projectTitle != '' && projectStartDate != "" && projectEndDate != '' && projectDescription != '') {
            projects.push({number: projectNumber, title: projectTitle, startedAt: projectStartDate, endedAt: projectEndDate, description: projectDescription});
        }
        if(volunteerDesignation != '' && volunteerCompanyName != '' && volunteerStartDate != "" && volunteerEndDate != '' && volunteerCompanyCity != '' && volunteerCompanyCountry != "" && volunteerResponsibilities != "") {
            volunteerExperiences.push({designation: volunteerDesignation, companyName: volunteerCompanyName, startedAt: volunteerStartDate, endedAt: volunteerEndDate, city: volunteerCompanyCity, country: volunteerCompanyCountry, responsibilities: volunteerResponsibilities});
        }
        if(trainingInstutionName != '' && trainingTitle != '' && trainingCity != "" && trainingCountry != '' && trainingStartDate != '' && trainingEndDate != '' && trainingScore != '') {
            trainings.push({institutionName: trainingInstutionName, title: trainingTitle, startedAt: trainingStartDate, endedAt: trainingEndDate, city: trainingCity, country: trainingCountry, score: trainingScore});
        }
        if(certificationInstutionName != '' && certificationTitle != '' && certificationCity != "" && certificationCountry != '' && certificationStartDate != '' && certificationEndDate != '' && certificationScore != '') {
            certifications.push({institutionName: certificationInstutionName, title: certificationTitle, startedAt: certificationStartDate, endedAt: certificationEndDate, city: certificationCity, country: certificationCountry, score: certificationScore});
        }
        if(courseInstutionName != '' && courseTitle != '' && courseCity != "" && courseCountry != '' && courseStartDate != '' && courseEndDate != '' && courseScore != '') {
            courses.push({institutionName: courseInstutionName, title: courseTitle, startedAt: courseStartDate, endedAt: courseEndDate, city: courseCity, country: courseCountry, score: courseScore});
        }
        if(publicationName != '' && publicationDescription!= '') {
            publications.push({title: publicationName, date: publicationDate, description: publicationDescription});
        }
        if(workshopDesignation != '' && workshopCompanyName != '' && workshopStartDate != "" && workshopEndDate != '' && workshopCompanyCity != '' && workshopCompanyCountry != "" && workshopResponsibilities != "") {
            workshops.push({designation: workshopDesignation, companyName: workshopCompanyName, startedAt: workshopStartDate, endedAt: workshopEndDate, city: workshopCompanyCity, country: workshopCompanyCountry, responsibilities: workshopResponsibilities});
        }
        if(referenceName != '' && referenceDesignation!= '' && referenceCompany != "" && referenceEmail != "") {
            references.push({name: referenceName, designation: referenceDesignation, company: referenceCompany, email: referenceEmail});
        }
        console.log(trainings);
            const d = {
            contact: {
                firstName,
                lastName,
                email,
                phone,
                address,
                linkedinId
            },
            summary,
            skills,
            techSkills,
            experiences,
            internships,
            educations,
            interest,
            projects,
            volunteerExperiences,
            honorsAndAwards,
            trainings,
            certifications,
            license: {
                name: licenseName,
                number: licenseNumber,
                validFrom: licenseValidFrom,
                validTo: licenseValidTo,
                issuer: licenseIssuer
            },
            courses,
            patent: {
                title: patentTitle,
                number: patentNumber,
                description: patentDescription,
                status: patentStatus,
            },
            publications,
            workshops,
            references,
            personalDetails: {
                languageKnown,
                dateOfBirth,
                nationality,
                passport
            }
        }
        console.log({d});
        try {
            const {data} = await axios.post(`${process.env.REACT_APP_API}/create-resume`, d);
            console.log({data})
            if (data.success) {
                navigate(`/dashboard/resume-pdf/${data.resume._id}`, {state: {id: data.resume._id}})
            }
        } catch (error) {
            console.log(error)
        }
    }

    // const changeAddress = (val) => {
    //     let arr = val.split("\n")
    //     setAddress(arr);
    // }                                                                                              
    const changeSummary = (val) => {
        let summaryArr = val.split("\n")
        setSummary(summaryArr);
    }                                                                                              
    const changeSkill = (val) => {
        let skillArr = val.split("\n")
        console.log(skillArr);
        setSkills(skillArr);
    }                                                                                              
    const changeTechSkill = (val) => {
        let techSkillArr = val.split("\n")
        setTechSkills(techSkillArr);
    }  

    const changeResposibilities = (val) => {
        let responsibilitiesArr = val.split("\n")
        setResponsibilities(responsibilitiesArr);
    }                                                                                              
    const changeInternResponsibilities = (val) => {
        let internResponsibilitiesArr = val.split("\n")
        setInternResponsibilities(internResponsibilitiesArr);
    }                                                                                            
    const changeInterest = (val) => {
        let interestArr = val.split("\n")
        setInterest(interestArr);
    }                                                                                              
    const changeVolunteerResponsibilities = (val) => {
        let arr = val.split("\n")
        setVolunteerResponsibilities(arr);
    }                                                                                              
    const changeWorkshopResponsibilities = (val) => {
        let arr = val.split("\n")
        setWorkshopResponsibilities(arr);
    }    
    const changeHonorAndAwards = (val) => {
        let arr = val.split("\n");
        setHonorsAndAwards(arr);
    }                                                                                         
    const changeknownLanguages = (val) => {
        let arr = val.split("\n");
        console.log(arr);
        setLanguageKnown(arr);
    }                                                                                         
    const changePatentDescription = (val) => {
        let arr = val.split("\n");
        console.log(arr);
        setPatentDescription(arr);
    }    
    const changePublicationDescription = (val) => {
        let arr = val.split("\n");
        console.log(arr);
        setPublicationDescription(arr);
    }                                                                                     
    return ( 
        <div className="Resume">
            <form onSubmit={(e) => handleSubmit(e)}>
                <h4>Contact</h4>
                    <div className="row">
                        <div className="col-20">
                            <label for="fname">First Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="lname">Last Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                    </div>  
                    <div className="row">
                        <div className="col-20">
                            <label for="email">Email</label>
                        </div>
                        <div className="col-75">
                            <input type="email" id="email" name="email" placeholder="Your email.." onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="phone">Phone</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="phone" name="phone" placeholder="Your phone.." onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="address">Address</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="address" name="address" placeholder="Your address.." onChange={(e) => setAddress(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="Linked Id">Linkedin Id</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="linkedInId" name="linkedInId" placeholder="Your linkedin id.." onChange={(e) => setLinkedinId(e.target.value)}/>
                        </div>
                    </div>
                    
                    {/* Summary */}
                    <div className="row">
                        <div className="col-20">
                            <label for="summary">Summary</label>
                        </div>
                        <div className="col-75">
                            <textarea type="text" id="summary" name="summary" placeholder="Your summary" onChange={(e) => changeSummary(e.target.value)}/>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="row">
                        <div className="col-20">
                            <label for="skills">Skills</label>
                        </div>
                        <div className="col-75">
                            <textarea type="text" id="skills" name="skills" placeholder="Your skills" onChange={(e) => changeSkill(e.target.value)}/>
                        </div>
                    </div>

                    {/* Tech Skills */}
                    <div className="row">
                        <div className="col-20">
                            <label for="techSkills">Tech Skills</label>
                        </div>
                        <div className="col-75">
                            <textarea type="text" id="techSkills" name="techSkills" placeholder="Your techSkills" onChange={(e) => changeTechSkill(e.target.value)}/>
                        </div>
                    </div>

                    {/* Experience */}
                    <h4>Experience</h4>
                    {experiences?.map(experince => {
                        return (
                            <>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Designation</span>
                                </div>
                                <div className='col-75'>
                                    <span>{experince.designation}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Company Name</span>
                                </div>
                                <div className='col-75'>
                                    <span>{experince.companyName}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Start Date</span>
                                </div>
                                <div className='col-75'>
                                    <span>{experince.startedAt}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>End Date</span>
                                </div>
                                <div className='col-75'>
                                    <span>{experince.endedAt}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Company City</span>
                                </div>
                                <div className='col-75'>
                                    <span>{experince.city}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Company Country</span>
                                </div>
                                <div className='col-75'>
                                    <span>{experince.country}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Responsibilities</span>
                                </div>
                                <div className='col-75'>
                                    {experince.responsibilities.map(responsibility => {
                                        return <span>{responsibility}</span>
                                    })}
                                    <span>{experince.responsibilities}</span>
                                </div>
                            </div>
                            
                            </>
                        )
                    })}
                    <div className="row">
                        <div className="col-20">
                            <label for="designation">Designation</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="designation" name="designation" placeholder="Your designation" value={designation} onChange={(e) => setDesignation(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="companyName">Company Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="companyName" name="companyName" placeholder="Your company name" value={companyName} onChange={(e) => setCompanyName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="startDate">Start Date</label>
                        </div>
                        <div className="col-75">
                            <input type="date" id="startDate" name="startDate" placeholder="Your start date" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="endDate">End Date</label>
                        </div>
                        <div className="col-75">
                            <input type="date" id="endDate" name="endDate" placeholder="Your end date" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="companyCity">Company City</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="companyCity" name="companyCity" placeholder="Your company city" value={companyCity} onChange={(e) => setComanyCity(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="companyCountry">Company Country</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="companyCountry" name="companyCountry" placeholder="Your country" value={companyCountry} onChange={(e) => setCompanyCountry(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="responsibilities">Responsibilities</label>
                        </div>
                        <div className="col-75">
                            <textarea type="text" id="responsibilities" name="responsibilities" placeholder="Your" onChange={(e) => changeResposibilities(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20" >
                            <i className="fa fa-plus" aria-hidden="true" style={{fontSize: "2rem", color: 'var(--secondary-color)'}} onClick={(e) => addExperience(e)}></i>
                        </div>
                    </div>

                    {/* Internship */}
                    <h4>Internship</h4>
                    {internships?.map(internship => {
                        return (
                            <>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Designation</span>
                                </div>
                                <div className='col-75'>
                                    <span>{internship.designation}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Company Name</span>
                                </div>
                                <div className='col-75'>
                                    <span>{internship.companyName}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Start Date</span>
                                </div>
                                <div className='col-75'>
                                    <span>{internship.startedAt}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>End Date</span>
                                </div>
                                <div className='col-75'>
                                    <span>{internship.endedAt}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Company City</span>
                                </div>
                                <div className='col-75'>
                                    <span>{internship.city}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Company Country</span>
                                </div>
                                <div className='col-75'>
                                    <span>{internship.country}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Responsibilities</span>
                                </div>
                                <div className='col-75'>
                                    {internship.responsibilities.map(responsibility => {
                                        return (
                                            <span>{responsibility}</span>
                                        )
                                    })}
                                </div>
                            </div>
                            
                            </>
                        )
                    })}
                    <div className="row">
                        <div className="col-20">
                            <label for="designation">Designation</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="designation" name="designation" placeholder="Your designation" value={internDesignation} onChange={(e) => setInternDesignation(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="companyName">Company Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="companyName" name="companyName" placeholder="Your company name" value={internCompanyName} onChange={(e) => setInternCompanyName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="startDate">Start Date</label>
                        </div>
                        <div className="col-75">
                            <input type="date" id="startDate" name="startDate" placeholder="Your start date" value={internStartDate} onChange={(e) => setInternStartDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="endDate">End Date</label>
                        </div>
                        <div className="col-75">
                            <input type="date" id="endDate" name="endDate" placeholder="Your end date" value={internEndDate} onChange={(e) => setInternEndDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="companyCity">Company City</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="companyCity" name="companyCity" placeholder="Your company city" value={internCompanyCity} onChange={(e) => setInternCompanyCity(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="companyCountry">Company Country</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="companyCountry" name="companyCountry" placeholder="Your country" value={internCompanyCountry} onChange={(e) => setInternCompanyCountry(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="responsibilities">Responsibilities</label>
                        </div>
                        <div className="col-75">
                            <textarea type="text" id="responsibilities" name="responsibilities" placeholder="Your responsibilities" onChange={(e) => changeInternResponsibilities(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20" >
                            <i className="fa fa-plus" aria-hidden="true" style={{fontSize: "2rem", color: 'var(--secondary-color)'}} onClick={(e) => addIntership(e)}></i>
                        </div>
                    </div>

                    {/* Education */}
                    <h4>Education</h4>
                    {educations?.map(education => {
                        return (
                            <>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Degree Name</span>
                                </div>
                                <div className='col-75'>
                                    <span>{education.degreeName}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>College Name</span>
                                </div>
                                <div className='col-75'>
                                    <span>{education.collegeName}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Start Date</span>
                                </div>
                                <div className='col-75'>
                                    <span>{education.startedAt}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>End Date</span>
                                </div>
                                <div className='col-75'>
                                    <span>{education.endedAt}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Company City</span>
                                </div>
                                <div className='col-75'>
                                    <span>{education.city}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Company Country</span>
                                </div>
                                <div className='col-75'>
                                    <span>{education.country}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Score</span>
                                </div>
                                <div className='col-75'>
                                    <span>{education.score}</span>
                                </div>
                            </div>
                            
                            </>
                        )
                    })}
                    <div className="row">
                        <div className="col-20">
                            <label for="degree">Degree</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="degree" name="degree" placeholder="Your degree" value={degreeName} onChange={(e) => setDegreeName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="companyName">College/University Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="companyName" name="companyName" placeholder="Your company name" value={collegeName} onChange={(e) => setCollegeName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="startDate">Start Date</label>
                        </div>
                        <div className="col-75">
                            <input type="date" id="startDate" name="startDate" placeholder="Your start date" value={collegeStartDate} onChange={(e) => setCollegeStartDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="endDate">End Date</label>
                        </div>
                        <div className="col-75">
                            <input type="date" id="endDate" name="endDate" placeholder="Your end date" value={collegeEndDate} onChange={(e) => setCollegeEndDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="collegeCity">College City</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="collegeCity" name="collegeCity" placeholder="Your college city" value={collegeCity} onChange={(e) => setCollegeCity(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="companyCountry">College Country</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="companyCountry" name="collegeCountry" placeholder="Your country" value={collegeCountry} onChange={(e) => setCollegeCountry(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="score">Score</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="score" name="score" placeholder="Your score" value={score} onChange={(e) => setScore(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20" >
                            <i className="fa fa-plus" aria-hidden="true" style={{fontSize: "2rem", color: 'var(--secondary-color)'}} onClick={(e) => addEducation(e)}></i>
                        </div>
                    </div>                                                                                  

                    {/* Interest */}
                    <div className="row">
                        <div className="col-20">
                            <label for="score">Interest</label>
                        </div>
                        <div className="col-75">
                            <textarea type="text" id="score" name="score" placeholder="Your interest" onChange={(e) => changeInterest(e.target.value)}/>
                        </div>
                    </div>



                    {/* Projects */}
                    <h4>Project</h4>
                    {projects?.map(project => {
                        return (
                            <>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Project Number</span>
                                </div>
                                <div className='col-75'>
                                    <span>{project.number}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Title</span>
                                </div>
                                <div className='col-75'>
                                    <span>{project.title}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Start Date</span>
                                </div>
                                <div className='col-75'>
                                    <span>{project.startedAt}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>End Date</span>
                                </div>
                                <div className='col-75'>
                                    <span>{project.endedAt}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Description</span>
                                </div>
                                <div className='col-75'>
                                    <span>{project.description}</span>
                                </div>
                            </div>
                            
                            </>
                        )
                    })}
                    <div className="row">
                        <div className="col-20">
                            <label for="projectNumber">Project Number</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="projectNumber" name="projectNumber" placeholder="Your Project Number" value={projectNumber} onChange={(e) => setProjectNumber(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="projectTitle">Project Title</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="projectTitle" name="projectTitle" placeholder="Your project title" value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="startDate">Start Date</label>
                        </div>
                        <div className="col-75">
                            <input type="date" id="startDate" name="startDate" placeholder="Your start date" value={projectStartDate} onChange={(e) => setProjectStartDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="endDate">End Date</label>
                        </div>
                        <div className="col-75">
                            <input type="date" id="endDate" name="endDate" placeholder="Your end date" value={projectEndDate} onChange={(e) => setProjectEndDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="description">Description</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="description" name="description" placeholder="Your project description" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20" >
                            <i className="fa fa-plus" aria-hidden="true" style={{fontSize: "2rem", color: 'var(--secondary-color)'}} onClick={(e) => addProject(e)}></i>
                        </div>
                    </div> 




                    {/* Volunteer Experience */}
                    <h4>Volunteer Experience</h4>
                    {volunteerExperiences?.map(volunteer => {
                        return (
                            <>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Designation</span>
                                </div>
                                <div className='col-75'>
                                    <span>{volunteer.designation}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Company Name</span>
                                </div>
                                <div className='col-75'>
                                    <span>{volunteer.companyName}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Start Date</span>
                                </div>
                                <div className='col-75'>
                                    <span>{volunteer.startedAt}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>End Date</span>
                                </div>
                                <div className='col-75'>
                                    <span>{volunteer.endedAt}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Company City</span>
                                </div>
                                <div className='col-75'>
                                    <span>{volunteer.city}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Company Country</span>
                                </div>
                                <div className='col-75'>
                                    <span>{volunteer.country}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Responsibilities</span>
                                </div>
                                <div className='col-75'>
                                    {volunteer.responsibilities.map(responsibility => {
                                        return (
                                            <span>{responsibility}</span>
                                        )
                                    })}
                                </div>
                            </div>
                            
                            </>
                        )
                    })}
                    <div className="row">
                        <div className="col-20">
                            <label for="projectNumber">Designation</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="projectNumber" name="projectNumber" placeholder="Your designation" value={volunteerDesignation} onChange={(e) => setVolunteerDesignation(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="projectTitle">Company Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="projectTitle" name="projectTitle" placeholder="Your company name" value={volunteerCompanyName} onChange={(e) => setVolunteerCompanyName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="startDate">Start Date</label>
                        </div>
                        <div className="col-75">
                            <input type="date" id="startDate" name="startDate" placeholder="Your start date" value={volunteerStartDate} onChange={(e) => setVolunteerStartDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="endDate">End Date</label>
                        </div>
                        <div className="col-75">
                            <input type="date" id="endDate" name="endDate" placeholder="Your end date" value={volunteerEndDate} onChange={(e) => setVolunteerEndDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="city">City</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="description" name="description" placeholder="Volunteer city" value={volunteerCompanyCity} onChange={(e) => setVolunteerCompanyCity(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="country">Country</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="description" name="description" placeholder="Volunteer country" value={volunteerCompanyCountry} onChange={(e) => setVolunteerCompanyCountry(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="responsibilities">Responsibilities</label>
                        </div>
                        <div className="col-75">
                            <textarea type="text" id="description" name="description" placeholder="Volunteer responsibilities" onChange={(e) => changeVolunteerResponsibilities(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20" >
                            <i className="fa fa-plus" aria-hidden="true" style={{fontSize: "2rem", color: 'var(--secondary-color)'}} onClick={(e) => addVolunteers(e)}></i>
                        </div>
                    </div>


                    {/* HonorsAndAwards */}
                    <div className="row">
                        <div className="col-20">
                            <label for="honor">Honor & Awars</label>
                        </div>
                        <div className="col-75">
                            <textarea type="text" id="honor" name="honor" placeholder="Honor & Award"  onChange={(e) => changeHonorAndAwards(e.target.value)}/>
                        </div>
                    </div>


                    {/* Training */}
                    <h4>Training</h4>
                    {trainings?.map(training => {
                        const {title, institutionName, city, country, startedAt, endedAt, score} = training;
                        return (
                            <>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Title</span>
                                </div>
                                <div className='col-75'>
                                    <span>{title}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Institution Name</span>
                                </div>
                                <div className='col-75'>
                                    <span>{institutionName}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>City</span>
                                </div>
                                <div className='col-75'>
                                    <span>{city}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Country</span>
                                </div>
                                <div className='col-75'>
                                    <span>{country}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Start Date</span>
                                </div>
                                <div className='col-75'>
                                    <span>{startedAt}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>End Date</span>
                                </div>
                                <div className='col-75'>
                                    <span>{endedAt}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Score</span>
                                </div>
                                <div className='col-75'>
                                    <span>{score}</span>
                                </div>
                            </div>
                            </>
                        )
                    })}
                    <div className="row">
                        <div className="col-20">
                            <label for="institutionTitle">Title</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="institutionTitle" name="institutionTitle" placeholder="Your Title" value={trainingTitle} onChange={(e) => setTrainingTitle(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="institutionName">Institution Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="institutionName" name="institutionName" placeholder="Your institution name" value={trainingInstutionName} onChange={(e) => setTrainingInstutionName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="city">City</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="city" name="city" placeholder="Training city" value={trainingCity} onChange={(e) => setTrainingCity(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="country">Country</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="country" name="country" placeholder="Training country" value={trainingCountry} onChange={(e) => setTrainingCountry(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="startDate">Start Date</label>
                        </div>
                        <div className="col-75">
                            <input type="date" id="startDate" name="startDate" placeholder="Your start date" value={trainingStartDate} onChange={(e) => setTrainingStartDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="endDate">End Date</label>
                        </div>
                        <div className="col-75">
                            <input type="date" id="endDate" name="endDate" placeholder="Your end date" value={trainingEndDate} onChange={(e) => setTrainingEndDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="score">Score</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="score" name="score" placeholder="score" value={trainingScore} onChange={(e) => setTrainingScore(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20" >
                            <i className="fa fa-plus" aria-hidden="true" style={{fontSize: "2rem", color: 'var(--secondary-color)'}} onClick={(e) => addTraining(e)}></i>
                        </div>
                    </div>

                    {/* Certification */}
                    <h4>Certification</h4>
                    {certifications?.map(certification => {
                        const {title, institutionName, city, country, startedAt, endedAt, score} = certification;
                        return (
                            <>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Title</span>
                                </div>
                                <div className='col-75'>
                                    <span>{title}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Institution Name</span>
                                </div>
                                <div className='col-75'>
                                    <span>{institutionName}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>City</span>
                                </div>
                                <div className='col-75'>
                                    <span>{city}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Country</span>
                                </div>
                                <div className='col-75'>
                                    <span>{country}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Start Date</span>
                                </div>
                                <div className='col-75'>
                                    <span>{startedAt}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>End Date</span>
                                </div>
                                <div className='col-75'>
                                    <span>{endedAt}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Score</span>
                                </div>
                                <div className='col-75'>
                                    <span>{score}</span>
                                </div>
                            </div>
                            </>
                        )
                    })}
                    <div className="row">
                        <div className="col-20">
                            <label for="certificationTitle">Title</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="certificationTitle" name="certificationTitle" placeholder="Your Title" value={certificationTitle} onChange={(e) => setCertificationTitle(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="certificationName">certification Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="certificationName" name="certificationName" placeholder="Your certification name" value={certificationInstutionName} onChange={(e) => setCertificationInstutionName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="city">City</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="city" name="city" placeholder="Training city" value={certificationCity} onChange={(e) => setCertificationCity(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="country">Country</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="country" name="country" placeholder="Training country" value={certificationCountry} onChange={(e) => setCertificationCountry(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="startDate">Start Date</label>
                        </div>
                        <div className="col-75">
                            <input type="date" id="startDate" name="startDate" placeholder="Your start date" value={certificationStartDate} onChange={(e) => setCertificationStartDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="endDate">End Date</label>
                        </div>
                        <div className="col-75">
                            <input type="date" id="endDate" name="endDate" placeholder="Your end date" value={certificationEndDate} onChange={(e) => setCertificationEndDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="score">Score</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="score" name="score" placeholder="score" value={certificationScore} onChange={(e) => setCertificationScore(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20" >
                            <i className="fa fa-plus" aria-hidden="true" style={{fontSize: "2rem", color: 'var(--secondary-color)'}} onClick={(e) => addCertification(e)}></i>
                        </div>
                    </div>

                    {/* License */}
                    <h4>License</h4>
                    <div className="row">
                        <div className="col-20">
                            <label for="licenseName">License Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="licenseName" name="licenseName" placeholder="License Name" value={licenseName} onChange={(e) =>setLicenseName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="licenseNumber">License Number</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="licenseNumber" name="licenseNumber" placeholder="License Number" value={licenseNumber} onChange={(e) =>setLicenseNumber(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="licenseNumber">License Issuer</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="licenseNumber" name="licenseNumber" placeholder="License Issuer" value={licenseIssuer} onChange={(e) =>setLicenseIssuer(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="licenseValidity">Valid From</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="licenseValidity" name="licenseValidity" placeholder="License Valid From" value={licenseValidFrom} onChange={(e) =>setLicenseValidFrom(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="licenseValidity">Valid To</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="licenseValidity" name="licenseValidity" placeholder="License Valid To" value={licenseValidTo} onChange={(e) =>setLicenseValidTo(e.target.value)}/>
                        </div>
                    </div>




                    {/* Course */}
                    <h4>Course</h4>
                    {courses?.map(course => {
                        const {title, institutionName, city, country, startedAt, endedAt, score} = course;
                        return (
                            <>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Title</span>
                                </div>
                                <div className='col-75'>
                                    <span>{title}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Institution Name</span>
                                </div>
                                <div className='col-75'>
                                    <span>{institutionName}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>City</span>
                                </div>
                                <div className='col-75'>
                                    <span>{city}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Country</span>
                                </div>
                                <div className='col-75'>
                                    <span>{country}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Start Date</span>
                                </div>
                                <div className='col-75'>
                                    <span>{startedAt}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>End Date</span>
                                </div>
                                <div className='col-75'>
                                    <span>{endedAt}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Score</span>
                                </div>
                                <div className='col-75'>
                                    <span>{score}</span>
                                </div>
                            </div>
                            </>
                        )
                    })}
                    <div className="row">
                        <div className="col-20">
                            <label for="courseTitle">Title</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="courseTitle" name="courseTitle" placeholder="Your Title" value={courseTitle} onChange={(e) => setCourseTitle(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="courseName">course Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="courseName" name="courseName" placeholder="Your course name" value={courseInstutionName} onChange={(e) => setCourseInstutionName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="city">City</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="city" name="city" placeholder="Training city" value={courseCity} onChange={(e) => setCourseCity(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="country">Country</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="country" name="country" placeholder="Training country" value={courseCountry} onChange={(e) => setCourseCountry(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="startDate">Start Date</label>
                        </div>
                        <div className="col-75">
                            <input type="date" id="startDate" name="startDate" placeholder="Your start date" value={courseStartDate} onChange={(e) => setCourseStartDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="endDate">End Date</label>
                        </div>
                        <div className="col-75">
                            <input type="date" id="endDate" name="endDate" placeholder="Your end date" value={courseEndDate} onChange={(e) => setCourseEndDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="score">Score</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="score" name="score" placeholder="score" value={courseScore} onChange={(e) => setCourseScore(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20" >
                            <i className="fa fa-plus" aria-hidden="true" style={{fontSize: "2rem", color: 'var(--secondary-color)'}} onClick={(e) => addCourse(e)}></i>
                        </div>
                    </div>

                    {/* Patent */}
                    <h4>Patent</h4>
                    {patents?.map(patent => {
                        const {title, number, status, descriptions} = patent;
                        return (
                            <>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Title</span>
                                </div>
                                <div className='col-75'>
                                    <span>{title}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Number</span>
                                </div>
                                <div className='col-75'>
                                    <span>{number}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Validity</span>
                                </div>
                                <div className='col-75'>
                                    <span>{status}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Description</span>
                                </div>
                                <div className='col-75'>
                                    {descriptions.map(des => {
                                        return (
                                            <span>{des}</span>
                                        )
                                    })}
                                </div>
                            </div>
                            </>
                        )
                    })}
                    <div className="row">
                        <div className="col-20">
                            <label for="patentTitle">Patent Title</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="patentTitle" name="patentTitle" placeholder="your patent title" value={patentTitle} onChange={(e) =>setPatentTitle(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="patentNumber">Patent Number</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="patentNumber" name="patentNumber" placeholder="your patent number" value={patentNumber} onChange={(e) =>setPatentNumber(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="patentDescription">Patent Description</label>
                        </div>
                        <div className="col-75">
                            <textarea type="text" id="patentDescription" name="patentDescription" placeholder="your patent description" onChange={(e) => changePatentDescription(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="patentStatus">Patent Status</label>
                        </div>
                        <div className="col-75">
                            <select id="patentStatus" name="patentStatus" onChange={e => setPatentStatus(e.target.value)}>
                                <option value="" placeholder='please select the option'></option>
                                <option value="apllied">Applied</option>
                                <option value="approved">Approved</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20" >
                            <i className="fa fa-plus" aria-hidden="true" style={{fontSize: "2rem", color: 'var(--secondary-color)'}} onClick={(e) => addPatent(e)}></i>
                        </div>
                    </div>


                    {/* Publication */}
                    <h4>Publication</h4>
                    {publications?.map(publication => {
                        const {title, date, descriptions} = publication;
                        return (
                            <>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Title</span>
                                </div>
                                <div className='col-75'>
                                    <span>{title}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>date</span>
                                </div>
                                <div className='col-75'>
                                    <span>{date}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Description</span>
                                </div>
                                <div className='col-75'>
                                    {descriptions.map(des => {
                                        return (
                                            <span>{des}</span>
                                        )
                                    })}
                                </div>
                            </div>
                            </>
                    )})}
                    <div className="row">
                        <div className="col-20">
                            <label for="publicationName">Title</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="publicationName" name="publicationName" placeholder="Publication Name" value={publicationName} onChange={(e) =>setPublicationName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="publicationDate">Date</label>
                        </div>
                        <div className="col-75">
                            <input type="date" id="publicationDate" name="publicationDate" placeholder="Publication Date" value={publicationDate}  onChange={(e) => setPublictionDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="publicationDescription">Description</label>
                        </div>
                        <div className="col-75">
                            <textarea type="text" id="publicationDescription" name="publicationDescription" placeholder="Publication Description" onChange={(e) => changePublicationDescription(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20" >
                            <i className="fa fa-plus" aria-hidden="true" style={{fontSize: "2rem", color: 'var(--secondary-color)'}} onClick={(e) => addPublication(e)}></i>
                        </div>
                    </div>




                    {/* Workshop */}
                    <h4>Workshop</h4>
                    {workshops?.map(workshop => {
                        return (
                            <>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Designation</span>
                                </div>
                                <div className='col-75'>
                                    <span>{workshop.designation}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Company Name</span>
                                </div>
                                <div className='col-75'>
                                    <span>{workshop.companyName}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Start Date</span>
                                </div>
                                <div className='col-75'>
                                    <span>{workshop.startedAt}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>End Date</span>
                                </div>
                                <div className='col-75'>
                                    <span>{workshop.endedAt}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Company City</span>
                                </div>
                                <div className='col-75'>
                                    <span>{workshop.city}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Company Country</span>
                                </div>
                                <div className='col-75'>
                                    <span>{workshop.country}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Responsibilities</span>
                                </div>
                                <div className='col-75'>
                                    {workshop.responsibilities.map(responsibility => {
                                        return (
                                            <span>{responsibility}</span>
                                        )
                                    })}
                                </div>
                            </div>
                            
                            </>
                        )
                    })}
                    <div className="row">
                        <div className="col-20">
                            <label for="projectNumber">Designation</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="projectNumber" name="projectNumber" placeholder="Your designation" value={workshopDesignation} onChange={(e) => setWorkshopDesignation(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="projectTitle">Company Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="projectTitle" name="projectTitle" placeholder="Your company name" value={workshopCompanyName} onChange={(e) => setWorkshopCompanyName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="startDate">Start Date</label>
                        </div>
                        <div className="col-75">
                            <input type="date" id="startDate" name="startDate" placeholder="Your start date" value={workshopStartDate} onChange={(e) => setWorkshopStartDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="endDate">End Date</label>
                        </div>
                        <div className="col-75">
                            <input type="date" id="endDate" name="endDate" placeholder="Your end date" value={workshopEndDate} onChange={(e) => setWorkshopEndDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="city">City</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="description" name="description" placeholder="workshop city" value={workshopCompanyCity} onChange={(e) => setWorkshopCompanyCity(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="country">Country</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="description" name="description" placeholder="workshop country" value={workshopCompanyCountry} onChange={(e) => setWorkshopCompanyCountry(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="responsibilities">Responsibilities</label>
                        </div>
                        <div className="col-75">
                            <textarea type="text" id="description" name="description" placeholder="workshop responsibilities" onChange={(e) => changeWorkshopResponsibilities(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20" >
                            <i className="fa fa-plus" aria-hidden="true" style={{fontSize: "2rem", color: 'var(--secondary-color)'}} onClick={(e) => addWorkshops(e)}></i>
                        </div>
                    </div>



                    {/* Reference */}
                    <h4>Reference</h4>
                    {references?.map(reference => {
                        const {name, designation, company, email} = reference;
                        return (
                            <>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Name</span>
                                </div>
                                <div className='col-75'>
                                    <span>{name}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Designation</span>
                                </div>
                                <div className='col-75'>
                                    <span>{designation}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Company</span>
                                </div>
                                <div className='col-75'>
                                    <span>{company}</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-20'>
                                    <span>Email</span>
                                </div>
                                <div className='col-75'>
                                    <span>{email}</span>
                                </div>
                            </div>
                            </>
                        )
                    })}
                    <div className="row">
                        <div className="col-20">
                            <label for="referenceName">Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="referenceName" name="referenceName" placeholder="Your reference name" value={referenceName} onChange={(e) => setReferenceName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="referenceDesignation">Designation</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="referenceDesignation" name="referenceDesignation" placeholder="Designation" value={referenceDesignation} onChange={(e) => setReferenceDesignation(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="referenceCompany">Company</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="referenceCompany" name="referenceCompany" placeholder="company" value={referenceCompany} onChange={(e) => setReferenceCompany(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="referenceEmail">Email</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="referenceEmail" name="referenceEmail" placeholder="email" value={referenceEmail} onChange={(e) => setReferenceEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20" >
                            <i className="fa fa-plus" aria-hidden="true" style={{fontSize: "2rem", color: 'var(--secondary-color)'}} onClick={(e) => addReference(e)}></i>
                        </div>
                    </div>

                    {/* Personal Details */}
                    <h4>Personal Details</h4>
                    <div className="row">
                        <div className="col-20">
                            <label for="languageKnown">Languages Known</label>
                        </div>
                        <div className="col-75">
                            <textarea type="text" id="languageKnown" name="languageKnown" placeholder="known languages" onChange={(e) => changeknownLanguages(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="dateOfBirth">Date Of Birth</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="dateOfBirth" name="dateOfBirth" placeholder="Date Of Birth" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="nationality">Nationality</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="nationality" name="nationality" placeholder="Nationality" value={nationality} onChange={e => setNationality(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="passport">Passport</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="passport" name="passport" placeholder="Passport" value={passport} onChange={(e) =>setPassport(e.target.value)}/>
                        </div>
                    </div>


                    <div className="row">
                        <button>Submit</button>
                    </div>
                </form>
        </div>
     );
}
 
export default ResumeCreate;