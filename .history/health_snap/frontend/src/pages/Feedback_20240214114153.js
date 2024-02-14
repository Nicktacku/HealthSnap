import React, { useState } from "react";
import "../css/feedback.css";
import { Link } from "react-router-dom";

const Feedback = () => {
  const rating = [1, 2, 3, 4, 5];
  const [rate, setRate] = useState(0);
  const [clicked, setClicked] = useState(false);

  const clickedStar = (e) => {
    console.log(e.target.alt);
    setRate(e.target.alt);
    setClicked(true);
  };

  const setStar = (e) => {
    console.log(e.target.alt);
    setRate(e.target.alt);
    setClicked(false);
  };
  const removeStar = (e) => {
    if (!clicked) {
      setRate(0);
    }
  };

  return (
    <div class="feedback-container">
      <form id="feedbackForm">
        <div class="container" id="page1">
          <div class="image">
            <img src={require("../assets/SF1.gif")} alt="" />
          </div>
        </div>
        <p>Rate your experience:</p>
        {rating.map((star) => {
          if (star <= rate) {
            return (
              <img
                src={require("../assets/star1.png")}
                alt={`${star}`}
                value={`${star}`}
                className="star"
                onClick={clickedStar}
                onMouseEnter={setStar}
                onMouseLeave={removeStar}
              />
            );
          } else {
            return (
              <img
                src={require("../assets/star0.png")}
                alt={`${star}`}
                value={`${star}`}
                className="star"
                onMouseEnter={setStar}
              />
            );
          }
        })}
        <br />
        <br />
        <label for="feedback">Additional Feedback:</label>
        <textarea id="feedback" name="feedback" rows="4"></textarea>
        <br />
        <br />

        <Link to="/" className="btn">
          Submit
        </Link>
      </form>
    </div>
  );
};

export default Feedback;
