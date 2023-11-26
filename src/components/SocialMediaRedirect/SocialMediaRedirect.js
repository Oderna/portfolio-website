// SocialMediaRedirect.js
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import socialMediaRoutes from "./socialMediaConfig";
import ReactGA from "react-ga4"; // or 'react-ga4' for Google Analytics 4

const SocialMediaRedirect = () => {
  const { platform } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const url = socialMediaRoutes[platform];

    if (url) {
      // Track with Google Analytics
      ReactGA.event({
        category: "Social Redirect",
        action: "Redirect to social media",
        label: platform,
      });

      // Perform redirection
      window.location.href = url;
    } else {
      // Handle unknown platform
      console.log("Unknown platform:", platform);
      // Redirect to home or show an error message
      navigate("/");
    }
  }, [platform, navigate]);

  return <div>Redirecting...</div>;
};

export default SocialMediaRedirect;
