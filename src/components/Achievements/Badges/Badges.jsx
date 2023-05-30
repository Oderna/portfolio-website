import React from "react";
import Container from 'react-bootstrap/Container';
import { Image } from "react-bootstrap";

export default function Badges () {
    const BadgeList = [
        {
            name: "Chatbot Building Essentials",
            link: "https://images.credly.com/size/110x110/images/2a334906-fff1-4047-bcd9-be94347d0dca/Chatbot_Building_Essentials_Foundational.png",
            preview: "https://www.credly.com/earner/earned/badge/d59d7c56-b059-4c87-9eb8-82e861010b8c"

        },
        {
            name: "Chatbot Building Essentials",
            link: "https://images.credly.com/size/110x110/images/2a334906-fff1-4047-bcd9-be94347d0dca/Chatbot_Building_Essentials_Foundational.png",
            preview: "https://www.credly.com/earner/earned/badge/d59d7c56-b059-4c87-9eb8-82e861010b8c"

        }
    ]
    return (
    <Container className="badges-section">
        <h1 className="badges-heading">
            My <strong className="Fluorescent-Blue">Badges </strong>
        </h1>
        <p>Here are a few badges that I've recieved.</p>
        <Container>
            {BadgeList.map((item) => 
                (
                    <Image src={item.link} onClick={() => {window.open(item.preview)}} />
                )
            ) }
        </Container>
    </Container>)
}