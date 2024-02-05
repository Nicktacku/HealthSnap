import React from "react";
import "./feedback.css";

const Feedback = () => {
  return (
    <div class="feedback-container">
      <form id="feedbackForm">
        <div class="container" id="page1">
          <div class="image">
            <img src="SF1.gif" alt="" />
          </div>
        </div>
        <p>Rate your experience:</p>
        <input type="radio" id="star5" name="rating" value="1" />
        <label class="star" for="star5">
          &#9733;
        </label>
        <input type="radio" id="star4" name="rating" value="2" />
        <label class="star" for="star4">
          &#9733;
        </label>
        <input type="radio" id="star3" name="rating" value="3" />
        <label class="star" for="star3">
          &#9733;
        </label>
        <input type="radio" id="star2" name="rating" value="4" />
        <label class="star" for="star2">
          &#9733;
        </label>
        <input type="radio" id="star1" name="rating" value="5" />
        <label class="star" for="star1">
          &#9733;
        </label>
        <br />
        <br />
        <label for="feedback">Additional Feedback:</label>
        <textarea id="feedback" name="feedback" rows="4"></textarea>
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Feedback;
