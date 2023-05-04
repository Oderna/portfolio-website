import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import "./project.css";

function Projects() {
  const projectList = [
    {
      title: "Covid-Pneumonia-Classication",
      description:
        "I have designed an Imagenet Classification model using Keras and Tensorflow and Convolutional Neural network.",
      githubLink:
        "https://github.com/subhomoy-roy-choudhury/Covid-Pneumonia-Classication",
      imgPath:
        "https://socialify.git.ci/subhomoy-roy-choudhury/Covid-Pneumonia-Classication/image?language=1&owner=1&name=1&stargazers=1&theme=Light",
      demoLink: null,
    },
    {
      title: "Hack_IP",
      description:
        "This is a Command Line Tool that is used to track IP addresses and also to retrieve the system information.",
      githubLink: "https://github.com/subhomoy-roy-choudhury/Hack_IP",
      imgPath:
        "https://socialify.git.ci/subhomoy-roy-choudhury/Hack_IP/image?language=1&owner=1&name=1&stargazers=1&theme=Light",
      demoLink: null,
    },
    {
      title: "Research Paper Finder",
      description:
        "This is a command-line tool to extract research paper details along with their download links with the help of keywords",
      githubLink:
        "https://github.com/subhomoy-roy-choudhury/Research_Paper_Finder",
      imgPath:
        "https://socialify.git.ci/subhomoy-roy-choudhury/Research_Paper_Finder/image?language=1&owner=1&name=1&stargazers=1&theme=Light",
      demoLink: null,
    },
    {
      title: "local-software-development-toolkit",
      description:
        "local setup for MongoDb, Solr, PostgreSQL, pgAdmin etc using Docker, Python and Go",
      githubLink:
        "https://github.com/subhomoy-roy-choudhury/local-software-development-toolkit",
      imgPath:
        "https://socialify.git.ci/subhomoy-roy-choudhury/local-software-development-toolkit/image?language=1&owner=1&name=1&stargazers=1&theme=Light",
      demoLink: null,
    },
    {
      title: "SSH Manager",
      description: "Toolkit to manage ssh connection using bash",
      githubLink: "https://github.com/subhomoy-roy-choudhury/SSH-Manager",
      imgPath:
        "https://socialify.git.ci/subhomoy-roy-choudhury/SSH-Manager/image?language=1&owner=1&name=1&stargazers=1&theme=Light",
      demoLink: null,
    },
    {
      title: "Family Tree Generator",
      description:
        "CLI Tool for adding family members and get the relation between them",
      githubLink:
        "https://github.com/subhomoy-roy-choudhury/Family-Tree-Generator",
      imgPath:
        "https://socialify.git.ci/subhomoy-roy-choudhury/Family-Tree-Generator/image?language=1&owner=1&name=1&stargazers=1&theme=Light",
      demoLink: null,
    },
  ];
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectList.map((item) => (
            <Col md={6} lg={4} className="project-card">
              <ProjectCard
                imgPath={item.imgPath}
                title={item.title}
                description={item.description}
                ghLink={item.githubLink}
                demoLink={item.demoLink}
              />
            </Col>
          ))}
        </Row>
        <Button
          href={"https://github.com/subhomoy-roy-choudhury"}
          target="_blank"
          style={{ marginLeft: "10px" }}
        >
          More Projects
        </Button>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
