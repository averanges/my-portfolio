import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';

const MyPDFViewer = () => (
  <div className='w-screen h-screen flex justify-center items-center overflow-x-hidden'>
    <iframe src="/assets/1.pdf" className='w-full h-full'></iframe>
  </div>
);

export default MyPDFViewer;
