import axios from "axios";
import { forwardRef, useEffect, useState } from "react";

const ResumeComponent = forwardRef((props, ref) => {
    const [resumeData, setResumeData] = useState({});
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                        ]

    useEffect(() => {
        getReumeById();
        console.log({resumeData})
        console.log(resumeData?.contact?.firstName)
    }, [])

    const getReumeById = async() => {
        console.log(props.id);
        try {
            const {data} = await axios.get(`${process.env.REACT_APP_API}get-unique-resume/${props.id}`)
            console.log(data);
            if(data.success) {
                setResumeData(data.resume);
            }
        } catch (error) {
            console.log(error)
        }
    };

    return ( 
        <div className="ResumeComponent" ref={ref}>
            <h1 className="resume-name">{resumeData?.contact?.firstName} {" "} {resumeData?.contact?.lastName}</h1>
            <h3 className="resume-headline">{resumeData.headline}</h3>
            <ul className="contact-details">
                {resumeData?.contact?.email && <li>{resumeData?.contact?.email}</li>}
                {resumeData?.contact?.phone &&<li>{resumeData?.contact?.phone}</li>}
                {resumeData?.contact?.linkedinId &&<li>{resumeData?.contact?.linkedinId}</li>}
            </ul>
            <h3 className="resume-header">Summary</h3>
            <hr />
            <p className="resume-summary-content">{resumeData?.summary}</p>
            {resumeData?.skills?.length > 0 &&  <><h3 className="resume-header">Skills</h3><hr /></>}
            {resumeData?.skills?.map(skill => {
                return (
                    <div className="resume-skills">
                        <div className="resume-skill" key={skill}>{skill}</div>
                    </div>
                )
            })}
            {resumeData?.techSkills?.length > 0 && <><h3 className="resume-header">Technical Proficiences</h3><hr /></>}
            
            {resumeData?.techSkills?.map(techSkill => {
                return (
                    <div className="resume-tech-skills">
                        <div className="resumetech-skill" key={techSkill}>{techSkill}</div>
                    </div>
                )
            })}
            
            {/* Experience */}
            <h3 className="resume-header">Experience</h3>
            <hr />
            <div>
                {resumeData?.experiences?.map(experience => {
                    let startedDate = experience.startedAt;
                    let startedDateArr = startedDate.split('-');
                    let endedDate = experience.endedAt;
                    let endedDateArr = endedDate.split('-');
                    console.log(startedDateArr[1]);
                    return (
                        <div className="resume-sub-details">
                            <ul>
                            {experience.designation && <li>{experience.designation}</li>}
                                {experience.startedAt && <li>{monthNames[Number(startedDateArr[1]) - 1]} {" "}{startedDateArr[0]} to {monthNames[Number(endedDateArr[1]) - 1]} {" "}{endedDateArr[0]}</li>}
                            </ul>
                            <ul>
                                {experience.companyNam && <li>{experience.companyName}</li>}
                                {experience.city && <li>{experience.city} {" "} {experience.country}</li>}
                            </ul>
                            <ul className="responsibilities">
                                {experience?.responsibilities?.map(responsibility => {
                                    return (
                                        <li className="responsibilty">{responsibility}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>

            {/* Volunteer */}
            <h3 className="resume-header">Volunteer Experience</h3>
            <hr />
            <div>
                {resumeData?.volunteerExperiences?.map(volunteerExperience => {
                    let startedDate = volunteerExperience.startedAt;
                    let startedDateArr = startedDate.split('-');
                    let endedDate = volunteerExperience.endedAt;
                    let endedDateArr = endedDate.split('-');
                    return (
                        <div className="resume-sub-details">
                            <ul>
                            {volunteerExperience.designation &&<li>{volunteerExperience.designation}</li>}
                                {volunteerExperience.startedAt &&<li>{monthNames[Number(startedDateArr[1]) - 1]} {" "}{startedDateArr[0]} to {monthNames[Number(endedDateArr[1]) - 1]} {" "}{endedDateArr[0]}</li>}
                            </ul>
                            <ul>
                            {volunteerExperience.companyName &&<li>{volunteerExperience.companyName}</li>}
                            {volunteerExperience.city &&<li>{volunteerExperience.city} {" "} {volunteerExperience.country}</li>}
                            </ul>
                            <ul className="responsibilities">
                                {volunteerExperience?.responsibilities?.map(responsibility => {
                                    return (
                                        <li className="responsibilty">{responsibility}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>

            {/* Workshop */}
            <h3 className="resume-header">Workshop</h3>
            <hr />
            <div>
                {resumeData?.workshops?.map(workshop => {
                    let startedDate = workshop.startedAt;
                    let startedDateArr = startedDate.split('-');
                    let endedDate = workshop.endedAt;
                    let endedDateArr = endedDate.split('-');
                    return (
                        <div className="resume-sub-details">
                            <ul>
                                <li>{workshop.designation}</li>
                                <li>{monthNames[Number(startedDateArr[1]) - 1]} {" "}{startedDateArr[0]} to {monthNames[Number(endedDateArr[1]) - 1]} {" "}{endedDateArr[0]}</li>
                            </ul>
                            <ul>
                                <li>{workshop.companyName}</li>
                                <li>{workshop.city} {" "} {workshop.country}</li>
                            </ul>
                            <ul className="responsibilities">
                                {workshop?.responsibilities?.map(responsibility => {
                                    return (
                                        <li className="responsibilty">{responsibility}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
            
            {/* Internship */}
            <h3 className="resume-header">Internship</h3>
            <hr />
            <div>
                {resumeData?.internships?.map(internship => {
                    let startedDate = internship.startedAt;
                    let startedDateArr = startedDate.split('-');
                    let endedDate = internship.endedAt;
                    let endedDateArr = endedDate.split('-');
                    console.log(startedDateArr[1]);
                    return (
                        <div className="resume-sub-details">
                            <ul>
                            {internship.designation && <li>{internship.designation}</li>}
                                {internship.startedAt  && <li>{monthNames[Number(startedDateArr[1]) - 1]} {" "}{startedDateArr[0]} to {monthNames[Number(endedDateArr[1]) - 1]} {" "}{endedDateArr[0]}</li>}
                            </ul>
                            <ul>
                            {internship.companyName && <li>{internship.companyName}</li>}
                            {internship.city && <li>{internship.city} {" "} {internship.country}</li>}
                            </ul>
                            <ul className="responsibilities">
                                {internship?.responsibilities?.map(responsibility => {
                                    return (
                                        <li className="responsibilty">{responsibility}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>

            {/* Honor & Awards */}
            <h3 className="resume-header">Honor & Awards</h3>
            <hr />
            <div>
                <div className="resume-sub-details">
                    <ul className="responsibilities">
                        {resumeData?.honorsAndAwards?.map(honorAndAward => {
                            return (<li className="responsibilty">{honorAndAward}</li>)
                        })}
                    </ul>
                </div>
            </div>

             {/* Projects */}
             <h3 className="resume-header">Projects</h3>
            <hr />
            <div>
                {resumeData?.projects?.map(project => {
                    let startedDate = project.startedAt;
                    let startedDateArr = startedDate.split('-');
                    let endedDate = project.endedAt;
                    let endedDateArr = endedDate.split('-');
                    return (
                        <div className="resume-sub-details">
                            <ul>
                            {project.title && <li>{project.title}</li>}
                                {project.startedAt && <li>{monthNames[Number(startedDateArr[1]) - 1]} {" "}{startedDateArr[0]} to {monthNames[Number(endedDateArr[1]) - 1]} {" "}{endedDateArr[0]}</li>}
                            </ul>
                            <ul className="responsibilities">
                                {project?.descriptions?.map(description => {
                                    return (
                                        <li className="responsibilty">{description}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>

            {/* Publication */}
            <h3 className="resume-header">Publication</h3>
            <hr />
            <div>
                {resumeData?.publications?.map(publication=> {
                    return (
                        <div className="resume-sub-details">
                            <ul>
                                {publication?.title && <li>{publication.title}</li>}
                                {publication?.date && <li>{monthNames[Number(publication?.date.split('-')[1]) - 1]} {" "} {publication?.date.split('-')[0]}</li>}
                            </ul>
                            {publication?.descriptions && <ul className="responsibilities">
                                {publication?.descriptions?.map(des => {
                                    return (
                                        <li className="responsibilty">{des}</li>
                                    )
                                })}
                            </ul>}
                        </div>
                    )
                })}
            </div>

            {/* Patent */}
            <h3 className="resume-header">Patents</h3>
            <hr />
            <div>
                {resumeData?.patents?.map(patent=> {
                    return (
                        <div className="resume-sub-details">
                            <ul>
                                {patent?.title && <li>{patent.title}</li>}
                                {patent?.number && <li>{patent.number}</li>}
                                {patent?.status && <li>{patent.status}</li>}
                            </ul>
                            {patent?.descriptions && <ul className="responsibilities">
                                {patent?.descriptions?.map(des => {
                                    return (
                                        <li className="responsibilty">{des}</li>
                                    )
                                })}
                            </ul>}
                        </div>
                    )
                })}
            </div>

            {/* Training */}
            <h3 className="resume-header">Training</h3>
            <hr />
            <div>
                {resumeData?.trainings?.map(training => {
                    let startedDate = training.startedAt;
                    let startedDateArr = startedDate.split('-');
                    let endedDate = training.endedAt;
                    let endedDateArr = endedDate.split('-');
                    return (
                        <div className="resume-sub-details">
                            <ul>
                                {training.title && <li>{training.title}</li>}
                                {training.startedAt && <li>{monthNames[Number(startedDateArr[1]) - 1]} {" "}{startedDateArr[0]} to {monthNames[Number(endedDateArr[1]) - 1]} {" "}{endedDateArr[0]}</li>}
                            </ul>
                            <ul>
                                {training?.institutionName && <li>{training?.institutionName}</li>}
                                {training.city && <li>{training.city} {" "} {training.country} {" "} {training.score}</li>}
                            </ul>
                        </div>
                    )
                })}
            </div>

            {/* Course */}
            <h3 className="resume-header">Course</h3>
            <hr />
            <div>
                {resumeData?.courses?.map(course=> {
                    let startedDate = course.startedAt;
                    let startedDateArr = startedDate.split('-');
                    let endedDate = course.endedAt;
                    let endedDateArr = endedDate.split('-');
                    return (
                        <div className="resume-sub-details">
                            <ul>
                                {course?.title && <li>{course?.title}</li>}
                                {course?.startedAt && <li>{monthNames[Number(startedDateArr[1]) - 1]} {" "}{startedDateArr[0]} to {monthNames[Number(endedDateArr[1]) - 1]} {" "}{endedDateArr[0]}</li>}                           
                            </ul>
                            <ul>
                                <li>{course?.institutionName}</li>
                                <li>{course.city} {" "} {course.country} {" "} {course.score}</li>
                            </ul>
                        </div>
                    )
                })}
            </div>

            {/* Certification */}
            <h3 className="resume-header">Certification</h3>
            <hr />
            <div>
                {resumeData?.certifications?.map(certification=> {
                    let startedDate = certification.startedAt;
                    let startedDateArr = startedDate.split('-');
                    let endedDate = certification.endedAt;
                    let endedDateArr = endedDate.split('-');
                    return (
                        <div className="resume-sub-details">
                            <ul>
                                {certification.title && <li>{certification.title}</li>}
                                {certification.startedAt && <li>{monthNames[Number(startedDateArr[1]) - 1]} {" "}{startedDateArr[0]} to {monthNames[Number(endedDateArr[1]) - 1]} {" "}{endedDateArr[0]}</li>}
                            </ul>
                            <ul>
                            {certification?.institutionName && <li>{certification?.institutionName}</li>}
                                {certification.city && <li>{certification.city} {" "} {certification.country} {" "} {certification.score}</li>}
                            </ul>
                        </div>
                    )
                })}
            </div>

            {/* License */}
            <h3 className="resume-header">License</h3>
            <hr />
            <div>
                <div className="resume-sub-details">
                    <ul>
                        {resumeData?.license?.name && <li>{resumeData?.license?.name}</li>}
                        {resumeData?.license?.validFromresumeData?.license?.validFrom && resumeData?.license?.validFrom && <li>{monthNames[Number(resumeData?.license?.validFrom.split('-')[1]) - 1]} {" "} to {monthNames[Number(resumeData?.license?.validfrom.split('-')[1]) - 1]} {" "}</li>}
                    </ul>
                    <ul>
                        {resumeData?.license?.issuer &&<li>{resumeData?.license?.issuer}</li>}
                        {resumeData?.license?.number && <li>{resumeData?.license?.number}</li>}
                        {resumeData?.license?.city && <li>{resumeData?.license?.city} {" "} {resumeData?.license?.country} {" "}</li>}
                    </ul>
                </div>
            </div>

            {/* Education */}
            <h3 className="resume-header">Education</h3>
            <hr />
            <div>
                {resumeData?.educations?.map(education => {
                    let startedDate = education.startedAt;
                    let startedDateArr = startedDate.split('-');
                    let endedDate = education.endedAt;
                    let endedDateArr = endedDate.split('-');
                    return (
                        <div className="resume-sub-details">
                            <ul>
                                {education.degreeName && <li>{education.degreeName}</li>}
                                {education.startedAt && <li>{monthNames[Number(startedDateArr[1]) - 1]} {" "}{startedDateArr[0]} to {monthNames[Number(endedDateArr[1]) - 1]} {" "}{endedDateArr[0]}</li>}
                            </ul>
                            <ul>
                                {education.collegeName && <li>{education.collegeName}</li>}
                                {education.city && <li>{education.city} {" "} {education.country}</li>}
                            </ul>
                        </div>
                    )
                })}
            </div>

            {/* Interest */}
            <h3 className="resume-header">Interest</h3>
            <hr />
            <div>
                <ul>
                    <div className="resume-sub-details">
                        {resumeData?.interest?.map(inte => {
                            return (<li key={inte}>{inte}</li>)
                        })}
                    </div>
                </ul>
            </div>

            
            
            {/* Reference */}
            <h3 className="resume-header">Reference</h3>
            <hr />
            <div>
                {resumeData?.references?.map(reference=> {
                    return (
                        <div className="resume-sub-details">
                            <ul>
                                {reference?.name && <li>{reference.name}</li>}
                                {reference?.designation && <li>{reference.designation}</li>}
                            </ul>
                            <ul>
                                {reference?.company && <li>{reference.company}</li>}
                                {reference?.email && <li>{reference.email}</li>}
                            </ul>
                        </div>
                    )
                })}
            </div>

            {/* Personal Details */}
            <h3 className="resume-header">Personal Details</h3>
            <hr />
            <div>
                <div className="resume-sub-details">
                    <ul>
                        {resumeData.personalDetails?.languageKnown.map(lang => {
                            return (
                                <li>{lang}</li>
                            )
                        })}
                        {resumeData.personalDetails?.dateOfBirth && <li>{resumeData.personalDetails.dateOfBirth}</li>}
                        {resumeData.personalDetails?.nationality && <li>{resumeData.personalDetails.nationality}</li>}
                        {resumeData.personalDetails?.passport && <li>{resumeData.personalDetails.passport}</li>}
                    </ul>
                </div>
            </div>
        </div>
     );
})
 
export default ResumeComponent;