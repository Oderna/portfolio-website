import React from "react";
import Container from 'react-bootstrap/Container';
import ImageOverlay from './ImageOverlay';
import CertificatesListJson from './CertificatesList.json';

import "./Certificates.css";

export default function Certificates() {
    const CertificateList = CertificatesListJson

    return (
        <Container className="certificates-section">
            <h1 className="certificate-heading">
                My <strong className="Fluorescent-Blue">Certificates </strong>
            </h1>
            <p>Here are a few certificates that I've recieved.</p>
            <Container fluid className="certificates-display">
            {
                CertificateList.map((certificate) => (<ImageOverlay src={certificate.downloadLink} verifyLink={certificate.verifyLink} downloadLink={certificate.downloadLink} fileType={certificate.fileType} />))
            }
            </Container>
        </Container>
    )
};