import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import PdfToImage from './PdfToImage'
import _ from "lodash"

const ImageOverlay = ({ src, verifyLink, downloadLink, fileType }) => {
  return (
    <div className="image-container">
      {fileType === "pdf" ? (
        <PdfToImage className="certificates-img-1" pdfUrl={src} />
      ) : (
        <Image className="certificates-img-1" src={src} rounded />
      )}
      <div className="content-overlay">
        <div className="overlay-content">
          {!_.isEmpty(verifyLink) && <Button variant="outline-light" className="button" onClick={() => {window.open(verifyLink, '_blank');}}>Verify Certificate</Button>}{' '}
          {!_.isEmpty(downloadLink) && <Button variant="outline-light" className="button" onClick={() => {window.open(downloadLink);}}>Download</Button>}{' '}
        </div>
      </div>


    </div>
  );
};

export default ImageOverlay;