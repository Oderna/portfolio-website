import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import IBM_AI_Engineering from "../../../Assets/certificates/IBM_AI_Engineering.png";
import Data_Science_Math_Skills from "../../../Assets/certificates/Data_Science_Math_Skills.png";
import ImageOverlay from './ImageOverlay';
import CertificatesListJson from './CertificatesList.json';

import "./Certificates.css";

export default function Certificates() {
    const CertificateList = CertificatesListJson

    return (
        <Container fluid className="certificates-section">
            {
                CertificateList.map((certificate) => (<ImageOverlay src={certificate.downloadLink} verifyLink={certificate.verifyLink} downloadLink={certificate.downloadLink} fileType={certificate.fileType} />))
            }
        </Container>

    )
};