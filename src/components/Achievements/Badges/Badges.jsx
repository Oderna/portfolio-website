import React from "react";
import Container from 'react-bootstrap/Container';
import { Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";

export default function Badges() {
    const BadgeList = [
        {
            name: "Chatbot Building Essentials",
            link: "https://images.credly.com/size/400x400/images/2a334906-fff1-4047-bcd9-be94347d0dca/Chatbot_Building_Essentials_Foundational.png",
            preview: "https://www.credly.com/earner/earned/badge/d59d7c56-b059-4c87-9eb8-82e861010b8c"

        },
        {
            name: "HTML5 Specialist",
            link: "https://link.storjshare.io/jvvk7j4hchw7q7mb6p5fp3r6m56a/badges%2F158920753979.png?download=1",
            preview: "https://www.credly.com/earner/earned/badge/d59d7c56-b059-4c87-9eb8-82e861010b8c"

        },
        {
            name: "Alibaba Cloud Certified",
            link: "https://link.storjshare.io/jwjnr2bb5jvgvtduww7fcm54gyaa/badges%2FTB1Dr1DJ4v1gK0jSZFFXXb0sXXa-668-668.png?download=1",
            preview: "https://www.credly.com/earner/earned/badge/d59d7c56-b059-4c87-9eb8-82e861010b8c"

        },
        {
            name: "HTML5 Specialist",
            link: "https://link.storjshare.io/jvvk7j4hchw7q7mb6p5fp3r6m56a/badges%2F158920753979.png?download=1",
            preview: "https://www.credly.com/earner/earned/badge/d59d7c56-b059-4c87-9eb8-82e861010b8c"

        },
        {
            name: "Alibaba Cloud Certified",
            link: "https://link.storjshare.io/jwjnr2bb5jvgvtduww7fcm54gyaa/badges%2FTB1Dr1DJ4v1gK0jSZFFXXb0sXXa-668-668.png?download=1",
            preview: "https://www.credly.com/earner/earned/badge/d59d7c56-b059-4c87-9eb8-82e861010b8c"

        },
        {
            name: "HTML5 Specialist",
            link: "https://link.storjshare.io/jvvk7j4hchw7q7mb6p5fp3r6m56a/badges%2F158920753979.png?download=1",
            preview: "https://www.credly.com/earner/earned/badge/d59d7c56-b059-4c87-9eb8-82e861010b8c"

        },
    ]
    return (
        <Container className="badges-section">
            <h1 className="badges-heading">
                My <strong className="Fluorescent-Blue">Badges </strong>
            </h1>
            <p>Here are a few badges that I've recieved.</p>
            <Container>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={5}
                    freeMode={true}
                    navigation={true}
                    modules={[FreeMode, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {BadgeList.map((item) =>
                    (
                        <SwiperSlide>
                            <Image width="200px" height="200px" src={item.link} onClick={() => { window.open(item.preview) }} />
                        </SwiperSlide>
                    )
                    )}

                </Swiper>

            </Container>
        </Container>)
}