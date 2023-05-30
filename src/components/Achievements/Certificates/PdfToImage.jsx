
import React, { useState, useEffect } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import { StyleSheet } from '@react-pdf/renderer';

import { pdfjs } from 'react-pdf';
import { getPage } from 'pdfjs-dist/build/pdf';

// import './pdf.css'

//PDFjs worker from an external cdn

const PdfToImage = ({ pdfUrl, className }) => {
    const [imageData, setImageData] = useState(null);
  
    useEffect(() => {
      const loadPdfImage = async () => {
        try {
          pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
          const pdf = await pdfjs.getDocument(pdfUrl).promise;
          const page = await pdf.getPage(1);
          const viewport = page.getViewport({ scale: 1 });
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          await page.render({ canvasContext: context, viewport }).promise;
  
          const dataUrl = canvas.toDataURL('image/png');
          setImageData(dataUrl);
        } catch (error) {
          console.error('Error loading PDF:', error);
        }
      };
  
      loadPdfImage();
    }, [pdfUrl]);
  
    return (
      <div>
        {imageData && <img className={className} src={imageData} alt="PDF Image" />}
        {!imageData && <p>Loading PDF...</p>}
      </div>
    );
  };
  
  export default PdfToImage;