import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import '../../StyleSheets/tabel.css'
import '../../StyleSheets/dashboard.css'
import ResumeComponent from '../Resume/ResumePrint';

const Files = () => {
    const [resumeData, setResumeData] = useState([]);
    const [cardData, setCardData] = useState([]);
    const [inputId, setInputId] = useState(null);

    const [name, setName] = useState("");

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

    const updateResume = async(e, id) => {
        e.preventDefault();
        const d = {
            fileName: name
        }
        try {
            const {data} = await axios.put(`${process.env.REACT_APP_API}update-resume-name/${id}`, d);
            console.log({data});
            if(data.success) {
                setResumeData(data.resumes);
                setInputId(null);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const updateCard = async(e, id) => {
        e.preventDefault();
        const d = {
            fileName: name
        }
        try {
            const {data} = await axios.put(`${process.env.REACT_APP_API}update-smartcard-name/${id}`, d);
            console.log({data});
            if(data.success) {
                setCardData(data.smartCards);
                setInputId(null);
            }
        } catch (error) {
            console.log(error);
        }
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

    const changeInputId = (e, id) => {
        e.preventDefault();
        setInputId(id);
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
                        // console.log(index, componentRef.current);
                        return (
                            <tr key={index}>
                                {inputId != _id && <td data-label="name" className='file-name'><span>{fileName}</span>{" "}<i class="fa fa-pencil" aria-hidden="true" onClick={e => changeInputId(e, _id)}></i></td>}
                                {inputId == _id && <td data-label="name" className='file-name'><input type="text" defaultValue={fileName} onChange={e => setName(e.target.value)}  />{" "}<i class="fa fa-floppy-o" aria-hidden="true" onClick={e => updateResume(e, _id)}></i></td>}
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
                                {inputId != _id && <td data-label="name" className='file-name'><span>{fileName}</span>{" "}<i class="fa fa-pencil" aria-hidden="true" onClick={e => changeInputId(e, _id)}></i></td>}
                                {inputId == _id && <td data-label="name" className='file-name'><input type="text" defaultValue={fileName} onChange={e => setName(e.target.value)}  />{" "}<i class="fa fa-floppy-o" aria-hidden="true" onClick={e => updateCard(e, _id)}></i></td>}
                                <td></td>
                                <td data-label="edit" onClick={e => cardEdit(e, _id)}>Edit</td>
                                {/* <td data-label="download" onClick={e => cardDownload(e, _id)}>Download</td> */}
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