import React, { useState, useContext } from "react";
import axios from "axios";

import "./form.css";
// import Results from "./results.jsx";

function Form(props) {
  const [email, setEmail] = useState("");

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
    axios.post(url, data, config);

    //   .then((response) => setProb(response.data));
    //   (error) => {
    //     console.log(error);
    //   };
    //   .then((response) => setResults(true));

    // .catch((error)=>{
    //     console.log(error);
    //     //   this.setState({onError: true});
    //  });
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  };

  return (
    <div>
      {/* {prob ? ( */}
      <div>Hi </div>) : (
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
      </div>
      {/* )} */}
    </div>
  );
}

export default Form;
