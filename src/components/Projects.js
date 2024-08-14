import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-image1.png";
import projImg2 from "../assets/img/project-image2.png";
import projImg3 from "../assets/img/project-image3.png";
import projImg4 from "../assets/img/project-image4.png";
import projImg5 from "../assets/img/project-image5.png";
import projImg6 from "../assets/img/project-image6.png";
import gitHub from "../assets/img/github.png";
import weatherApp from "../assets/img/weatherApp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Quasar Blog",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Quasar Blog",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Quasar Blog",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Quasar Blog",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Quasar Blog",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Quasar Blog",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Quasar Blog</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Weather App</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">GitHub</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                    <Tab.Pane eventKey="second">
                      <img src={weatherApp} alt="Header Img"/>
                      <p>This is a development made in a challenge from the devChallenges website, they made an API available and from it I created a fully responsive website for climate control.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <img src={gitHub} alt="Header Img"/>     
                      <p>
                        <a href="https://github.com/juliadelisposte" target="_blank" rel="noopener noreferrer">Access here</a>
                      </p>              
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
