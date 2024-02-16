import React, { useState } from "react";
import "../css/feedback.css";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Feedback = () => {
  const rating = [1, 2, 3, 4, 5];
  const [rate, setRate] = useState(0);
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

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

  let getFeedbacks = async () => {
    let response = await fetch("http://127.0.0.1:8000/feedbacks/");

    let data = await response.json();

    console.log("this is my name", data[0].patient_name);
  };

  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );

  let giveFeedback = async (e) => {
    e.preventDefault();

    let response = await fetch("http://127.0.0.1:8000/feedbacks/give", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.user_id,
        stars: rate,
        feedback: e.target.feedback.value,
      }),
    });

    navigate("/#review");
  };

  return (
    <div class="feedback-container">
      <form id="feedbackForm" onSubmit={giveFeedback}>
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

        <button type="submit" class="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Feedback;
