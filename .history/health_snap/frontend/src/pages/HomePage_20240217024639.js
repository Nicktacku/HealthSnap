import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faUserMd,
  faHeartbeat,
  faStar,
  faNotesMedical,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
  let [feedbacks, setFeedbacks] = useState([]);

  let getFeedbacks = async () => {
    let response = await fetch("http://127.0.0.1:8000/feedbacks/");

    let data = await response.json();

    console.log("this is my name", data[0].stars);

    setFeedbacks(data);
  };

  useEffect(() => {
    getFeedbacks();
  }, []);

  return (
    <div>
      <section class="home" id="home">
        <div class="image not-highlightable">
          <img src="Images\S1.gif" />
        </div>

        <div class="content">
          <h3>Hi! I am</h3>
          <h1>HealthSnap</h1>
          <p>Your Personal Health Companion</p>
          <p>
            Elevate your well-being with HealthSnap! The medical app that pave
            the way for personalized health solutions.
          </p>
          <a href="#icons" class="btn">
            {" "}
            CONTINUE <FontAwesomeIcon icon={faChevronRight} />
          </a>
        </div>
      </section>
      {/*!--home section ends*/}
      {/*!--icons section starts*/}
      <section
        className="icons-container"
        id="icons"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="icons">
          <FontAwesomeIcon
            icon={faUserMd}
            size="5x"
            className="change-iconColor"
          />
          <h3>Health Snap</h3>
          <p>An application that cares.</p>
        </div>

        <div className="icons">
          <FontAwesomeIcon
            icon={faHeartbeat}
            size="5x"
            className="change-iconColor"
          />
          <h3>Liked by Users</h3>
          <p>User Friendly Application.</p>
        </div>

        <div className="icons">
          <FontAwesomeIcon
            icon={faStar}
            size="5x"
            className="change-iconColor"
          />
          <h3>Vision and Mission</h3>
          <p>Number 1 goal is to serve you.</p>
        </div>

        <div className="icons">
          <FontAwesomeIcon
            icon={faNotesMedical}
            size="5x"
            className="change-iconColor"
          />
          <h3>Easy Access</h3>
          <p>You can use to mobile and desktop.</p>
        </div>
      </section>

      {/*!--about section starts*/}
      <section class="aboutus" id="aboutus">
        <h3 class="heading">
          {" "}
          <span>about</span> us{" "}
        </h3>

        <div class="row">
          <div class="image">
            <img src="Images/S2.gif" alt="" />
          </div>

          <div class="content">
            <h2>HealthSnap: Your Wellness Companion</h2>
            <p>
              This application was created by programmers with a mission to
              empower individuals in taking control of their well-being. The
              platform offers a holistic approach to health, integrating
              cutting-edge technology like artificial intelligence, wearables,
              and Non-Deterministic Finite Automata. With a user-friendly
              interface, it provides personalized insights, social support, and
              real-time recommendations for a balanced lifestyle. The developers
              strive to keep the platform responsive to evolving health trends,
              ensuring its continued relevance and effectiveness in promoting a
              healthier and happier community.
            </p>
            <a href="#book" class="btn">
              {" "}
              Get Started <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </div>
        </div>
      </section>
      {/*!--about section ends--*/}

      {/*!--services section starts--*/}
      <section
        class="services"
        id="services"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <h1 class="heading">
          {" "}
          our <span>services</span>
        </h1>

        <div class="box-container">
          <div class="box">
            <i class="fas fa-user-md"></i>
            <h3>Consult</h3>
            <p>
              This section is a consultation feature for early diagnosis in your
              health.
            </p>
            <Link to="/Consultation" class="btn">
              {" "}
              Go to Consult <FontAwesomeIcon icon={faChevronRight} />{" "}
            </Link>
          </div>

          <div class="box">
            <i class="fas fa-user-md"></i>
            <h3>Records</h3>
            <p>You can access your medical records here that you provided.</p>
            <Link to="/Record" class="btn">
              {" "}
              Go to Records <FontAwesomeIcon icon={faChevronRight} />{" "}
            </Link>
          </div>
        </div>
      </section>

      {/*!--services section ends--*/}
      {/*!-- doctors section starts --*/}

      <section class="doctors" id="doctors">
        <h1 class="heading">
          {" "}
          HEALTH SNAP <span> DEVELOPERS </span>{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <img src="Images/E.png" alt="" />
            <h3>ELAINE</h3>
            <span>UI / Frontend Developer</span>
            <div class="share">
              <a href="https://www.facebook.com/Ms.MatchaLatte" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://twitter.com/enzo_and_elaine" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.instagram.com/enzoandelaineofficial"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          <div class="box">
            <img src="Images/S.png" alt="" />
            <h3>SOPHIA</h3>
            <span>Frontend Developer</span>
            <div class="share">
              <a href="https://www.facebook.com/thesophiareyes" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://twitter.com/thesophiareyes" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com/smfreyes/?" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          <div class="box">
            <img src="Images/J.png" alt="" />
            <h3>JINO</h3>
            <span>React.js/Frontend Developer</span>
            <div class="share">
              <a href="https://www.facebook.com/jino.llamadoo" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://twitter.com/Taaaalooon" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com/nijllmd/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          <div class="box">
            <img src="Images/N.png" alt="" />
            <h3>NICHO</h3>
            <span>React.js / NFA Algorithm / Backend Developer </span>
            <div class="share">
              <a href="https://www.facebook.com/nick.salvada" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://twitter.com/aNazyN8?t=lZ5Msc3NRQu6AvQ_omaEdQ&s=09&fbclid=IwAR3sIBExEQ1SytGTa0wwz3rzqI_nY6XsuzsKZOce7so_7Cu3w5WtcQxQSqQ"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com/nicktacku07/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*!-- doctors section ends --*/}

      {/*!--review section starts--*/}

      <section
        class="review"
        id="review"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <h1 class="heading">
          {" "}
          CLIENT'S <span>FEEDBACK</span> <br></br>
          <Link to="/Feedback" class="btn">
            ADD FEEDBACK <FontAwesomeIcon icon={faPlus} />
          </Link>
        </h1>

        <div
          className="box-container overflow-auto box-feedback"
          style={{ height: "500px", width: "1100px" }}
        >
          {feedbacks.map((feedback) => {
            return (
              <div class="box" style={{ height: "500px" }}>
                <img src="Images/S3.gif" alt="" />
                <h3>Feedback</h3>
                {<img src={require("../assets/SF1.gif")} alt="" />}

                <p class="text truncate-height">
                  <br></br>
                  {feedback.feedback}
                </p>
              </div>
            );
          })}
          <br />
          <br />
        </div>
      </section>
      {/*!--review section ends--*/}

      {/*!--footer section starts--*/}

      <section class="footer">
        <div class="box-container">
          <div class="box">
            <h3>WebPage Link</h3>
            <a href="#home">
              {" "}
              <FontAwesomeIcon icon={faChevronRight} /> Home
            </a>
            <a href="#aboutus">
              {" "}
              <FontAwesomeIcon icon={faChevronRight} /> About Us
            </a>
            <a href="#services">
              {" "}
              <FontAwesomeIcon icon={faChevronRight} /> Services
            </a>
            <a href="#doctors">
              {" "}
              <FontAwesomeIcon icon={faChevronRight} /> Developers
            </a>
            <a href="#review">
              {" "}
              <FontAwesomeIcon icon={faChevronRight} /> Feedback
            </a>
          </div>

          <div class="box">
            <h3>Our Services</h3>
            <a href="#services">
              {" "}
              <FontAwesomeIcon icon={faChevronRight} /> Consult
              <br></br>
              <br></br>
              <FontAwesomeIcon icon={faChevronRight} /> Records
            </a>
          </div>

          <div class="box">
            <h3>Contact Us</h3>
            <a href="#">
              {" "}
              <FontAwesomeIcon icon={faChevronRight} /> +639-206-89123
            </a>
            <a href="#">
              {" "}
              <FontAwesomeIcon icon={faChevronRight} /> (7) 621-7098
            </a>
            <a href="#">
              {" "}
              <FontAwesomeIcon icon={faChevronRight} /> healthsnap@gmail.com
            </a>
            <a href="#">
              {" "}
              <FontAwesomeIcon icon={faChevronRight} /> Philippines
            </a>
          </div>

          <div class="box">
            <h3>Follow US</h3>
            <a
              href="https://www.facebook.com/profile.php?id=61556129057135"
              target="_blank"
            >
              {" "}
              <FontAwesomeIcon icon={faFacebookF} /> Facebook
            </a>
            <a href="https://twitter.com/Taaaalooon" target="_blank">
              {" "}
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </a>
            <a href="https://www.instagram.com/healtsnap" target="_blank">
              {" "}
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
          </div>
        </div>

        <div class="credit">
          {" "}
          Produced by <span>HealthSnap TEAM</span> | @2024 All Rights Reserved
        </div>
      </section>
    </div>
  );
};

export default HomePage;
