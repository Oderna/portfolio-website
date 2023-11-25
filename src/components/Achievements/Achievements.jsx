import React from "react";
import Badges from "./Badges/Badges";
import Certificates from "./Certificates/Certificates";

import "./Achievements.css";

export default function Achievements() {
    return (
        <div className="achievements-section">
            <Certificates />
            <Badges />
        </div>
    )
};