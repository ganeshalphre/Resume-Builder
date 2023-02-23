import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import ResumeComponent from './ResumePrint';



const ResumePDF = () => {
  const componentRef = useRef();

  return (
    <div className='pdf-print'>
      <ResumeComponent ref={componentRef} />
      <ReactToPrint
        trigger={() => <button className='download-pdf'>Download</button>}
        content={() => componentRef.current}
      />
    </div>
  );
};

export default ResumePDF;