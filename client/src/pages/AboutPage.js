import React from "react";
import Stack from "react-bootstrap/Stack";
import clauChihuahua from "../static/images/clauChihuahua.jpg";
import mirkaChihuahua from "../static/images/mirkaChihuahua.jpg";
import jessieChihuahua from "../static/images/jessieChihuahua.jpg"

const AboutPage = () => {
  return (
    <>
      <h2>About Us</h2>
      <div className="container about-text">
        <p>
          Thanks for visiting our final project for the Software Development
          bootcamp at{" "}
          <a
            href="https://codeclan.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodeClan.{" "}
          </a>
        </p>
        <p>
          In this web application we've written a Java and Spring Boot server to
          connect our React client with our MongoDB database and the{" "}
          <a
            href="https://api.edinburghfestivalcity.com/explore"
            target="_blank"
            rel="noopener noreferrer"
          >
            Edinburgh Festivals API
          </a>
          .
        </p>
        <p>These are the main tools we've used: </p>
        <Stack direction="horizontal" className="about-icons">
          <img
            className="stack-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
          />
          <img
            className="stack-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg"
          />
          <img
            className="stack-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          />{" "}
          <img
            className="stack-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg"
          />
          <img
            className="stack-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
          />
        </Stack>
        <p style={{ paddingTop: "5vh", marginBottom: "0", fontSize: "1.5rem" }}>
          <a href="https://github.com/mirkiy/festival-planner-app" target="_blank" rel="noopener noreferrer">
            Have a peek at our project's repository !
          </a>
        </p>
      </div>

      <div class="container about-container">
        {/* Source: https://bootstrapious.com/p/team-page */}
        <div class="row text-center">
          <div class="col-xl-4 col-sm-4 mb-5">
            <div class="bg-white rounded shadow py-5 px-4">
              <img
                src={clauChihuahua}
                alt=""
                class="img-fluid rounded-circle mb-3 img-thumbnail shadow"
              />
              <h5 class="mb-0">Clau Ramirez</h5>
              <span class="small text-uppercase text-muted">
                Software Developer
              </span>
              <ul class="social mb-0 list-inline mt-3">
                <li class="list-inline-item">
                  <a
                    href="https://github.com/clauRamirez"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-link"
                  >
                    <i class="fa fa-brands fa-github"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/clau-ramirez-6b495a229/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-link"
                  >
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-xl-4 col-sm-4 mb-5">
            <div class="bg-white rounded shadow py-5 px-4">
              <img
                src={mirkaChihuahua}
                alt=""
                width="100"
                class="img-fluid rounded-circle mb-3 img-thumbnail shadow"
              />
              <h5 class="mb-0">Mirka Zacharova</h5>
              <span class="small text-uppercase text-muted">
                Software Developer
              </span>
              <ul class="social mb-0 list-inline mt-3">
                <li class="list-inline-item">
                  <a
                    href="https://github.com/mirkiy"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-link"
                  >
                    <i class="fa fa-brands fa-github"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/miroslava-zacharova/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-link"
                  >
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-xl-4 col-sm-4 mb-5">
            <div class="bg-white rounded shadow py-5 px-4">
              <img
                src={jessieChihuahua}
                alt=""
                width="100"
                class="img-fluid rounded-circle mb-3 img-thumbnail shadow"
              />
              <h5 class="mb-0">Jessie Dodge</h5>
              <span class="small text-uppercase text-muted">
                Software Developer
              </span>
              <ul class="social mb-0 list-inline mt-3">
                <li class="list-inline-item">
                  <a
                    href="https://github.com/jhtdod"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-link"
                  >
                    <i class="fa fa-brands fa-github"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/jessie-dodge/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-link"
                  >
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
