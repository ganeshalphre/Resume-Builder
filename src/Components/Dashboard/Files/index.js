import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import '../../StyleSheets/tabel.css'
import ResumeComponent from '../Resume/ResumePrint';

const Files = () => {
    const [resumeData, setResumeData] = useState([]);
    const [cardData, setCardData] = useState([]);

    const componentRef = useRef(new Array());

    const navigate = useNavigate();

    useEffect(() => {
        getResumesDataByUser();
        getCardsDataByUser();
    }, [])

    const getResumesDataByUser = async() => {
        try {
            const {data} = await axios.get(`${process.env.REACT_APP_API}get-all-resume-by-user`)
            console.log(data);
            if(data.success) {
                setResumeData(data.resumes);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getCardsDataByUser = async() => {
        try {
            const {data} = await axios.get(`${process.env.REACT_APP_API}get-all-smartcard-by-user`)
            console.log(data);
            if(data.success) {
                setCardData(data.smartCards);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const resumeEdit = (e, id) => {
        e.preventDefault();
        navigate(`/dashboard/edit-resume/${id}`);
    }
    const resumeDelete = async(e, id) => {
        e.preventDefault();
        try {
            const {data} = await axios.delete(`${process.env.REACT_APP_API}delete-resume/${id}`);
            console.log({data})
            if(data.success) {
                setResumeData(data.resumes)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const resumeDownload = async(e, id) => {
        e.preventDefault();
        console.log("resume Download running", componentRef)
        return (
            <div className='file-pdf'>
                <ResumeComponent ref={componentRef} id={id}/>
            </div>
        )
    }

    const cardEdit = (e, id) => {
        e.preventDefault();
        navigate(`/dashboard/edit-smart-card/${id}`);
    }
    const cardDelete = async(e, id) => {
        e.preventDefault();
        console.log("working");
        try {
            const {data} = await axios.delete(`${process.env.REACT_APP_API}delete-smartcard/${id}`);
            console.log({data})
            if(data.success) {
                setCardData(data.smartCards)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const cardDownload = (e, id) => {
        e.preventDefault();
    }
 
    return ( 
        <div className="Files">
            <table>
                {/* <thead>
                    <tr>
                    <th scope="col">Account</th>
                    </tr>
                </thead> */}
                <tbody>
                    {resumeData.map((data, index) => {
                        const {fileName, _id} = data;
                        console.log(index, componentRef.current);
                        return (
                            <tr key={index}>
                                <td data-label="name">{fileName}</td>
                                <td data-label="edit" onClick={e => resumeEdit(e, _id)}>Edit</td>
                                <td data-label="download" onClick={e => resumeDownload(e, _id, index)} >
                                <div className='file-pdf'>
                                    <ResumeComponent ref={(element => componentRef.current.push(element))} id={_id}/>
                                </div>
                                    <ReactToPrint
                                        trigger={() => <span>Download</span>}
                                        content={() => componentRef.current[index]}
                                    />
                                </td>
                                <td data-label="delete" onClick={e => resumeDelete(e, _id)}>Delete</td>
                            </tr>
                        )
                    })}
                    {cardData.map((data, index) => {
                        const {fileName, _id} = data;
                        return (
                            <tr key={index}>
                                <td data-label="name">{fileName}</td>
                                <td data-label="edit" onClick={e => cardEdit(e, _id)}>Edit</td>
                                <td data-label="download" onClick={e => cardDownload(e, _id)}>Download</td>
                                <td data-label="delete" onClick={e => cardDelete(e, _id)}>Delete</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {/*<div>
                <ReactToPrint
                    trigger={() => <button className='download-pdf'>Download</button>}
                    content={() => componentRef.current}
                />
            </div> */}
        </div>
     );
}
 
export default Files;