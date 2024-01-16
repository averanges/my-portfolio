import React from 'react';

const MyPDFViewer = () => (
  <div className='w-screen h-screen flex justify-center items-center overflow-x-hidden'>
    <iframe src="/assets/Nick's Resume.pdf" className='w-full h-full'></iframe>
  </div>
);

export default MyPDFViewer;
