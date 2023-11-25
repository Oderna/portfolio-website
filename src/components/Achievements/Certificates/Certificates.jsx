import React from "react";
import Container from 'react-bootstrap/Container';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper';

import ImageOverlay from './ImageOverlay';
import CertificatesListJson from './CertificatesList.json';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Certificates.css";

export default function Certificates() {
    const CertificateList = CertificatesListJson

    return (
        <Container fluid className="certificates-section">
            <h1 className="certificate-heading">
                My <strong className="Fluorescent-Blue">Certificates </strong>
            </h1>
            <p>Here are a few certificates that I've recieved.</p>
            <Swiper
                // install Swiper modules
                effect={'coverflow'}
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            >
                {
                    CertificateList.map((certificate) => (
                        <SwiperSlide>
                            <ImageOverlay src={certificate.downloadLink} verifyLink={certificate.verifyLink} downloadLink={certificate.downloadLink} fileType={certificate.fileType} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Container>
    )
};