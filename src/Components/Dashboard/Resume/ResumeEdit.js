import axios from 'axios';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../StyleSheets/dashboard.css'

const ResumeEdit = () => {

    const [enter, setEnter] = useState("");

    const {id} = useParams();
    const resumeId = id;

    const navigate = useNavigate();

    useEffect(() => {
        console.log({id});
        getResume()
    }, [])

    // Contact
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [linkedInId, setLinkedInId] = useState("");

    // Headline
    const [headline, setHeadline] = useState("");

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
    const [projectDescription, setProjectDescriptions] = useState([]);
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

    const getResume = async() => {
         try {
            const {data} = await axios.get(`${process.env.REACT_APP_API}get-unique-resume/${resumeId}`)
            console.log({data});
            if(data.success) {
                console.log({resume: data.resume})
                // Contact
                let cont = data.resume.contact;
                setFirstName(cont.firstName);
                setLastName(cont.lastName);
                setEmail(cont.email);
                setPhone(cont.phone);
                setAddress(cont.address);
                setLinkedInId(cont.linkedinId)
                // Headline
                setHeadline(data.resume.headline)
                // Summary
                let summ = data.resume.summary;
                setSummary(summ)
                // Skills
                let ski = data.resume.skills;
                setSkills(ski)
                // Tech Skills
                let tSki = data.resume.techSkills;
                setTechSkills(tSki)
                // console.log(tSki);
                // Experiences
                let exp = data.resume.experiences;
                setExperiences(exp)
                // Internship
                let interns = data.resume.internships;
                setInternships(interns);
                // Educations
                let edus = data.resume.educations;
                setEducations(edus);
                // Projects
                let pros = data.resume.projects;
                setProjects(pros);
                // Interest
                setInterest(data.resume.interest)
                // Volunteer Experience
                let volunteerExp = data.resume.volunteerExperiences;
                setVolunteerExperiences(volunteerExp);
                // Honors And Awards
                let honAndAw = data.resume.honorsAndAwards;
                setHonorsAndAwards(honAndAw);
                // Trainings
                let trains = data.resume.trainings;
                setTrainings(trains);
                // Certification
                let certs = data.resume.certifications;
                setCertifications(certs);
                // License
                let licen = data.resume.license;
                console.log(licen);
                setLicenseName(licen.name);
                setLicenseNumber(licen.number);
                setLicenseValidFrom(licen.validFrom);
                setLicenseIssuer(licen.issuer);
                setLicenseValidTo(licen.validTill);
                // Course
                let cours = data.resume.courses;
                setCourses(cours);
                console.log("co log");
                // Patent
                let patens = data.resume.patents;
                setPatents(patens);
                // Publicatons
                let publicas = data.resume.publications;
                setPublications(publicas)
                // Workshop
                let wshops = data.resume.workshops;
                setWorkshops(wshops);
                // References
                let referens = data.resume.references;
                setReferences(referens);
                // Personnal Details
                let perDetails = data.resume.personalDetails;
                setLanguageKnown(perDetails.languageKnown);
                setDateOfBirth(perDetails.dateOfBirth);
                setNationality(perDetails.nationality);
                setPassport(perDetails.passport);
            }
        } catch (error) {
            console.log(error)
        }
    }


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
            setProjects(prev => [...prev , {number: projectNumber, title: projectTitle, startedAt: projectStartDate, endedAt: projectEndDate, descriptions: projectDescription}]);
            setProjectNumber('');
            setProjectTitle('');
            setProjectStartDate('');
            setProjectEndDate('');
            setProjectDescriptions([]);
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
            setReferenceCompany("");
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
            projects.push({number: projectNumber, title: projectTitle, startedAt: projectStartDate, endedAt: projectEndDate, descriptionss: projectDescription});
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
        if(patentTitle != '' && patentNumber != "" && patentStatus != '', patentDescription != "") {
            patents.push({title: patentTitle, number: patentNumber, status: patentStatus, descriptions: patentDescription});
        }
        if(publicationName != '' && publicationDate != "" && publicationDescription!= '') {
            publications.push({title: publicationName, date: publicationDate, descriptions: publicationDescription});
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
                linkedinId: linkedInId
            },
            headline,
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
                validTill: licenseValidTo,
                issuer: licenseIssuer
            },
            courses,
            patents,
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
            const {data} = await axios.put(`${process.env.REACT_APP_API}update-resume/${resumeId}`, d);
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
    const changeProjectDescriptions = (val) => {
        let projectDescriptions = val.split("\n")
        setProjectDescriptions(projectDescriptions);
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
    
    const experienceHandleChange = (e, index) => {
        let data = [...experiences];
        console.log({data});
        if(e.target.name == "responsibilities") {
            let arr = e.target.value.split("\n");
            data[index][e.target.name] = arr; 
        } else {
            data[index][e.target.name] = e.target.value;
        }
        setExperiences(data)    
    }

    const internshipHandleChange = (e, index) => {
        let data = [...internships];
        console.log({data});
        if(e.target.name == "responsibilities") {
            let arr = e.target.value.split("\n");
            data[index][e.target.name] = arr; 
        } else {
            data[index][e.target.name] = e.target.value;
        }
        setInternships(data)    
    }

    const educationHandleChange = (e, index) => {
        let data = [...educations];
        data[index][e.target.name] = e.target.value;
        console.log({data})
        setEducations(data)
    }

    const projectHandleChange = (e, index) => {
        let data = [...projects];
        if(e.target.name == "descriptions") {
            let arr = e.target.value.split("\n");
            data[index][e.target.name] = arr; 
        } else {
            data[index][e.target.name] = e.target.value;
        }
        setProjects(data)
    }

    const volunteerHandleChange = (e, index) => {
        let data = [...volunteerExperiences];
        console.log({data});
        if(e.target.name == "responsibilities") {
            let arr = e.target.value.split("\n");
            data[index][e.target.name] = arr; 
        } else {
            data[index][e.target.name] = e.target.value;
        }
        setVolunteerExperiences(data)    
    }

    const trainingChangeHandler = (e, index) => {
        let data = [...trainings];
        data[index][e.target.name] = e.target.value;
        console.log({data});
        setTrainings(data)
    }
    const certificationChangeHandler = (e, index) => {
        let data = [...certifications];
        data[index][e.target.name] = e.target.value;
        console.log({data});
        setCertifications(data)
    }
    const courseChangeHandler = (e, index) => {
        let data = [...courses];
        data[index][e.target.name] = e.target.value;
        console.log({data});
        setCourses(data);
    }
    const patentHandleChange = (e, index) => {
        let data = [...patents];
        console.log({data});
        console.log(e.target.value);
        if(e.target.name == "descriptions") {
            let arr = e.target.value.split("\n");
            data[index][e.target.name] = arr; 
        } else {
            data[index][e.target.name] = e.target.value;
        }
        setPatents(data)    
    }
    const publicationHandleChange = (e, index) => {
        let data = [...publications];
        console.log({data});
        if(e.target.name == "descriptions") {
            let arr = e.target.value.split("\n");
            data[index][e.target.name] = arr; 
        } else {
            data[index][e.target.name] = e.target.value;
        }
        setPublications(data)    
    }
    const workshopHandleChange = (e, index) => {
        let data = [...workshops];
        console.log({data});
        if(e.target.name == "responsibilities") {
            let arr = e.target.value.split("\n");
            data[index][e.target.name] = arr; 
        } else {
            data[index][e.target.name] = e.target.value;
        }
        setWorkshops(data)    
    }
    const referenceHandleChange = (e, index) => {
        let data = [...references];
        data[index][e.target.name] = e.target.value;
        console.log({data});
        setReferences(data);   
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
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="lname">Last Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                    </div>  
                    <div className="row">
                        <div className="col-20">
                            <label for="email">Email</label>
                        </div>
                        <div className="col-75">
                            <input type="email" id="email" name="email" placeholder="Your email.." value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="phone">Phone</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="phone" name="phone" placeholder="Your phone.." value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="address">Address</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="address" name="address" placeholder="Your address.." value={address} onChange={(e) => setAddress(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="Linked Id">Linkedin Id</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="linkedInId" name="linkedInId" placeholder="Your linkedin id.." value={linkedInId} onChange={(e) => setLinkedInId(e.target.value)}/>
                        </div>
                    </div>
                    
                    {/* Headline */}
                    <div className="row">
                        <div className="col-20">
                            <label for="summary">Headline</label>
                        </div>
                        <div className="col-75">
                            <textarea type="text" id="summary" name="headline" placeholder="Your headline" value={headline} onChange={(e) => setHeadline(e.target.value)}/>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="row">
                        <div className="col-20">
                            <label for="summary">Summary</label>
                        </div>
                        <div className="col-75">
                            <textarea type="text" id="summary" name="summary" placeholder="Your summary" value={summary.join('\n')} onChange={(e) => changeSummary(e.target.value)}/>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="row">
                        <div className="col-20">
                            <label for="skills">Skills</label>
                        </div>
                        <div className="col-75">
                            <textarea type="text" id="skills" name="skills" placeholder="Your skills" value={skills?.join('\n')} onChange={(e) => changeSkill(e.target.value)}/>
                        </div>
                    </div>

                    {/* Tech Skills */}
                    <div className="row">
                        <div className="col-20">
                            <label for="techSkills">Tech Skills</label>
                        </div>
                        <div className="col-75">
                            <textarea type="text" id="techSkills" name="techSkills" placeholder="Your techSkills" value={techSkills?.join('\n')} onChange={(e) => changeTechSkill(e.target.value)}/>
                        </div>
                    </div>

                    {/* Experience */}
                    <h4>Experience</h4>
                    {experiences.map((experience, index) => {
                        return (
                            <span key={index}>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="designation">Designation</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="designation" name="designation" placeholder="Your designation" value={experience.designation} onChange={(e) => experienceHandleChange(e, index)}/>
                                    </div>
                                 </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="companyName">Company Name</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="companyName" name="companyName" placeholder="Your company name" value={experience.companyName} onChange={(e) => experienceHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="startedAt">Start Date</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="date" id="startDate" name="startedAt" placeholder="Your start date" value={experience.startedAt} onChange={(e) => experienceHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="endDate">End Date</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="date" id="endedAt" name="endedAt" placeholder="Your end date" value={experience.endedAt} onChange={(e) => experienceHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="companyCity">Company City</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="companyCity" name="city" placeholder="Your company city" value={experience.city} onChange={(e) => experienceHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="companyCountry">Company Country</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="companyCountry" name="country" placeholder="Your country" value={experience.country} onChange={(e) => experienceHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="responsibilities">Responsibilities</label>
                                    </div>
                                    <div className="col-75">
                                        <textarea type="text" id="responsibilities" name="responsibilities" placeholder="Your" value={experience?.responsibilities?.join('\n')} onChange={(e) => experienceHandleChange(e, index)}/>
                                    </div>
                                </div>
                            </span>
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
                    {internships.map((internship, index) => {
                        return (
                            <span key={index}>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="designation">Designation</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="designation" name="designation" placeholder="Your designation" value={internship.designation} onChange={(e) => internshipHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="companyName">Company Name</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="companyName" name="companyName" placeholder="Your company name" value={internship.companyName} onChange={(e) => internshipHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="startDate">Start Date</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="date" id="startDate" name="startedAt" placeholder="Your start date" value={internship.startedAt} onChange={(e) => internshipHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="endDate">End Date</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="date" id="endDate" name="endedAt" placeholder="Your end date" value={internship.endedAt} onChange={(e) => internshipHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="companyCity">Company City</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="city" name="city" placeholder="Your company city" value={internship.city} onChange={(e) => internshipHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="companyCountry">Company Country</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="companyCountry" name="country" placeholder="Your country" value={internship.country} onChange={(e) => internshipHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="responsibilities">Responsibilities</label>
                                    </div>
                                    <div className="col-75">
                                        <textarea type="text" id="responsibilities" name="responsibilities" placeholder="Your responsibilities" value={internship.responsibilities?.join('\n')} onChange={(e) => internshipHandleChange(e, index)}/>
                                    </div>
                                </div>
                            </span>
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
                    {educations.map((education, index) => {
                        return (
                            <span key={index}>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="degree">Degree</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="degree" name="degreeName" placeholder="Your degree" value={education.degreeName} onChange={(e) => educationHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="companyName">College/University Name</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="companyName" name="collegeName" placeholder="Your college name" value={education.collegeName} onChange={(e) => educationHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="startDate">Start Date</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="date" id="startDate" name="startedAt" placeholder="Your start date" value={education.startedAt} onChange={(e) => educationHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="endDate">End Date</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="date" id="endDate" name="endedAt" placeholder="Your end date" value={education.endedAt} onChange={(e) => educationHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="collegeCity">College City</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="collegeCity" name="city" placeholder="Your college city" value={education.city} onChange={(e) => educationHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="companyCountry">College Country</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="companyCountry" name="country" placeholder="Your country" value={education.country} onChange={(e) => educationHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="score">Score</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="score" name="score" placeholder="Your score" value={education.score} onChange={(e) => educationHandleChange(e, index)}/>
                                    </div>
                                </div>
                            </span>
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
                            <input type="date" id="startDate" name="startedAt" placeholder="Your start date" value={collegeStartDate} onChange={(e) => setCollegeStartDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="endDate">End Date</label>
                        </div>
                        <div className="col-75">
                            <input type="date" id="endDate" name="endDatedAt" placeholder="Your end date" value={collegeEndDate} onChange={(e) => setCollegeEndDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="collegeCity">College City</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="collegeCity" name="city" placeholder="Your college city" value={collegeCity} onChange={(e) => setCollegeCity(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="companyCountry">College Country</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="companyCountry" name="country" placeholder="Your country" value={collegeCountry} onChange={(e) => setCollegeCountry(e.target.value)}/>
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
                            <textarea type="text" id="score" name="score" placeholder="Your interest" value={interest.join('\n')} onChange={(e) => changeInterest(e.target.value)}/>
                        </div>
                    </div>



                    {/* Projects */}
                    <h4>Project</h4>
                    {projects.map((project, index) => {
                        return (
                            <span>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="projectNumber">Project Number</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="projectNumber" name="number" placeholder="Your Project Number" value={project.number} onChange={(e) => projectHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="projectTitle">Project Title</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="projectTitle" name="title" placeholder="Your project title" value={project.title} onChange={(e) => projectHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="startDate">Start Date</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="date" id="startDate" name="startedAt" placeholder="Your start date" value={project.startedAt} onChange={(e) => projectHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="endDate">End Date</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="date" id="endDate" name="endedAt" placeholder="Your end date" value={project.endedAt} onChange={(e) => projectHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="description">Description</label>
                                    </div>
                                    <div className="col-75">
                                        <textarea type="text" id="description" name="descriptions" placeholder="Your project description" value={project.descriptions.join('\n')} onChange={(e) => projectHandleChange(e, index)}/>
                                    </div>
                                </div>
                            </span>
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
                            <input type="text" id="description" name="description" placeholder="Your project description" onChange={(e) => changeProjectDescriptions(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20" >
                            <i className="fa fa-plus" aria-hidden="true" style={{fontSize: "2rem", color: 'var(--secondary-color)'}} onClick={(e) => addProject(e)}></i>
                        </div>
                    </div> 




                    {/* Volunteer Experience */}
                    <h4>Volunteer Experience</h4>
                    {volunteerExperiences?.map((volunteer, index) => {
                        return (
                            <span key={index}>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="projectNumber">Designation</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="projectNumber" name="designation" placeholder="Your designation" value={volunteer.designation} onChange={(e) => volunteerHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="projectTitle">Company Name</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="projectTitle" name="companyName" placeholder="Your company name" value={volunteer.companyName} onChange={(e) => volunteerHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="startDate">Start Date</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="date" id="startDate" name="startedAt" placeholder="Your start date" value={volunteer.startedAt} onChange={(e) => volunteerHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="endDate">End Date</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="date" id="endDate" name="endedAt" placeholder="Your end date" value={volunteer.endedAt} onChange={(e) => volunteerHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="city">City</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="description" name="city" placeholder="Volunteer city" value={volunteer.city} onChange={(e) => volunteerHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="country">Country</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="description" name="country" placeholder="Volunteer country" value={volunteer.country} onChange={(e) => volunteerHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="responsibilities">Responsibilities</label>
                                    </div>
                                    <div className="col-75">
                                        <textarea type="text" id="description" name="responsibilities" placeholder="Volunteer responsibilities" value={volunteer.responsibilities.join('\n')} onChange={(e) => volunteerHandleChange(e, index)}/>
                                    </div>
                                </div>
                            </span>
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
                            <textarea type="text" id="honor" name="honor" placeholder="Honor & Award" value={honorsAndAwards.join('\n')}  onChange={(e) => changeHonorAndAwards(e.target.value)}/>
                        </div>
                    </div>


                    {/* Training */}
                    <h4>Training</h4>
                    {trainings?.map((training, index) => {
                        const {title, institutionName, city, country, startedAt, endedAt, score} = training;
                        return (
                            <span key={index}>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="institutionTitle">Title</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="institutionTitle" name="title" placeholder="Your Title" value={title} onChange={(e) => trainingChangeHandler(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="institutionName">Institution Name</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="institutionName" name="institutionName" placeholder="Your institution name" value={institutionName} onChange={(e) => trainingChangeHandler(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="city">City</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="city" name="city" placeholder="Training city" value={city} onChange={(e) => trainingChangeHandler(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="country">Country</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="country" name="country" placeholder="Training country" value={country} onChange={(e) => trainingChangeHandler(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="startDate">Start Date</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="date" id="startDate" name="startedAt" placeholder="Your start date" value={startedAt} onChange={(e) => trainingChangeHandler(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="endDate">End Date</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="date" id="endDate" name="endedAt" placeholder="Your end date" value={endedAt} onChange={(e) => trainingChangeHandler(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="score">Score</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="score" name="score" placeholder="score" value={score} onChange={(e) => trainingChangeHandler(e, index)}/>
                                    </div>
                                </div>
                            </span>
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
                    {certifications?.map((certification, index )=> {
                        const {title, institutionName, city, country, startedAt, endedAt, score} = certification;
                        return (
                            <span key={index}>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="certificationTitle">Title</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="certificationTitle" name="title" placeholder="Your Title" value={title} onChange={(e) => certificationChangeHandler(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="certificationName">Institution Name</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="certificationName" name="institutionName" placeholder="Institution Name" value={institutionName} onChange={(e) => certificationChangeHandler(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="city">City</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="city" name="city" placeholder="Institution city" value={city} onChange={(e) => certificationChangeHandler(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="country">Country</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="country" name="country" placeholder="Institution country" value={country} onChange={(e) => certificationChangeHandler(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="startDate">Start Date</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="date" id="startDate" name="startedAt" placeholder="Your start date" value={startedAt} onChange={(e) => certificationChangeHandler(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="endDate">End Date</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="date" id="endDate" name="endedAt" placeholder="Your end date" value={endedAt} onChange={(e) => certificationChangeHandler(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="score">Score</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="score" name="score" placeholder="score" value={score} onChange={(e) => certificationChangeHandler(e, index)}/>
                                    </div>
                                </div>
                            </span>
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
                            <input type="date" id="licenseValidity" name="licenseValidity" placeholder="License Valid From" defaultValue={licenseValidFrom} onChange={(e) =>setLicenseValidFrom(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="licenseValidity">Valid To</label>
                        </div>
                        <div className="col-75">
                            <input type="date" id="licenseValidity" name="licenseValidity" placeholder="License Valid To" defaultValue={licenseValidTo} onChange={(e) =>setLicenseValidTo(e.target.value)}/>
                        </div>
                    </div>




                    {/* Course */}
                    <h4>Course</h4>
                    {courses?.map((course, index) => {
                        const {title, institutionName, city, country, startedAt, endedAt, score} = course;
                        return (
                            <span key={index}>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="certificationTitle">Title</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="certificationTitle" name="title" placeholder="Your Title" value={title} onChange={(e) => courseChangeHandler(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="certificationName">Institution Name</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="certificationName" name="institutionName" placeholder="Institution Name" value={institutionName} onChange={(e) => courseChangeHandler(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="city">City</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="city" name="city" placeholder="Institution city" value={city} onChange={(e) => courseChangeHandler(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="country">Country</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="country" name="country" placeholder="Institution country" value={country} onChange={(e) => courseChangeHandler(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="startDate">Start Date</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="date" id="startDate" name="startedAt" placeholder="Your start date" value={startedAt} onChange={(e) => courseChangeHandler(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="endDate">End Date</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="date" id="endDate" name="endedAt" placeholder="Your end date" value={endedAt} onChange={(e) => courseChangeHandler(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="score">Score</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="score" name="score" placeholder="score" value={score} onChange={(e) => courseChangeHandler(e, index)}/>
                                    </div>
                                </div>
                            </span>
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
                            <label for="institutionName">course Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="institutionName" name="institutionName" placeholder="Your Institution Name" value={courseInstutionName} onChange={(e) => setCourseInstutionName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="city">City</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="city" name="city" placeholder="Course City" value={courseCity} onChange={(e) => setCourseCity(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="country">Country</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="country" name="country" placeholder="Course Country  " value={courseCountry} onChange={(e) => setCourseCountry(e.target.value)}/>
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
                    {patents?.map((patent, index) => {
                        const {title, number, status, descriptions} = patent;
                        return (
                            <span key={index}>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="certificationTitle">Title</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="certificationTitle" name="title" placeholder="Patent Title" value={title} onChange={(e) => patentHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="number">Institution Name</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="certificationName" name="number" placeholder="Patent Number" value={number} onChange={(e) => patentHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="decription">Description</label>
                                    </div>
                                    <div className="col-75">
                                        <textarea type="text" id="description" name="descriptions" placeholder="Patent Descriptions" value={descriptions.join('\n')} onChange={(e) => patentHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="patentStatus">Patent Status</label>
                                    </div>
                                    <div className="col-75">
                                        <select id="patentStatus" name="status" onChange={e => patentHandleChange(e, index)}>
                                            <option value={status} placeholder='please select the option'>{status}</option>
                                            {status != "Applied" && <option value="Apllied">Applied</option>}
                                            {status != "Approved" && <option value="Approved">Approved</option>}
                                        </select>
                                    </div>
                                    </div>
                            </span>
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
                    {publications?.map((publication, index) => {
                        const {title, date, descriptions} = publication;
                        return (
                            <span key={index}>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="certificationTitle">Title</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="certificationTitle" name="title" placeholder="Publication Title" value={title} onChange={(e) => publicationHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="number">Institution Name</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="date" id="certificationName" name="date" placeholder="publication Date" value={date} onChange={(e) => publicationHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="decription">Description</label>
                                    </div>
                                    <div className="col-75">
                                        <textarea type="text" id="description" name="descriptions" placeholder="Descriptions" value={descriptions.join('\n')} onChange={(e) => publicationHandleChange(e, index)}/>
                                    </div>
                                </div>
                            </span>
                        )
                    })}
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
                            <input type="date" id="publicationDate" name="publicationDate" placeholder="Publication Date" value={publicationDate} onChange={(e) =>setPublictionDate(e.target.value)}/>
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
                    {workshops?.map((workshop, index) => {
                        return (
                            <span key={index}>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="projectNumber">Designation</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="projectNumber" name="designation" placeholder="Your designation" value={workshop.designation} onChange={(e) => workshopHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="projectTitle">Company Name</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="projectTitle" name="companyName" placeholder="Your company name" value={workshop.companyName} onChange={(e) => workshopHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="startDate">Start Date</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="date" id="startDate" name="startedAt" placeholder="Your start date" value={workshop.startedAt} onChange={(e) => workshopHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="endDate">End Date</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="date" id="endDate" name="endedAt" placeholder="Your end date" value={workshop.endedAt} onChange={(e) => workshopHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="city">City</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="description" name="city" placeholder="Workshop City" value={workshop.city} onChange={(e) => workshopHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="country">Country</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="description" name="country" placeholder="Workshop Country" value={workshop.country} onChange={(e) => workshopHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="responsibilities">Responsibilities</label>
                                    </div>
                                    <div className="col-75">
                                        <textarea type="text" id="description" name="responsibilities" placeholder="Workshop Responsibilities" value={workshop.responsibilities.join('\n')} onChange={(e) => workshopHandleChange(e, index)}/>
                                    </div>
                                </div>
                            </span>
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
                    {references?.map((reference, index) => {
                        const {name, designation, company, email} = reference;
                        return (
                            <span key={index}>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="certificationTitle">Name</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="certificationTitle" name="name" placeholder="Reference Name" value={name} onChange={(e) => referenceHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="certificationName">Designation</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="certificationName" name="designations" placeholder="Designation Name" value={designation} onChange={(e) => referenceHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="city">City</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="city" name="company" placeholder="Company Name" value={company} onChange={(e) => referenceHandleChange(e, index)}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label for="country">Country</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="country" name="email" placeholder="Email" value={email} onChange={(e) => referenceHandleChange(e, index)}/>
                                    </div>
                                </div>
                            </span>
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
                            <textarea type="text" id="languageKnown" name="languageKnown" placeholder="known languages" value={languageKnown.join('\n')} onChange={(e) => changeknownLanguages(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-20">
                            <label for="dateOfBirth">Date Of Birth</label>
                        </div>
                        <div className="col-75">
                            <input type="date" id="dateOfBirth" name="dateOfBirth" placeholder="Date Of Birth" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)}/>
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
 
export default ResumeEdit;