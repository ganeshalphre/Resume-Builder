import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import ResumeComponent from './ResumePrint';



const ResumePDF = () => {
  const componentRef = useRef();

  const naviagte = useNavigate();
  const {id} = useParams();

  const editResume = (e) => {
    e.preventDefault();
    naviagte(`/dashboard/edit-resume/${id}`, {state: {resumeId: id}})
  }
  return (
    <div className='pdf-print'>
      <ResumeComponent ref={componentRef} id={id}/>
      <div>
          <ReactToPrint
            trigger={() => <button className='download-pdf'>Download</button>}
            content={() => componentRef.current}
          />
          <button className='edit-pdf' onClick={e => editResume(e)}>Edit</button>
      </div>
    </div>
  );
};

export default ResumePDF;