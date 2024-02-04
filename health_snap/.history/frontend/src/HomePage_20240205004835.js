import React from "react";

const HomePage = () => {
  return (
    <div>
      <section class="home" id="home">
        <div class="image">
          <img src="Images\S1.gif" />
        </div>

        <div class="content">
          <h3>Hi! I am</h3>
          <h1>Symptomata</h1>
          <p>Your Personal Health Companion</p>
          <p>
            Elevate your well-being with Symptomata! The medical app that
            harnesses the power of Non-Deterministic Finite Automata to decode
            symptoms and pave the way for personalized health solutions.
          </p>
          <a href="#icons" class="btn">
            {" "}
            CONTINUE <FontAwesomeIcon icon={faChevronRight} />
          </a>
        </div>
      </section>
      {/*!--home section ends*/}
      {/*!--icons section starts*/}
      <section class="icons-container" id="icons">
        <div class="icons">
          <FontAwesomeIcon icon={faUserMd} />
          <h3>Sympto-Mata</h3>
          <p>An application that cares.</p>
        </div>

        <div class="icons">
          <FontAwesomeIcon icon={faHeartbeat} />
          <h3>Liked by Users</h3>
          <p>User Friendly Application.</p>
        </div>

        <div class="icons">
          <FontAwesomeIcon icon={faStar} />
          <h3>Vission and Mission</h3>
          <p>Number 1 goal is to serve you.</p>
        </div>

        <div class="icons">
          <FontAwesomeIcon icon={faNotesMedical} />
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
            <h2>Symptomata: Your Wellness Companion</h2>
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
              Learn More <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </div>
        </div>
      </section>
      {/*!--about section ends--*/}

      {/*!--services section starts--*/}
      <section class="services" id="services">
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
            <Link to="/Consultation">
              {" "}
              Contact us Go to consult <FontAwesomeIcon
                icon={faChevronRight}
              />{" "}
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
            <span>UI/FRONT END DEVELOPER</span>
            <div class="share">
              <a href="https://www.facebook.com/Ms.MatchaLatte">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          <div class="box">
            <img src="Images/S.png" alt="" />
            <h3>SOPHIA</h3>
            <span>FRONT END DEVELOPER</span>
            <div class="share">
              <a href="https://www.facebook.com/thesophiareyes">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          <div class="box">
            <img src="Images/J.png" alt="" />
            <h3>JINO</h3>
            <span>React.js/FRONT END DEVELOPER</span>
            <div class="share">
              <a href="https://www.facebook.com/jino.llamadoo">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          <div class="box">
            <img src="Images/N.png" alt="" />
            <h3>NICHO</h3>
            <span>ALGORITHM/BACK END DEVELOPER</span>
            <div class="share">
              <a href="https://www.facebook.com/nick.salvada">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          <div class="box">
            <img src="Images/K.jpg" alt="" />
            <h3>KIA</h3>
            <span>DOCUMENTATION</span>
            <div class="share">
              <a href="https://www.facebook.com/malubagkia">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*!-- doctors section ends --*/}

      {/*!--review section starts--*/}

      <section class="review" id="review">
        <h1 class="heading">
          {" "}
          CLIENT'S <span>FEEDBACK</span>
        </h1>

        <div class="box-container">
          <div class="box">
            <img src="Images/S3.gif" alt="" />
            <h3>Bogart Batumbakal</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p class="text">
              During my testing, I encountered no glitches, crashes, or
              performance issues. The application responded promptly to
              commands, and data syncing across devices was seamless. The
              developers seem to have invested in optimizing performance,
              resulting in a reliable and stable platform.
            </p>
          </div>
          <div class="box">
            <img src="Images/S3.gif" alt="" />
            <h3>Amira Mugas</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p class="text">
              I recently had the opportunity to explore Symptomata, and I am
              thoroughly impressed with its functionality, user interface, and
              overall performance. As a user with diverse needs, I found that
              the application excelled in several key areas.
            </p>
          </div>
          <div class="box">
            <img src="Images/S3.gif" alt="" />
            <h3>Justin Santos</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p class="text">
              One of the standout features of Symptomata is its intuitive and
              user-friendly interface. Navigating through the various sections
              is a breeze, and the well-designed layout ensures that users can
              quickly access the features they need. The sleek design
              contributes to an enjoyable user experience, making it accessible
              for users of all technical abilities.
            </p>
          </div>
          <div class="box">
            <img src="Images/S3.gif" alt="" />
            <h3>Your review</h3>
            <div class="stars">
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <p class="text">We want to know your feedback</p>
            <a href="feedback.html" class="btn">
              ADD FEEDBACK <FontAwesomeIcon icon={faPlus} />
            </a>
          </div>
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
            </a>
          </div>

          <div class="box">
            <h3>Contact Us</h3>
            <a href="#">
              {" "}
              <FontAwesomeIcon icon={faChevronRight} /> +123-456-7890
            </a>
            <a href="#">
              {" "}
              <FontAwesomeIcon icon={faChevronRight} /> +639-456-7890
            </a>
            <a href="#">
              {" "}
              <FontAwesomeIcon icon={faChevronRight} /> meow@gmail.com
            </a>
            <a href="#">
              {" "}
              <FontAwesomeIcon icon={faChevronRight} /> Philippines
            </a>
          </div>

          <div class="box">
            <h3>Follow US</h3>
            <a href="#">
              {" "}
              <FontAwesomeIcon icon={faFacebookF} /> Facebook
            </a>
            <a href="#">
              {" "}
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </a>
            <a href="#">
              {" "}
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
          </div>
        </div>

        <div class="credit">
          {" "}
          created by <span>SYMPTOMATA TEAM</span> | @2024 All rights reserved
        </div>
      </section>
    </div>
  );
};

export default HomePage;
