import React from "react";
import clauChihuahua from "../static/images/clauChihuahua.jpg";
import mirkaChihuahua from "../static/images/mirkaChihuahua.jpg";
import JessieJess from "../static/images/jessiEjess.png"

const AboutPage = () => {
  return (
    <>
      <h2>About Us</h2>

      <div class="container about-container">
        {/* Source: https://bootstrapious.com/p/team-page */}
        <div class="row text-center">
          <div class="col-xl-4 col-sm-4 mb-5">
            <div class="bg-white rounded shadow py-5 px-4">
              <img
                src={clauChihuahua}
                alt=""
                // width="100"
                class="img-fluid rounded-circle mb-3 img-thumbnail shadow"
              />
              <h5 class="mb-0">Clau Ramirez</h5>
              <span class="small text-uppercase text-muted">
                Software Developer
              </span>
              <ul class="social mb-0 list-inline mt-3">
                <li class="list-inline-item">
                  <a href="#" class="social-link">
                    <i class="fa fa-brands fa-github"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="social-link">
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
                  <a href="https://github.com/mirkiy" target="_blank"
        rel="noopener noreferrer" class="social-link">
                    <i class="fa fa-brands fa-github"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.linkedin.com/in/miroslava-zacharova/" target="_blank"
        rel="noopener noreferrer" class="social-link">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-xl-4 col-sm-4 mb-5">
            <div class="bg-white rounded shadow py-5 px-4">
              <img
                src={JessieJess}
                alt=""
                width="100"
                class="img-fluid rounded-circle mb-3 img-thumbnail shadow"
              />
              <h5 class="mb-0">Jessie Jess Dodge Dodge</h5>
              <span class="small text-uppercase text-muted">
                Software Developer
              </span>
              <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item">
                  <a href="https://github.com/jhtdod" target="_blank"
        rel="noopener noreferrer" class="social-link">
                    <i class="fa fa-brands fa-github"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.linkedin.com/in/jessie-dodge/" target="_blank"
        rel="noopener noreferrer" class="social-link">
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
