import React, { useState, useContext } from "react";
import axios from "axios";

import "./form.css";
// import Results from "./results.jsx";

function Form(props) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  let config = {
    headers: {
      Authorization: "Token 596ffa28-6d4b-49d8-8c91-b3823b9062a7",
    },
  };

  const computeClick = (e) => {
    let data = {
      email: email,
    };
    // e.preventDefault();
    const url = `https://api.buttondown.email/v1/subscribers`;
    axios
      .post(url, data, config)
      .then((response) => setSubmitted(true))
      .catch((error) => {
        setError(true);
        console.log(error);
        //   this.setState({onError: true});
      });
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  };

  return (
    <div>
      {submitted ? (
        <div className="SignUpBox-Submitted">
          Thanks for signing up to my newsletter! If you're curious, I built
          this by hosting a React app that sends a POST request to Buttondown,
          the email client I'm using. Then, I put it in an iFrame with Notion.
          Anyways-- Look out for a confirmation email! Thanks for the support!{" "}
        </div>
      ) : (
        <div className="SignUpBox-Container">
          <div className="SignUpBox-InputTable">
            <div className="SignUpBox-InputRow">
              <div className="SignUpBox-InputCell-Title">Your Email</div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="SignUpBox-InputCell"
                id="signUpBox-PasswordInput"
                type="email"
                value={email}
              ></input>
            </div>
          </div>
          <div className="SignUpBox-InputRow">
            <button
              className="SignUpBox-SignUpButton"
              onClick={(e) => computeClick()}
            >
              Submit
            </button>
          </div>
          {error && (
            <div className="SignUpBox-Error">
              {" "}
              Oops! There's been an error. Try again with a new, valid email
              address.{" "}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Form;
